import { Resolvers } from "./generated";

import {
    userCreate, userUpdate, userDestroy, usersFindOne, usersListAll
} from './resolvers/user';
import { create as accountFindOrCreate } from './resolvers/account'
import { listAll as chatsListAll, sendMessage, messageSent } from './resolvers/chat';

const resolvers: Resolvers = {
    Query: {
        usersFindOne,
        usersListAll,
        chatsListAll,
    },
    Mutation: {
        accountFindOrCreate,
        sendMessage,
        userCreate,
        userUpdate,
        userDestroy
    },
    Subscription: {
        messageSent
    }
}

export default resolvers;