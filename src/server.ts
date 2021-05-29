import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User, Users } from './core';

const port = 3000;

createConnection().then(connection => {
    const app = express();

    app.use(bodyParser.json())

    const userRepository = connection.getRepository(User)
    
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello, World!');
    })
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
    
    app.listen(port, () => {
        console.log(`🚀 Server is listening on port ${port}`)
    });
})