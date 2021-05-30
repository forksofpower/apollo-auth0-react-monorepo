import { GraphQLResolveInfo } from 'graphql';
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
};

export type Mutation = {
  __typename?: 'Mutation';
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
  __typename?: 'Query';
  usersListAll: UsersListAllResponse;
  usersFindOne: UsersFindOneResponse;
};


export type QueryUsersFindOneArgs = {
  input: UsersFindOneInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserCreateInput = {
  user: UserInput;
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  user?: Maybe<User>;
};

export type UserDestroyInput = {
  userId: Scalars['Int'];
};

export type UserDestroyResponse = {
  __typename?: 'UserDestroyResponse';
  user?: Maybe<User>;
};

export type UserInput = {
  id?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserUpdateInput = {
  user: UserInput;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  user?: Maybe<User>;
};

export type UsersFindOneInput = {
  userId: Scalars['Int'];
};

export type UsersFindOneResponse = {
  __typename?: 'UsersFindOneResponse';
  user?: Maybe<User>;
};

export type UsersListAllResponse = {
  __typename?: 'UsersListAllResponse';
  users: Array<User>;
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
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserCreateInput: UserCreateInput;
  UserCreateResponse: ResolverTypeWrapper<UserCreateResponse>;
  UserDestroyInput: UserDestroyInput;
  UserDestroyResponse: ResolverTypeWrapper<UserDestroyResponse>;
  UserInput: UserInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateResponse: ResolverTypeWrapper<UserUpdateResponse>;
  UsersFindOneInput: UsersFindOneInput;
  UsersFindOneResponse: ResolverTypeWrapper<UsersFindOneResponse>;
  UsersListAllResponse: ResolverTypeWrapper<UsersListAllResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  Query: {};
  User: User;
  Int: Scalars['Int'];
  String: Scalars['String'];
  UserCreateInput: UserCreateInput;
  UserCreateResponse: UserCreateResponse;
  UserDestroyInput: UserDestroyInput;
  UserDestroyResponse: UserDestroyResponse;
  UserInput: UserInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateResponse: UserUpdateResponse;
  UsersFindOneInput: UsersFindOneInput;
  UsersFindOneResponse: UsersFindOneResponse;
  UsersListAllResponse: UsersListAllResponse;
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  userCreate?: Resolver<ResolversTypes['UserCreateResponse'], ParentType, ContextType, RequireFields<MutationUserCreateArgs, 'input'>>;
  userUpdate?: Resolver<ResolversTypes['UserUpdateResponse'], ParentType, ContextType, RequireFields<MutationUserUpdateArgs, 'input'>>;
  userDestroy?: Resolver<ResolversTypes['UserDestroyResponse'], ParentType, ContextType, RequireFields<MutationUserDestroyArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  usersListAll?: Resolver<ResolversTypes['UsersListAllResponse'], ParentType, ContextType>;
  usersFindOne?: Resolver<ResolversTypes['UsersFindOneResponse'], ParentType, ContextType, RequireFields<QueryUsersFindOneArgs, 'input'>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCreateResponse'] = ResolversParentTypes['UserCreateResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserDestroyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDestroyResponse'] = ResolversParentTypes['UserDestroyResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserUpdateResponse'] = ResolversParentTypes['UserUpdateResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersFindOneResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFindOneResponse'] = ResolversParentTypes['UsersFindOneResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersListAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersListAllResponse'] = ResolversParentTypes['UsersListAllResponse']> = ResolversObject<{
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCreateResponse?: UserCreateResponseResolvers<ContextType>;
  UserDestroyResponse?: UserDestroyResponseResolvers<ContextType>;
  UserUpdateResponse?: UserUpdateResponseResolvers<ContextType>;
  UsersFindOneResponse?: UsersFindOneResponseResolvers<ContextType>;
  UsersListAllResponse?: UsersListAllResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
