import { mergeTypeDefs } from "@graphql-tools/merge";
import { accounts } from './account.gql';
import { users } from './user.gql';

export const typeDefs = mergeTypeDefs([
    accounts,
    users
]);