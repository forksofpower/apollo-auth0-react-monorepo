import gql from "graphql-tag";

export const USER_FIELDS = gql`
    fragment User on User {
        id
        email
        firstName
        lastName
    }
`;