const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurant_name: String,
  menu_items: [
    {
      name: String,
      price: Number,
      qty: Number,
      image_url: String,
    },
  ],
});

module.exports = mongoose.model("menuitems", menuSchema);
