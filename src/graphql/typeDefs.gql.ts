import gql from "graphql-tag";

export default gql`
    input UserInput {
        id: String
        email: String!
        firstName: String!
        lastName: String!
    }
    type UserResponse {
        id: String!
        email: String!
        firstName: String!
        lastName: String!
    }
    input UserCreateInput {
        user: UserInput!
    }
    input UserUpdateInput {
        user: UserInput!
    }
    input UserDestroyInput {
        userId: String!
    }
    input UsersFindOneInput {
        userId: String!
    }
    type UsersListAllResponse {
        users: [UserResponse!]!
    }
    type Mutation {
        userCreate(
            input: UserCreateInput!
        ): UserResponse!
        userUpdate(
            input: UserUpdateInput!
        ): UserResponse!
        userDestroy(
            input: UserDestroyInput!
        ): UserResponse!
    }
    type Query {
        usersListAll: UsersListAllResponse!
        usersFindOne(
            input: UsersFindOneInput!
        ): UserResponse!
    }
`;