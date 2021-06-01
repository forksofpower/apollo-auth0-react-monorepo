import { AuthenticationError } from "apollo-server-express";
import { Users, Account } from "../../core";
import { AuthenticatedContext } from "../../types/resolver-context";
import { 
    MutationUserCreateArgs,
    MutationUserDestroyArgs,
    MutationUserUpdateArgs,
    QueryUsersFindOneArgs,
    UserCreateResponse,
    UserDestroyResponse,
    UsersFindOneResponse,
    UsersListAllResponse,
    UserUpdateResponse,
} from "../generated";

export const userCreate = async (
    _parent: unknown,
    { input: { user }}: MutationUserCreateArgs,
    context: AuthenticatedContext
): Promise<UserCreateResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const result = await Users.create(user);
    return { user: result }
};

export const userUpdate = async (
    _parent: unknown,
    { input: { user }}: MutationUserUpdateArgs,
    context: AuthenticatedContext
): Promise<UserUpdateResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const id = user.id;
    delete user.id; // strip out fields that shouldn't be updated?
    const result = await Users.update(id, user);
    return { user: result }
};

export const userDestroy = async (
    _parent: unknown,
    { input: { userId }}: MutationUserDestroyArgs,
    context: AuthenticatedContext
): Promise<UserDestroyResponse> => {
    const result = await Users.destroy(userId);
    return { user: result }
};

export const usersListAll = async (
    _parent: unknown,
    _args: unknown,
    context: AuthenticatedContext
): Promise<UsersListAllResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const users = await Users.listAll();

    return { users };
};

export const usersFindOne = async (
    _parent: unknown,
    { input: { userId }}: QueryUsersFindOneArgs,
    context: AuthenticatedContext
): Promise<UsersFindOneResponse> => {
    if (!context.account) {
        throw new AuthenticationError('The request is not authenticated.');
    }
    const user = await Users.findById(userId);

    return { user };
}