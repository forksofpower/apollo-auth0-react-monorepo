import { DeleteResult, getManager } from "typeorm"
import { User } from "../user"

/**
 * List all Users
 * 
 * @returns User[]
 */

export const listAll = async (): Promise<User[]> => {
    const repo = getManager().getRepository<User>('User');
    
    return await repo.find();
}

/**
 * Find a User by ID
 * 
 * @param id 
 * @returns User
 */
export const findById = async (id: string): Promise<User> => {
    const repo = getManager().getRepository<User>('User');

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
    const repo = getManager().getRepository<User>('User');
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
export const update = async (id: string, params: UpdateParams): Promise<User> => {
    const user = await findById(id);
    const repo = getManager().getRepository<User>('User');

    repo.merge(user, params);
    return await repo.save(user);
}

/**
 * Delete a user by id
 * 
 * @param id 
 * @returns 
 */

export const destroy = async (id: string): Promise<User> => {
    const repo = getManager().getRepository<User>('User');
    const user = findById(id);
    
    await repo.delete(id);
    
    return user;
}