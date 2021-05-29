import { getManager } from "typeorm"
import { User } from "../user"

/**
 * User repository helper
 */
const userRepo = () => getManager().getRepository<User>('User');

/**
 * List all Users
 * 
 * @returns User[]
 */

export const listAll = async (): Promise<User[]> => {
    const repo = userRepo();
    
    return await repo.find();
}

/**
 * Find a User by ID
 * 
 * @param id 
 * @returns User
 */
export const findById = async (id: number): Promise<User> => {
    const repo = userRepo();

    console.log(`ID: ${id}`);
    return await repo.findOne(id);
}

/**
 * Create a User
 * 
 * @param data 
 * @returns 
 */
export interface CreateParams {
    email: string;
    firstName: string;
    lastName: string;
}
export const create = async (params: CreateParams): Promise<User> => {
    const repo = userRepo();
    const user = await repo.create(params);
    
    return await repo.save(user);
}

/**
 * Update a user by ID
 */
export interface UpdateParams {
    email?: string;
    firstName?: string;
    lastName?: string;
}
export const update = async (id: number, params: UpdateParams): Promise<User> => {
    const user = await findById(id);
    const repo = userRepo();

    repo.merge(user, params);
    return await repo.save(user);
}

/**
 * Delete a user by id
 * 
 * @param id 
 * @returns 
 */

export const destroy = async (id: number): Promise<User> => {
    const repo = userRepo();
    const user = await findById(id);
    
    await repo.delete(id);
    
    return user;
}