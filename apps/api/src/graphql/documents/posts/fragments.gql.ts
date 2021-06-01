import gql from "graphql-tag";

export const POST_FIELDS = gql`
    fragment Post on Post {
        id
        content
        createdAt
        account {
            email
        }
    }
`;