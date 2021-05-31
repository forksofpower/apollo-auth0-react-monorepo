import { Resolvers } from "./generated";

import {
    userCreate, userUpdate, userDestroy, usersFindOne, usersListAll
} from './resolvers/user';
import { create as accountFindOrCreate } from './resolvers/account'

const resolvers: Resolvers = {
    Query: {
        usersFindOne,
        usersListAll
    },
    Mutation: {
        accountFindOrCreate,
        userCreate,
        userUpdate,
        userDestroy
    }
}

export default resolvers;