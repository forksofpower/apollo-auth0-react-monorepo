import { getManager } from "typeorm"
import { Accounts } from "../";
import { Post } from "../post"

/**
 * Post repository helper
 */
const postRepo = () => getManager().getRepository<Post>('Post');

/**
 * List all Posts
 * 
 * @returns Post[]
 */

export const listAll = async (): Promise<Post[]> => {
    const repo = postRepo();
    
    return await repo.find();
}

/**
 * Find a Post by ID
 * 
 * @param id 
 * @returns Post
 */
export const findById = async (id: number): Promise<Post> => {
    const repo = postRepo();
    
    return await repo.findOne(id);
}

/**
 * Create a Post
 * 
 * @param data 
 * @returns 
 */
export interface CreateParams {
    content: string;
    accountId: number;
}
export const create = async ({ content, accountId }: CreateParams): Promise<Post> => {
    const repo = postRepo();
    const account = await Accounts.accountFindByPrimaryKey(accountId);
    const post = await repo.create({ content, account });
    
    return await repo.save(post);
}

/**
 * Update a post by ID
 */
export interface UpdateParams {
    content?: string;
}
export const update = async (id: number, params: UpdateParams): Promise<Post> => {
    const post = await findById(id);
    const repo = postRepo();

    repo.merge(post, params);
    return await repo.save(post);
}

/**
 * Delete a post by id
 * 
 * @param id 
 * @returns 
 */

export const destroy = async (id: number): Promise<Post> => {
    const repo = postRepo();
    const post = await findById(id);
    
    await repo.delete(id);
    
    return post;
}