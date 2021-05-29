import { Users } from "../../core";

export const userCreate = async (
    _parent: unknown,
    { input: { user }}
) => {
    return await Users.create(user);
};

export const userUpdate = async (
    _parent: unknown,
    { input: { user }}
) => {
    const id = user.id;
    delete user.id; // strip out fields that shouldn't be updated?
    return await Users.update(id, user);
};

export const userDestroy = async (
    _parent: unknown,
    { input: { userId }}
) => {
    return await Users.destroy(userId);
};

export const usersListAll = async () => {
    const users = await Users.listAll();

    return { users };
};

export const usersFindOne = async (
    _parent: unknown,
    { input: { userId }}
    ) => {
    const user = await Users.findById(userId);

    return user;
}