import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User } from './core';

const port = 3000;

createConnection().then(connection => {
    const app = express();

    app.use(bodyParser.json())

    const userRepository = connection.getRepository(User)
    
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello, World!');
    })
    app.get("/users", async function(req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    });
    
    app.get("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });
    
    app.post("/users", async function(req: Request, res: Response) {
        console.log(req.body);
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });
    
    app.put("/users/:id", async function(req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id);
        if (user) {
            userRepository.merge(user, req.body);
            const results = await userRepository.save(user);    
            return res.send(results);
        } else {
            return res.sendStatus(404)
        }
        
    });
    
    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });
    
    app.listen(port, () => {
        console.log(`🚀 Server is listening on port ${port}`)
    });
})