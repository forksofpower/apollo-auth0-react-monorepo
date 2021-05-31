import express from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from "./graphql/schema";
import logger from "morgan";
import { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import jwt from "jsonwebtoken";
import jwks from "jwks-rsa";
import { Accounts } from './core';
import { VerifyOptions } from 'jsonwebtoken';

const port = 4000;

const app = express();

type DecodedJWT = {
    sub: string;
    email: string;
};
/**
 * The JWT/RSA code is hard
 * Learn more below:
 * https://auth0.com/blog/develop-modern-apps-with-react-graphql-apollo-and-add-authentication/
 */
 const client = jwks({
  jwksUri: `https://pmjones88.us.auth0.com/.well-known/jwks.json`,
});

/**
 * JWT options that should be verified
 */
const jwtOptions: VerifyOptions = {
  audience: 'localhost:4000',
  issuer: 'https://pmjones88.us.auth0.com/',
  algorithms: ['RS256'],
};

/**
 * Get Signing Key for JWT
 */
function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  client.getSigningKey(
    header.kid || '',
    function (err, key: jwks.SigningKey) {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    }
  );
}

const server = new ApolloServer({
    schema,
    playground: true,
    context: async ({ req }) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            const createAccountRuleJWT = req.headers['auth0-rules-authorization'];

            // No token was found
            // Skip JWT verification
            if (!token) {
              return {
                account: undefined,
                // Send the JWT from the configured auth0 rules if present
                // Currently used for adding new users to the local DB.
                createAccountRuleJWT: createAccountRuleJWT,
              }
            }

            const decodedJWT = await new Promise<DecodedJWT>((resolve, reject) => {
                jwt.verify(token, getKey, jwtOptions, (err, decodedJWT) => {
                  if (err) {
                    return reject(err);
                  }
        
                  resolve(decodedJWT as DecodedJWT);
                });
            });
            
            const account = await Accounts.accountFindByAuth0UserId(decodedJWT.sub);

            return { account: account, createAccountRuleJWT: createAccountRuleJWT, }
        } catch(error) {
            console.error(error);
            return { account: undefined }
        }
    }
});

/* Middleware */
app.use(bodyParser.json())
// app.use(express.json());

const corsOptions: CorsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3000'],
  credentials: true,
  methods: ["POST"]
}
app.use(cors(corsOptions));

server.applyMiddleware({ app, cors: corsOptions });

app.use(logger('dev'));

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