const mongoose = require("mongoose");
const { stringify } = require("querystring");
const schema = mongoose.Schema({
  name: String,
  content: String,
  image: String,
  meal_type: Number,
});
const mealtypes = mongoose.model("mealtypes", schema);
module.exports = mealtypes;
