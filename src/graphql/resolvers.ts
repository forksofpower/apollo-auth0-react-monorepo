import { IResolvers } from "graphql-tools";

import {
    userCreate, userUpdate, userDestroy, usersFindOne, usersListAll
} from './resolvers/user';

const resolvers: IResolvers = {
    Query: {
        usersFindOne,
        usersListAll
    },
    Mutation: {
        userCreate,
        userUpdate,
        userDestroy
    }
}

export default resolvers;