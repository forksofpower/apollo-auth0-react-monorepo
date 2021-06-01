import { gql } from 'graphql-tag';

export const chats = gql`
  scalar DateTime

  type Chat {
    id: Int!
    message: String!
    createdAt: DateTime!
    account: Account!
  }

  type ChatResponse {
    message: Chat!
  }

  type ChatsListAllResponse {
    messages: [Chat!]!
  }

  type Query {
    chatsListAll: ChatsListAllResponse
  }

  type Mutation {
    sendMessage(from: String!, message: String!): ChatResponse
  }

  type Subscription {
    messageSent: ChatResponse
  }
`;
