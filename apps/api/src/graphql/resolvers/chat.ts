import { Chats, Chat } from "../../core";
import { AuthenticatedContext, SubscriptionContext } from "../../types/resolver-context";
import { Chat as GraphChat, ChatResponse, ChatsListAllResponse, MutationSendMessageArgs, Account as GraphAccount } from "../generated";

const CHAT_CHANNEL = 'CHAT_CHANNEL';

const formatChatMessage = (chat: Chat): GraphChat  => {
    return {
        id: chat.id,
        createdAt: chat.createdAt,
        message: chat.message,
        account: chat.account as unknown as GraphAccount
    }
}

const formatChatMessageList = (chats: Chat[]): GraphChat[] => {
    return chats.map(chat => formatChatMessage(chat));
}

/**
 * Query Resolvers
 */
export const listAll = async (): Promise<ChatsListAllResponse> => {
    const chats = await Chats.listAll();
    return { messages: formatChatMessageList(chats) };
}

/**
 * Mutation Resolvers
 */
export const sendMessage = async (
    _parent: unknown, 
    { from, message }: MutationSendMessageArgs, 
    { pubsub }: AuthenticatedContext & SubscriptionContext,
): Promise<ChatResponse> => {
    const chat = await Chats.sendMessage({ from, message });
    pubsub.publish('CHAT_CHANNEL', { messageSent: chat })

    return { message: formatChatMessage(chat) }
}

/**
 * Subscription Resolvers
 */
export const messageSent = {
    subscribe: (
        _parent: unknown,
        _input: unknown,
        { pubsub }: SubscriptionContext
    ) => pubsub.asyncIterator(CHAT_CHANNEL),
    resolve: (x) => x
}