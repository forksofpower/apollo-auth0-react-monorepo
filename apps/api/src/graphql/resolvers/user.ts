import { AuthenticationError } from "apollo-server-express";
import { Users, Account } from "../../core";
import { 
    MutationUserCreateArgs,
    MutationUserDestroyArgs,
    MutationUserUpdateArgs,
    QueryUsersFindOneArgs,
    UserResponse,
    UsersListAllResponse
} from "../generated";

export type AuthenticatedContext = {
    account?: Account;
    createAccountRuleJWT?: string;
};

export const userCreate = async (
    _parent: unknown,
    { input: { user }}: MutationUserCreateArgs,
    context: AuthenticatedContext
): Promise<UserResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    return await Users.create(user);
};

export const userUpdate = async (
    _parent: unknown,
    { input: { user }}: MutationUserUpdateArgs,
    context: AuthenticatedContext
): Promise<UserResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const id = user.id;
    delete user.id; // strip out fields that shouldn't be updated?
    return await Users.update(id, user);
};

export const userDestroy = async (
    _parent: unknown,
    { input: { userId }}: MutationUserDestroyArgs,
    context: AuthenticatedContext
): Promise<UserResponse> => {
    return await Users.destroy(userId);
};

export const usersListAll = async (
    _parent: unknown,
    _args: unknown,
    _context: AuthenticatedContext
): Promise<UsersListAllResponse> => {
    // if (!context.account) {
    //     throw new AuthenticationError('The request is not authenticated.');
    // }
    const users = await Users.listAll();

    return { users };
};

export const usersFindOne = async (
    _parent: unknown,
    { input: { userId }}: QueryUsersFindOneArgs,
    context: AuthenticatedContext
): Promise<UserResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const user = await Users.findById(userId);

    return user;
}