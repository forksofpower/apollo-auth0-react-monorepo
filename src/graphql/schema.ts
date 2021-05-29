import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";

import resolvers from "./resolvers";
import userTypeDefs from "./type-definitions/user.gql";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [userTypeDefs],
    resolvers
});

export default schema;