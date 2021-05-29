import { IResolvers } from "graphql-tools";
import { User, Users } from "../core";

const resolvers: IResolvers = {
    Query: {
        usersListAll: async () => {
            const users = await Users.listAll();

            return { users };
        },
        usersFindOne: async (
            _parent: unknown,
            { input: { userId }}
            ) => {
            const user = await Users.findById(userId);

            return user;
        }
    },
    Mutation: {
        userCreate: async (
            _parent: unknown,
            { input: { user }}
        ) => {
            return await Users.create(user);
        },
        userUpdate: async (
            _parent: unknown,
            { input: { user }}
        ) => {
            const id = user.id;
            delete user.id; // strip out fields that shouldn't be updated?
            return await Users.update(id, user);
        },
        userDestroy: async (
            _parent: unknown,
            { input: { userId }}
        ) => {
            return await Users.destroy(userId);
        }
    }
}

export default resolvers;