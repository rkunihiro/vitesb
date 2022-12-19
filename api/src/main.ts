import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message() {
            return "Hello,World";
        },
    },
};

export async function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const { url } = await startStandaloneServer(server, {});
    console.log(`Server started ${url}`);
}

if (require.main === module) {
    main();
}
