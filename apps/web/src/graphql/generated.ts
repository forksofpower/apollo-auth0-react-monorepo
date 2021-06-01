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
  DateTime: any;
};

/** The account */
export type Account = {
  /** The account id */
  id: Scalars["Int"];
  /** The account email */
  email: Scalars["String"];
  /** The list of account chats */
  chats: Array<Chat>;
  /** The list of account posts */
  posts: Array<Post>;
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

export type Chat = {
  id: Scalars["Int"];
  message: Scalars["String"];
  createdAt: Scalars["DateTime"];
  account: Account;
};

export type ChatResponse = {
  message: Chat;
};

export type ChatsListAllResponse = {
  messages: Array<Chat>;
};

export type Mutation = {
  /** Find or create an account */
  accountFindOrCreate: AccountFindOrCreateResponse;
  postCreate: PostCreateResponse;
  postDestroy: PostDestroyResponse;
  postUpdate: PostUpdateResponse;
  sendMessage?: Maybe<ChatResponse>;
};

export type MutationAccountFindOrCreateArgs = {
  input: AccountFindOrCreateInput;
};

export type MutationPostCreateArgs = {
  input: PostCreateInput;
};

export type MutationPostDestroyArgs = {
  input: PostDestroyInput;
};

export type MutationPostUpdateArgs = {
  input: PostUpdateInput;
};

export type MutationSendMessageArgs = {
  from: Scalars["String"];
  message: Scalars["String"];
};

export type Post = {
  id: Scalars["Int"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  account: Account;
};

export type PostCreateInput = {
  post: PostInput;
};

export type PostCreateResponse = {
  post?: Maybe<Post>;
};

export type PostDestroyInput = {
  postId: Scalars["Int"];
};

export type PostDestroyResponse = {
  post?: Maybe<Post>;
};

export type PostInput = {
  id?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
};

export type PostUpdateInput = {
  post: PostInput;
};

export type PostUpdateResponse = {
  post?: Maybe<Post>;
};

export type PostsFindOneInput = {
  postId: Scalars["Int"];
};

export type PostsFindOneResponse = {
  post?: Maybe<Post>;
};

export type PostsListAllResponse = {
  posts: Array<Post>;
};

export type Query = {
  chatsListAll?: Maybe<ChatsListAllResponse>;
  postsFindOne: PostsFindOneResponse;
  postsListAll: PostsListAllResponse;
};

export type QueryPostsFindOneArgs = {
  input: PostsFindOneInput;
};

export type Subscription = {
  messageSent?: Maybe<ChatResponse>;
};

export type PostFragment = Pick<Post, "id" | "content" | "createdAt"> & {
  account: Pick<Account, "email">;
};

export type PostCreateMutationVariables = Exact<{
  input: PostCreateInput;
}>;

export type PostCreateMutation = { postCreate: { post?: Maybe<PostFragment> } };

export type PostUpdateMutationVariables = Exact<{
  input: PostUpdateInput;
}>;

export type PostUpdateMutation = { postUpdate: { post?: Maybe<PostFragment> } };

export type PostDestroyMutationVariables = Exact<{
  input: PostDestroyInput;
}>;

export type PostDestroyMutation = {
  postDestroy: { post?: Maybe<PostFragment> };
};

export type PostsListAllQueryVariables = Exact<{ [key: string]: never }>;

export type PostsListAllQuery = {
  postsListAll: { posts: Array<PostFragment> };
};

export type PostsFindOneQueryVariables = Exact<{
  input: PostsFindOneInput;
}>;

export type PostsFindOneQuery = {
  postsFindOne: { post?: Maybe<PostFragment> };
};

export const PostFragmentDoc = gql`
  fragment Post on Post {
    id
    content
    createdAt
    account {
      email
    }
  }
`;
export const PostCreateDocument = gql`
  mutation PostCreate($input: PostCreateInput!) {
    postCreate(input: $input) {
      post {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`;
export type PostCreateMutationFn = Apollo.MutationFunction<
  PostCreateMutation,
  PostCreateMutationVariables
>;

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostCreateMutation,
    PostCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostCreateMutation, PostCreateMutationVariables>(
    PostCreateDocument,
    options
  );
}
export type PostCreateMutationHookResult = ReturnType<
  typeof usePostCreateMutation
>;
export type PostCreateMutationResult =
  Apollo.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = Apollo.BaseMutationOptions<
  PostCreateMutation,
  PostCreateMutationVariables
>;
export const PostUpdateDocument = gql`
  mutation PostUpdate($input: PostUpdateInput!) {
    postUpdate(input: $input) {
      post {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`;
export type PostUpdateMutationFn = Apollo.MutationFunction<
  PostUpdateMutation,
  PostUpdateMutationVariables
>;

/**
 * __usePostUpdateMutation__
 *
 * To run a mutation, you first call `usePostUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUpdateMutation, { data, loading, error }] = usePostUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostUpdateMutation,
    PostUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostUpdateMutation, PostUpdateMutationVariables>(
    PostUpdateDocument,
    options
  );
}
export type PostUpdateMutationHookResult = ReturnType<
  typeof usePostUpdateMutation
>;
export type PostUpdateMutationResult =
  Apollo.MutationResult<PostUpdateMutation>;
export type PostUpdateMutationOptions = Apollo.BaseMutationOptions<
  PostUpdateMutation,
  PostUpdateMutationVariables
>;
export const PostDestroyDocument = gql`
  mutation PostDestroy($input: PostDestroyInput!) {
    postDestroy(input: $input) {
      post {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`;
export type PostDestroyMutationFn = Apollo.MutationFunction<
  PostDestroyMutation,
  PostDestroyMutationVariables
>;

/**
 * __usePostDestroyMutation__
 *
 * To run a mutation, you first call `usePostDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDestroyMutation, { data, loading, error }] = usePostDestroyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostDestroyMutation,
    PostDestroyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostDestroyMutation, PostDestroyMutationVariables>(
    PostDestroyDocument,
    options
  );
}
export type PostDestroyMutationHookResult = ReturnType<
  typeof usePostDestroyMutation
>;
export type PostDestroyMutationResult =
  Apollo.MutationResult<PostDestroyMutation>;
export type PostDestroyMutationOptions = Apollo.BaseMutationOptions<
  PostDestroyMutation,
  PostDestroyMutationVariables
>;
export const PostsListAllDocument = gql`
  query PostsListAll {
    postsListAll {
      posts {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`;

/**
 * __usePostsListAllQuery__
 *
 * To run a query within a React component, call `usePostsListAllQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsListAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsListAllQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsListAllQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PostsListAllQuery,
    PostsListAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsListAllQuery, PostsListAllQueryVariables>(
    PostsListAllDocument,
    options
  );
}
export function usePostsListAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostsListAllQuery,
    PostsListAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsListAllQuery, PostsListAllQueryVariables>(
    PostsListAllDocument,
    options
  );
}
export type PostsListAllQueryHookResult = ReturnType<
  typeof usePostsListAllQuery
>;
export type PostsListAllLazyQueryHookResult = ReturnType<
  typeof usePostsListAllLazyQuery
>;
export type PostsListAllQueryResult = Apollo.QueryResult<
  PostsListAllQuery,
  PostsListAllQueryVariables
>;
export function refetchPostsListAllQuery(
  variables?: PostsListAllQueryVariables
) {
  return { query: PostsListAllDocument, variables: variables };
}
export const PostsFindOneDocument = gql`
  query PostsFindOne($input: PostsFindOneInput!) {
    postsFindOne(input: $input) {
      post {
        ...Post
      }
    }
  }
  ${PostFragmentDoc}
`;

/**
 * __usePostsFindOneQuery__
 *
 * To run a query within a React component, call `usePostsFindOneQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsFindOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsFindOneQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostsFindOneQuery(
  baseOptions: Apollo.QueryHookOptions<
    PostsFindOneQuery,
    PostsFindOneQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsFindOneQuery, PostsFindOneQueryVariables>(
    PostsFindOneDocument,
    options
  );
}
export function usePostsFindOneLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostsFindOneQuery,
    PostsFindOneQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsFindOneQuery, PostsFindOneQueryVariables>(
    PostsFindOneDocument,
    options
  );
}
export type PostsFindOneQueryHookResult = ReturnType<
  typeof usePostsFindOneQuery
>;
export type PostsFindOneLazyQueryHookResult = ReturnType<
  typeof usePostsFindOneLazyQuery
>;
export type PostsFindOneQueryResult = Apollo.QueryResult<
  PostsFindOneQuery,
  PostsFindOneQueryVariables
>;
export function refetchPostsFindOneQuery(
  variables?: PostsFindOneQueryVariables
) {
  return { query: PostsFindOneDocument, variables: variables };
}
