const reportsResolvers = require("./reports");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...reportsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
