const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/Zomato", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected with Data base");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
