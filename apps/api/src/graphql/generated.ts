import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  __typename?: 'Account';
  /** The account id */
  id: Scalars['Int'];
  /** The account email */
  email: Scalars['String'];
  /** The list of account chats */
  chats: Array<Maybe<Chat>>;
  /** The list of account posts */
  posts: Array<Maybe<Post>>;
};

/** The accountFindOrCreate input */
export type AccountFindOrCreateInput = {
  /** The account email address */
  email: Scalars['String'];
  /** The account identity provider subject (must be unique) */
  auth0UserId: Scalars['String'];
};

/** The accountFindOrCreate response */
export type AccountFindOrCreateResponse = {
  __typename?: 'AccountFindOrCreateResponse';
  /** The new account */
  account?: Maybe<Account>;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['Int'];
  message: Scalars['String'];
  createdAt: Scalars['DateTime'];
  account: Account;
};

export type ChatResponse = {
  __typename?: 'ChatResponse';
  message: Chat;
};

export type ChatsListAllResponse = {
  __typename?: 'ChatsListAllResponse';
  messages: Array<Chat>;
};


export type Mutation = {
  __typename?: 'Mutation';
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
  from: Scalars['String'];
  message: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  account: Account;
};

export type PostCreateInput = {
  post: PostInput;
};

export type PostCreateResponse = {
  __typename?: 'PostCreateResponse';
  post?: Maybe<Post>;
};

export type PostDestroyInput = {
  postId: Scalars['Int'];
};

export type PostDestroyResponse = {
  __typename?: 'PostDestroyResponse';
  post?: Maybe<Post>;
};

export type PostInput = {
  id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateInput = {
  post: PostInput;
};

export type PostUpdateResponse = {
  __typename?: 'PostUpdateResponse';
  post?: Maybe<Post>;
};

export type PostsFindOneInput = {
  postId: Scalars['Int'];
};

export type PostsFindOneResponse = {
  __typename?: 'PostsFindOneResponse';
  post?: Maybe<Post>;
};

export type PostsListAllResponse = {
  __typename?: 'PostsListAllResponse';
  posts: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  chatsListAll?: Maybe<ChatsListAllResponse>;
  postsFindOne: PostsFindOneResponse;
  postsListAll: PostsListAllResponse;
};


export type QueryPostsFindOneArgs = {
  input: PostsFindOneInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSent?: Maybe<ChatResponse>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AccountFindOrCreateInput: AccountFindOrCreateInput;
  AccountFindOrCreateResponse: ResolverTypeWrapper<AccountFindOrCreateResponse>;
  Chat: ResolverTypeWrapper<Chat>;
  ChatResponse: ResolverTypeWrapper<ChatResponse>;
  ChatsListAllResponse: ResolverTypeWrapper<ChatsListAllResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostCreateInput: PostCreateInput;
  PostCreateResponse: ResolverTypeWrapper<PostCreateResponse>;
  PostDestroyInput: PostDestroyInput;
  PostDestroyResponse: ResolverTypeWrapper<PostDestroyResponse>;
  PostInput: PostInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateResponse: ResolverTypeWrapper<PostUpdateResponse>;
  PostsFindOneInput: PostsFindOneInput;
  PostsFindOneResponse: ResolverTypeWrapper<PostsFindOneResponse>;
  PostsListAllResponse: ResolverTypeWrapper<PostsListAllResponse>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Int: Scalars['Int'];
  String: Scalars['String'];
  AccountFindOrCreateInput: AccountFindOrCreateInput;
  AccountFindOrCreateResponse: AccountFindOrCreateResponse;
  Chat: Chat;
  ChatResponse: ChatResponse;
  ChatsListAllResponse: ChatsListAllResponse;
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Post: Post;
  PostCreateInput: PostCreateInput;
  PostCreateResponse: PostCreateResponse;
  PostDestroyInput: PostDestroyInput;
  PostDestroyResponse: PostDestroyResponse;
  PostInput: PostInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateResponse: PostUpdateResponse;
  PostsFindOneInput: PostsFindOneInput;
  PostsFindOneResponse: PostsFindOneResponse;
  PostsListAllResponse: PostsListAllResponse;
  Query: {};
  Subscription: {};
  Boolean: Scalars['Boolean'];
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chats?: Resolver<Array<Maybe<ResolversTypes['Chat']>>, ParentType, ContextType>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountFindOrCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountFindOrCreateResponse'] = ResolversParentTypes['AccountFindOrCreateResponse']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatResponse'] = ResolversParentTypes['ChatResponse']> = ResolversObject<{
  message?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatsListAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatsListAllResponse'] = ResolversParentTypes['ChatsListAllResponse']> = ResolversObject<{
  messages?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  accountFindOrCreate?: Resolver<ResolversTypes['AccountFindOrCreateResponse'], ParentType, ContextType, RequireFields<MutationAccountFindOrCreateArgs, 'input'>>;
  postCreate?: Resolver<ResolversTypes['PostCreateResponse'], ParentType, ContextType, RequireFields<MutationPostCreateArgs, 'input'>>;
  postDestroy?: Resolver<ResolversTypes['PostDestroyResponse'], ParentType, ContextType, RequireFields<MutationPostDestroyArgs, 'input'>>;
  postUpdate?: Resolver<ResolversTypes['PostUpdateResponse'], ParentType, ContextType, RequireFields<MutationPostUpdateArgs, 'input'>>;
  sendMessage?: Resolver<Maybe<ResolversTypes['ChatResponse']>, ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'from' | 'message'>>;
}>;

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostCreateResponse'] = ResolversParentTypes['PostCreateResponse']> = ResolversObject<{
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostDestroyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostDestroyResponse'] = ResolversParentTypes['PostDestroyResponse']> = ResolversObject<{
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostUpdateResponse'] = ResolversParentTypes['PostUpdateResponse']> = ResolversObject<{
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostsFindOneResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsFindOneResponse'] = ResolversParentTypes['PostsFindOneResponse']> = ResolversObject<{
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostsListAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsListAllResponse'] = ResolversParentTypes['PostsListAllResponse']> = ResolversObject<{
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  chatsListAll?: Resolver<Maybe<ResolversTypes['ChatsListAllResponse']>, ParentType, ContextType>;
  postsFindOne?: Resolver<ResolversTypes['PostsFindOneResponse'], ParentType, ContextType, RequireFields<QueryPostsFindOneArgs, 'input'>>;
  postsListAll?: Resolver<ResolversTypes['PostsListAllResponse'], ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  messageSent?: SubscriptionResolver<Maybe<ResolversTypes['ChatResponse']>, "messageSent", ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountFindOrCreateResponse?: AccountFindOrCreateResponseResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatResponse?: ChatResponseResolvers<ContextType>;
  ChatsListAllResponse?: ChatsListAllResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostCreateResponse?: PostCreateResponseResolvers<ContextType>;
  PostDestroyResponse?: PostDestroyResponseResolvers<ContextType>;
  PostUpdateResponse?: PostUpdateResponseResolvers<ContextType>;
  PostsFindOneResponse?: PostsFindOneResponseResolvers<ContextType>;
  PostsListAllResponse?: PostsListAllResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
