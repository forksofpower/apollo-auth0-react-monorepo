import { gql } from "graphql-tag";
import { POST_FIELDS } from "./fragments.gql";

export const POST_CREATE = gql`
    mutation PostCreate($input: PostCreateInput!) {
        postCreate(input: $input) {
            post {
                ...Post
            }
        }
    }
    ${POST_FIELDS}
`;

export const POST_UPDATE = gql`
    mutation PostUpdate($input: PostUpdateInput!) {
        postUpdate(input: $input) {
            post {
                ...Post
            }
        }
    }
    ${POST_FIELDS}
`;

export const POST_DESTROY = gql`
    mutation PostDestroy($input: PostDestroyInput!) {
        postDestroy(input: $input) {
            post {
                ...Post
            }
        }
    }
    ${POST_FIELDS}
`;