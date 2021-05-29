import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
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
  userCreate: UserResponse;
  userUpdate: UserResponse;
  userDestroy: UserResponse;
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
  usersFindOne: UserResponse;
};


export type QueryUsersFindOneArgs = {
  input: UsersFindOneInput;
};

export type UserCreateInput = {
  user: UserInput;
};

export type UserDestroyInput = {
  userId: Scalars['Int'];
};

export type UserInput = {
  id?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  id: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserUpdateInput = {
  user: UserInput;
};

export type UserUpdateResponse = UserResponse;

export type UsersFindOneInput = {
  userId: Scalars['Int'];
};

export type UsersListAllResponse = {
  __typename?: 'UsersListAllResponse';
  users: Array<UserResponse>;
};



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
export type ResolversTypes = {
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  UserCreateInput: UserCreateInput;
  UserDestroyInput: UserDestroyInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UserInput: UserInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  UserUpdateInput: UserUpdateInput;
  UserUpdateResponse: ResolversTypes['UserResponse'];
  UsersFindOneInput: UsersFindOneInput;
  UsersListAllResponse: ResolverTypeWrapper<UsersListAllResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Query: {};
  UserCreateInput: UserCreateInput;
  UserDestroyInput: UserDestroyInput;
  Int: Scalars['Int'];
  UserInput: UserInput;
  String: Scalars['String'];
  UserResponse: UserResponse;
  UserUpdateInput: UserUpdateInput;
  UserUpdateResponse: ResolversParentTypes['UserResponse'];
  UsersFindOneInput: UsersFindOneInput;
  UsersListAllResponse: UsersListAllResponse;
  Boolean: Scalars['Boolean'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  userCreate?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<MutationUserCreateArgs, 'input'>>;
  userUpdate?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<MutationUserUpdateArgs, 'input'>>;
  userDestroy?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<MutationUserDestroyArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  usersListAll?: Resolver<ResolversTypes['UsersListAllResponse'], ParentType, ContextType>;
  usersFindOne?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<QueryUsersFindOneArgs, 'input'>>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserUpdateResponse'] = ResolversParentTypes['UserUpdateResponse']> = {
  __resolveType: TypeResolveFn<'UserResponse', ParentType, ContextType>;
};

export type UsersListAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersListAllResponse'] = ResolversParentTypes['UsersListAllResponse']> = {
  users?: Resolver<Array<ResolversTypes['UserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  UserUpdateResponse?: UserUpdateResponseResolvers<ContextType>;
  UsersListAllResponse?: UsersListAllResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
