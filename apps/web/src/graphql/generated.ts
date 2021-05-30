import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  userCreate: UserCreateResponse;
  userUpdate: UserUpdateResponse;
  userDestroy: UserDestroyResponse;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type MutationUserDestroyArgs = {
  input: UserDestroyInput;
};

export type Query = {
  __typename?: "Query";
  usersListAll: UsersListAllResponse;
  usersFindOne: UsersFindOneResponse;
};

export type QueryUsersFindOneArgs = {
  input: UsersFindOneInput;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type UserCreateInput = {
  user: UserInput;
};

export type UserCreateResponse = {
  __typename?: "UserCreateResponse";
  user?: Maybe<User>;
};

export type UserDestroyInput = {
  userId: Scalars["Int"];
};

export type UserDestroyResponse = {
  __typename?: "UserDestroyResponse";
  user?: Maybe<User>;
};

export type UserInput = {
  id?: Maybe<Scalars["Int"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type UserUpdateInput = {
  user: UserInput;
};

export type UserUpdateResponse = {
  __typename?: "UserUpdateResponse";
  user?: Maybe<User>;
};

export type UsersFindOneInput = {
  userId: Scalars["Int"];
};

export type UsersFindOneResponse = {
  __typename?: "UsersFindOneResponse";
  user?: Maybe<User>;
};

export type UsersListAllResponse = {
  __typename?: "UsersListAllResponse";
  users: Array<User>;
};

export type UserFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "email" | "firstName" | "lastName"
>;

export type UsersListAllQueryVariables = Exact<{ [key: string]: never }>;

export type UsersListAllQuery = { __typename?: "Query" } & {
  usersListAll: { __typename?: "UsersListAllResponse" } & {
    users: Array<{ __typename?: "User" } & UserFragment>;
  };
};

export const UserFragmentDoc = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
  }
`;
export const UsersListAllDocument = gql`
  query UsersListAll {
    usersListAll {
      users {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useUsersListAllQuery__
 *
 * To run a query within a React component, call `useUsersListAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersListAllQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsersListAllQuery,
    UsersListAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersListAllQuery, UsersListAllQueryVariables>(
    UsersListAllDocument,
    options
  );
}
export function useUsersListAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersListAllQuery,
    UsersListAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersListAllQuery, UsersListAllQueryVariables>(
    UsersListAllDocument,
    options
  );
}
export type UsersListAllQueryHookResult = ReturnType<
  typeof useUsersListAllQuery
>;
export type UsersListAllLazyQueryHookResult = ReturnType<
  typeof useUsersListAllLazyQuery
>;
export type UsersListAllQueryResult = Apollo.QueryResult<
  UsersListAllQuery,
  UsersListAllQueryVariables
>;
export function refetchUsersListAllQuery(
  variables?: UsersListAllQueryVariables
) {
  return { query: UsersListAllDocument, variables: variables };
}
