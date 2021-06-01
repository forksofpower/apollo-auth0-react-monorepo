import { gql } from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { accounts } from './account.gql';
import { posts } from './post.gql';
import { chats } from './chat.gql';

export const typeDefs = mergeTypeDefs([
    accounts,
    chats,
    posts,
]);