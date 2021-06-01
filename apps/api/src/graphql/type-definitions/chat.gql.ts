import { gql } from 'graphql-tag';

export const chats = gql`
  type Chat {
    id: Int!
    from: String!
    message: String!
    poster: Account!
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
