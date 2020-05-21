const { model, Schema } = require("mongoose");

const reportSchema = new Schema({
  title: String,
  username: String,
  body: String,
  createdAt: String,
  state: String,
  lga: String,
  cases: String,
  comments: [
    {
      body: String,
      createdAt: String,
      username: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Report", reportSchema);
