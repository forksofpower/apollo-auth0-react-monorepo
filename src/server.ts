import bodyParser from 'body-parser';
import express, { application, Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User, Users } from './core';

const port = 3000;

const app = express();

/* Middleware */
app.use(bodyParser.json())

/* Routes */
app.get("/users", async function(req: Request, res: Response) {
    const users = await Users.listAll();
    res.json(users);
});

app.get("/users/:id", async function(req: Request, res: Response) {
    const results = await Users.findById(req.params.id);
    return res.send(results);
});

app.post("/users", async function(req: Request, res: Response) {
    const user = await Users.create(req.body);
    return res.send(user);
});

app.put("/users/:id", async function(req: Request, res: Response) {
    const user = await Users.update(req.params.id, req.body);
    return res.send(user);
});

app.delete("/users/:id", async function(req: Request, res: Response) {
    const user = await Users.destroy(req.params.id);

    return res.send(user);
    });

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