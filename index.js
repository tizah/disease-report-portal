const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./mongo.config.js");

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

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb connected Successfully");
    return server.listen({ port: 5002 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
