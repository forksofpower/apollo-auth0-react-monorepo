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

/** The account */
export type Account = {
  /** The account email */
  email: Scalars["String"];
};

/** The accountFindOrCreate input */
export type AccountFindOrCreateInput = {
  /** The account email address */
  email: Scalars["String"];
  /** The account identity provider subject (must be unique) */
  auth0UserId: Scalars["String"];
};

/** The accountFindOrCreate response */
export type AccountFindOrCreateResponse = {
  /** The new account */
  account?: Maybe<Account>;
};

export type Mutation = {
  /** Find or create an account */
  accountFindOrCreate: AccountFindOrCreateResponse;
  userCreate: UserCreateResponse;
  userDestroy: UserDestroyResponse;
  userUpdate: UserUpdateResponse;
};

export type MutationAccountFindOrCreateArgs = {
  input: AccountFindOrCreateInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserDestroyArgs = {
  input: UserDestroyInput;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type Query = {
  usersListAll: UsersListAllResponse;
  usersFindOne: UsersFindOneResponse;
};

export type QueryUsersFindOneArgs = {
  input: UsersFindOneInput;
};

export type User = {
  id: Scalars["Int"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type UserCreateInput = {
  user: UserInput;
};

export type UserCreateResponse = {
  user?: Maybe<User>;
};

export type UserDestroyInput = {
  userId: Scalars["Int"];
};

export type UserDestroyResponse = {
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
  user?: Maybe<User>;
};

export type UsersFindOneInput = {
  userId: Scalars["Int"];
};

export type UsersFindOneResponse = {
  user?: Maybe<User>;
};

export type UsersListAllResponse = {
  users: Array<User>;
};

export type UserFragment = Pick<
  User,
  "id" | "email" | "firstName" | "lastName"
>;

export type UserCreateMutationVariables = Exact<{
  input: UserCreateInput;
}>;

export type UserCreateMutation = { userCreate: { user?: Maybe<UserFragment> } };

export type UserUpdateMutationVariables = Exact<{
  input: UserUpdateInput;
}>;

export type UserUpdateMutation = { userUpdate: { user?: Maybe<UserFragment> } };

export type UserDestroyMutationVariables = Exact<{
  input: UserDestroyInput;
}>;

export type UserDestroyMutation = {
  userDestroy: { user?: Maybe<UserFragment> };
};

export type UsersListAllQueryVariables = Exact<{ [key: string]: never }>;

export type UsersListAllQuery = {
  usersListAll: { users: Array<UserFragment> };
};

export type UsersFindOneQueryVariables = Exact<{
  input: UsersFindOneInput;
}>;

export type UsersFindOneQuery = {
  usersFindOne: { user?: Maybe<UserFragment> };
};

export const UserFragmentDoc = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
  }
`;
export const UserCreateDocument = gql`
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`;
export type UserCreateMutationFn = Apollo.MutationFunction<
  UserCreateMutation,
  UserCreateMutationVariables
>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserCreateMutation,
    UserCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(
    UserCreateDocument,
    options
  );
}
export type UserCreateMutationHookResult = ReturnType<
  typeof useUserCreateMutation
>;
export type UserCreateMutationResult =
  Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<
  UserCreateMutation,
  UserCreateMutationVariables
>;
export const UserUpdateDocument = gql`
  mutation UserUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      user {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`;
export type UserUpdateMutationFn = Apollo.MutationFunction<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserUpdateMutation,
    UserUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(
    UserUpdateDocument,
    options
  );
}
export type UserUpdateMutationHookResult = ReturnType<
  typeof useUserUpdateMutation
>;
export type UserUpdateMutationResult =
  Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;
export const UserDestroyDocument = gql`
  mutation UserDestroy($input: UserDestroyInput!) {
    userDestroy(input: $input) {
      user {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`;
export type UserDestroyMutationFn = Apollo.MutationFunction<
  UserDestroyMutation,
  UserDestroyMutationVariables
>;

/**
 * __useUserDestroyMutation__
 *
 * To run a mutation, you first call `useUserDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDestroyMutation, { data, loading, error }] = useUserDestroyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserDestroyMutation,
    UserDestroyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserDestroyMutation, UserDestroyMutationVariables>(
    UserDestroyDocument,
    options
  );
}
export type UserDestroyMutationHookResult = ReturnType<
  typeof useUserDestroyMutation
>;
export type UserDestroyMutationResult =
  Apollo.MutationResult<UserDestroyMutation>;
export type UserDestroyMutationOptions = Apollo.BaseMutationOptions<
  UserDestroyMutation,
  UserDestroyMutationVariables
>;
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
export const UsersFindOneDocument = gql`
  query UsersFindOne($input: UsersFindOneInput!) {
    usersFindOne(input: $input) {
      user {
        ...User
      }
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useUsersFindOneQuery__
 *
 * To run a query within a React component, call `useUsersFindOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersFindOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersFindOneQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUsersFindOneQuery(
  baseOptions: Apollo.QueryHookOptions<
    UsersFindOneQuery,
    UsersFindOneQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersFindOneQuery, UsersFindOneQueryVariables>(
    UsersFindOneDocument,
    options
  );
}
export function useUsersFindOneLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersFindOneQuery,
    UsersFindOneQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersFindOneQuery, UsersFindOneQueryVariables>(
    UsersFindOneDocument,
    options
  );
}
export type UsersFindOneQueryHookResult = ReturnType<
  typeof useUsersFindOneQuery
>;
export type UsersFindOneLazyQueryHookResult = ReturnType<
  typeof useUsersFindOneLazyQuery
>;
export type UsersFindOneQueryResult = Apollo.QueryResult<
  UsersFindOneQuery,
  UsersFindOneQueryVariables
>;
export function refetchUsersFindOneQuery(
  variables?: UsersFindOneQueryVariables
) {
  return { query: UsersFindOneDocument, variables: variables };
}
