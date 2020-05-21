const { gql } = require("apollo-server");

module.exports = gql`
  type Report {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    state: String!
    lga: String!
    title: String!
    cases: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getReports: [Report]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`;
