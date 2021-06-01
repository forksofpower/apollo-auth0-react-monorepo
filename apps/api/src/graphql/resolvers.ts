import { Resolvers } from "./generated";
import GraphQLDateTime from 'graphql-type-datetime';

import {
    postCreate, postUpdate, postDestroy, postsFindOne, postsListAll
} from './resolvers/post';
import { create as accountFindOrCreate } from './resolvers/account'
import { listAll as chatsListAll, sendMessage, messageSent } from './resolvers/chat';

const resolvers: Resolvers = {
    Query: {
        postsFindOne,
        postsListAll,
        chatsListAll,
    },
    Mutation: {
        accountFindOrCreate,
        sendMessage,
        postCreate,
        postUpdate,
        postDestroy
    },
    Subscription: {
        messageSent
    },
    DateTime: GraphQLDateTime
}

export default resolvers;