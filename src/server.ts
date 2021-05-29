import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from "./graphql/schema";

const port = 3000;

const app = express();

const server = new ApolloServer({
    schema,
    playground: true
});

/* Middleware */
app.use(bodyParser.json());

app.use("*", cors());

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