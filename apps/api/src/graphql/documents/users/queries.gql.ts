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