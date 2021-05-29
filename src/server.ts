import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from "./graphql/schema";
import logger from "morgan";
import { auth, requiresAuth } from "express-openid-connect";

const port = 3000;

const app = express();

const server = new ApolloServer({
    schema,
    playground: true
});

/* Middleware */
app.use(express.json());

app.use("*", cors());

app.use(logger('dev'));

app.use(auth({
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: 'tXKb5prH3WZLs2QMab2z7996ylkSxNKa',
    issuerBaseURL: 'https://pmjones88.us.auth0.com',
    secret: '_xGoOqy0PR4ZVIZk4s38uw_OcDWr2Lm3eFkZC8JQ7LovZb9e4zl6rIaZa1zkAf_n'
}));

app.get('/', requiresAuth(), (req, res) => {
    console.log(req.oidc.isAuthenticated);
    res.send(req.oidc.user);
})

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