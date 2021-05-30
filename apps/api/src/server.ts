import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from "./graphql/schema";
import logger from "morgan";
import jwt from "jsonwebtoken";
import { auth, requiresAuth } from "express-openid-connect";
import { Accounts } from './core';
import { VerifyOptions } from 'jsonwebtoken';

const port = 4000;

const app = express();

type DecodedJWT = {
    sub: string;
    email: string;
};

const jwtOptions: VerifyOptions = {
    audience: 'tXKb5prH3WZLs2QMab2z7996ylkSxNKa',
    issuer: 'https://pmjones88.us.auth0.com',
    algorithms: ['RS256']
}

const server = new ApolloServer({
    schema,
    playground: true,
    context: async ({ req }) => {
        try {
            const token = req.headers.authorization;

            // No token was found
            // Skip JWT verification
            if (!token) {
                return {
                    account: undefined
                }
            }

            const decodedJWT = jwt.decode(token) as DecodedJWT;
            // = await new Promise<DecodedJWT>((resolve, reject) => {
            //     const  = jwt.decode(token);
            //     // jwt.verify(token,'f6YlN-sGU-KNHpipn6g1ryyKYJn1kQDcyUkrscUFUlPVTuwsbGei_kdLkBk_9Lr_', jwtOptions, (err, jwt) => {
            //     //     if (err) reject(err);

            //     //     resolve(jwt as DecodedJWT);
            //     // });
            // });
            // const auth = req.oidc.user;

            // if (!auth || !req.oidc.isAuthenticated()) {
            //     console.log('NOT AUTHENTICATED!');
            //     return {
            //         account: undefined
            //     }
            // }
            const { sub: auth0UserId, email} = decodedJWT;
            const account = await Accounts.accountFindOrCreateByAuth0UserId(
                auth0UserId, email
            );

            return { account: account }
        } catch(error) {
            console.log(error);
        }
    }
});

/* Middleware */
app.use(bodyParser.json())
// app.use(express.json());

app.use("*", cors());

app.use(logger('dev'));

app.use(auth({
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: '5CXqpZf4UPKTDpcZBobR3NFBFvwp5mQB',
    issuerBaseURL: 'https://pmjones88.us.auth0.com',
    secret: 'f6YlN-sGU-KNHpipn6g1ryyKYJn1kQDcyUkrscUFUlPVTuwsbGei_kdLkBk_9Lr_'
}));

app.get('/', requiresAuth(), async (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    // res.send(req.oidc.user);
    const auth = req.oidc.user;


    if (!auth || !req.oidc.isAuthenticated()) {
        res.sendStatus(400)
    }
    const { sub: auth0UserId, email} = req.oidc.user;
    const account = await Accounts.accountFindOrCreateByAuth0UserId(
        auth0UserId, email
    );

    res.send(account);
});

server.applyMiddleware({ app, cors: true });

/* Server */
async function start() {
    try {
        await createConnection();
    } catch(e) {
        throw e;
    }

    app.listen(port, () => {
        console.log(`🚀 Server is listening on port ${port}`)
    });
}

void start();