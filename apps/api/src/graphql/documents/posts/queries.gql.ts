import { gql } from "graphql-tag";
import { POST_FIELDS } from "./fragments.gql";

export const POSTS_LIST_ALL = gql`
    query PostsListAll {
        postsListAll {
            posts {
                ...Post
            }
        }
    }
    ${POST_FIELDS}
`;

export const POSTS_FIND_ONE = gql`
    query PostsFindOne($input: PostsFindOneInput!) {
        postsFindOne(input: $input) {
            post {
                ...Post
            }
        }
    }
    ${POST_FIELDS}
`;