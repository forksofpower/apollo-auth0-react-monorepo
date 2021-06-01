import { mergeTypeDefs } from "@graphql-tools/merge";
import { accounts } from './account.gql';
import { users } from './user.gql';
import { chats } from './chat.gql';

export const typeDefs = mergeTypeDefs([
    accounts,
    users,
    chats
]);