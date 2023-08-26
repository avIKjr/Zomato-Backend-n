const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: String,
  city: String,
  location_id: Number,
  city_id: Number,
  locality: String,
  thumb: [
    {
      type: String,
    },
  ],
  aggregate_rating: Number,
  rating_text: String,
  min_price: Number,
  contact_number: Number,
  cuisine: [
    {
      id: Number,
      name: String,
    },
    {
      id: Number,
      name: String,
    },
  ],

  image: String,
  mealtype_id: Number,
});
const restaurants = mongoose.model("resturants", schema);
module.exports = restaurants;
