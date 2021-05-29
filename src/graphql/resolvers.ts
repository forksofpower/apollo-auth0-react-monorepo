import { IResolvers } from "graphql-tools";
import { Resolvers } from "./generated";

import {
    userCreate, userUpdate, userDestroy, usersFindOne, usersListAll
} from './resolvers/user';

const resolvers: Resolvers = {
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