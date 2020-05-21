const Report = require("../../models/Report");

module.exports = {
  Query: {
    async getReports() {
      try {
        const reports = Report.find();
        return reports;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
