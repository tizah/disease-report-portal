const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hi David, i am from Graphql Server",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 5002 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
