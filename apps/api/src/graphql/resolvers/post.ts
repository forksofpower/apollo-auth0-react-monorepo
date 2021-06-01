import { AuthenticationError } from "apollo-server-express";
import { format } from "path/posix";
import { Post, Posts } from "../../core";
import { AuthenticatedContext } from "../../types/resolver-context";
import {
    Account as GraphAccount,
    MutationPostCreateArgs,
    MutationPostDestroyArgs,
    MutationPostUpdateArgs,
    QueryPostsFindOneArgs,
    PostCreateResponse,
    PostDestroyResponse,
    PostsFindOneResponse,
    PostsListAllResponse,
    PostUpdateResponse,
    Post as GraphPost,
} from "../generated";

const formatGraphPost = (post: Post): GraphPost => {
    return {
        id: post.id,
        content: post.content,
        account: post.account as unknown as GraphAccount,
        createdAt: post.createdAt
    }
}

const formatGraphPostList = (posts: Post[]): GraphPost[] => {
    return posts.map(post => formatGraphPost(post));
}

export const postCreate = async (
    _parent: unknown,
    { input: { post: { content } }}: MutationPostCreateArgs,
    { account }: AuthenticatedContext
): Promise<PostCreateResponse> => {
    if (!account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const result = await Posts.create({ content, accountId: account.id });
    return { post: formatGraphPost(result) }
};

export const postUpdate = async (
    _parent: unknown,
    { input: { post }}: MutationPostUpdateArgs,
    context: AuthenticatedContext
): Promise<PostUpdateResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const id = post.id;
    delete post.id; // strip out fields that shouldn't be updated?
    const result = await Posts.update(id, post) as Post;
    return { post: formatGraphPost(result) }
};

export const postDestroy = async (
    _parent: unknown,
    { input: { postId }}: MutationPostDestroyArgs,
    context: AuthenticatedContext
): Promise<PostDestroyResponse> => {
    const result = await Posts.destroy(postId);
    return { post: formatGraphPost(result) }
};

export const postsListAll = async (
    _parent: unknown,
    _args: unknown,
    context: AuthenticatedContext
): Promise<PostsListAllResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const posts = await Posts.listAll();

    return { posts: formatGraphPostList(posts) };
};

export const postsFindOne = async (
    _parent: unknown,
    { input: { postId }}: QueryPostsFindOneArgs,
    context: AuthenticatedContext
): Promise<PostsFindOneResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const post = await Posts.findById(postId);

    return { post: formatGraphPost(post) };
}