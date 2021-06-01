import gql from "graphql-tag";

export const posts = gql`
    scalar DateTime

    type Post {
        id: Int!
        content: String!
        createdAt: DateTime!
        account: Account!
    }
    input PostInput {
        id: Int
        content: String
    }

    input PostCreateInput {
        post: PostInput!
    }
    type PostCreateResponse {
        post: Post
    }
    input PostUpdateInput {
        post: PostInput!
    }
    type PostUpdateResponse {
        post: Post
    }
    input PostDestroyInput {
        postId: Int!
    }
    type PostDestroyResponse {
        post: Post
    }
    input PostsFindOneInput {
        postId: Int!
    }
    type PostsListAllResponse {
        posts: [Post!]!
    }
    type PostsFindOneResponse {
        post: Post
    }
    type Mutation {
        postCreate(
            input: PostCreateInput!
        ): PostCreateResponse!
        postUpdate(
            input: PostUpdateInput!
        ): PostUpdateResponse!
        postDestroy(
            input: PostDestroyInput!
        ): PostDestroyResponse!
    }
    type Query {
        postsListAll: PostsListAllResponse!
        postsFindOne(
            input: PostsFindOneInput!
        ): PostsFindOneResponse!
    }
`;