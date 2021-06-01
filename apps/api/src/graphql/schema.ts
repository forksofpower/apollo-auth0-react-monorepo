import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import GraphQLDateTime from 'graphql-type-datetime';
import resolvers from "./resolvers";
import { typeDefs } from "./type-definitions"; 

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers
});

export default schema;