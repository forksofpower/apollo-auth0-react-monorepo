import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from "./graphql/schema";
import logger from "morgan";

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