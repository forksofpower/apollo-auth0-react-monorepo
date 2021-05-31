import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";

import resolvers from "./resolvers";
import { typeDefs } from "./type-definitions";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers
});

export default schema;