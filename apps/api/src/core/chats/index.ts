import { getManager } from "typeorm"
import { Chat } from "../chat"

/**
 * Chat repository helper
 */
const chatRepo = () => getManager().getRepository<Chat>('Chat');

export interface CreateParams {
    from: string;
    message: string;
}

export const sendMessage = async (params: CreateParams): Promise<Chat> => {
    const repo = chatRepo();
    const chat = await repo.create(params);
    
    return await repo.save(chat);
}

export const listAll = async (): Promise<Chat[]> => {
    const repo = chatRepo();
    const chats = await repo.find();
    return chats;
}