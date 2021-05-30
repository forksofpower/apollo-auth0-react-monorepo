import { gql } from "graphql-tag";
import { USER_FIELDS } from "./fragments.gql";

export const USERS_LIST_ALL = gql`
    query UsersListAll {
        usersListAll {
            users {
                ...User
            }
        }
    }
    ${USER_FIELDS}
`;

export const USERS_FIND_ONE = gql`
    query UsersFindOne($input: UsersFindOneInput!) {
        usersFindOne(input: $input) {
            user {
                ...User
            }
        }
    }
    ${USER_FIELDS}
`;