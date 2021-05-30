import { gql } from "graphql-tag";
import { USER_FIELDS } from "./fragments.gql";

export const USER_CREATE = gql`
    mutation UserCreate($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                ...User
            }
        }
    }
    ${USER_FIELDS}
`;

export const USER_UPDATE = gql`
    mutation UserUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            user {
                ...User
            }
        }
    }
    ${USER_FIELDS}
`;

export const USER_DESTROY = gql`
    mutation UserDestroy($input: UserDestroyInput!) {
        userDestroy(input: $input) {
            user {
                ...User
            }
        }
    }
    ${USER_FIELDS}
`;