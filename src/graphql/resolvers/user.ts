import { Users } from "../../core";
import { 
    MutationUserCreateArgs,
    MutationUserDestroyArgs,
    MutationUserUpdateArgs,
    QueryUsersFindOneArgs,
    UserResponse,
    UsersListAllResponse
} from "../generated";

export const userCreate = async (
    _parent: unknown,
    { input: { user }}: MutationUserCreateArgs
): Promise<UserResponse> => {
    return await Users.create(user);
};

export const userUpdate = async (
    _parent: unknown,
    { input: { user }}: MutationUserUpdateArgs
): Promise<UserResponse> => {
    const id = user.id;
    delete user.id; // strip out fields that shouldn't be updated?
    return await Users.update(id, user);
};

export const userDestroy = async (
    _parent: unknown,
    { input: { userId }}: MutationUserDestroyArgs
): Promise<UserResponse> => {
    return await Users.destroy(userId);
};

export const usersListAll = async (): Promise<UsersListAllResponse> => {
    const users = await Users.listAll();

    return { users };
};

export const usersFindOne = async (
    _parent: unknown,
    { input: { userId }}: QueryUsersFindOneArgs
): Promise<UserResponse> => {
    const user = await Users.findById(userId);

    return user;
}