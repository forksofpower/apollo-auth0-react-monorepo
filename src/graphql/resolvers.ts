import { IResolvers } from "graphql-tools";

const resolvers: IResolvers = {
    Query: {
        helloWorld: () => "Hello World from Apollo Server"
    }
}

export default resolvers;