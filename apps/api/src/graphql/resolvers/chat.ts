import { Chats } from "../../core";
import { AuthenticatedContext, SubscriptionContext } from "../../types/resolver-context";
import { Chat, ChatResponse, ChatsListAllResponse, MutationSendMessageArgs, ResolverTypeWrapper, SubscriptionResolver, SubscriptionResolverObject } from "../generated";

const CHAT_CHANNEL = 'CHAT_CHANNEL';

/**
 * Query Resolvers
 */
export const listAll = async (): Promise<ChatsListAllResponse> => {
    const messages = await Chats.listAll();
    return { messages };
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

    return { message: chat}
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