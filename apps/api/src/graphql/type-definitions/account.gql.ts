import { gql } from 'graphql-tag';

export const accounts = gql`
  "The account"
  type Account {
    "The account id"
    id: Int!
    "The account email"
    email: String!
    "The list of account chats"
    chats: [Chat!]!
    "The list of account posts"
    posts: [Post!]!
  }

  "The accountFindOrCreate input"
  input AccountFindOrCreateInput {
    "The account email address"
    email: String!
    "The account identity provider subject (must be unique)"
    auth0UserId: String!
  }

  "The accountFindOrCreate response"
  type AccountFindOrCreateResponse {
    "The new account"
    account: Account
  }

  type Mutation {
    "Find or create an account"
    accountFindOrCreate(
      input: AccountFindOrCreateInput!
    ): AccountFindOrCreateResponse!
  }
`;
