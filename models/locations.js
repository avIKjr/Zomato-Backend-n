const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: String,
  city_id: Number,
  location_id: Number,
  city: String,
  country_name: String,
});
var locations = mongoose.model("locations", schema);
module.exports = locations;
