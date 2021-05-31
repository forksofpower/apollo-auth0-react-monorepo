import gql from "graphql-tag";

export const users = gql`
    type User {
        id: Int!
        email: String!
        firstName: String!
        lastName: String!
    }
    input UserInput {
        id: Int
        email: String!
        firstName: String!
        lastName: String!
    }

    input UserCreateInput {
        user: UserInput!
    }
    type UserCreateResponse {
        user: User
    }
    input UserUpdateInput {
        user: UserInput!
    }
    type UserUpdateResponse {
        user: User
    }
    input UserDestroyInput {
        userId: Int!
    }
    type UserDestroyResponse {
        user: User
    }
    input UsersFindOneInput {
        userId: Int!
    }
    type UsersListAllResponse {
        users: [User!]!
    }
    type UsersFindOneResponse {
        user: User
    }
    type Mutation {
        userCreate(
            input: UserCreateInput!
        ): UserCreateResponse!
        userUpdate(
            input: UserUpdateInput!
        ): UserUpdateResponse!
        userDestroy(
            input: UserDestroyInput!
        ): UserDestroyResponse!
    }
    type Query {
        usersListAll: UsersListAllResponse!
        usersFindOne(
            input: UsersFindOneInput!
        ): UsersFindOneResponse!
    }
`;