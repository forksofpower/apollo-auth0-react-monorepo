import userTypeDefs from "./type-definitions/user.gql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import { GraphQLSchema } from "graphql";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [userTypeDefs],
    resolvers
});

export default schema;