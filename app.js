require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./router/router");
const host = "localhost";
const PORT = process.env.PORT || 3001;
const URI ="mongodb+srv://K9YeNLUwSeThYyv1:K9YeNLUwSeThYyv1@cluster0.lchubc6.mongodb.net/Zomato?retryWrites=true&w=majority";
const db = process.env.URI || URI
//const connectDB = require("./controller/database");
var cors = require("cors");
/* app.set('view engine', 'ejs')
app.set('views', './views') */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-type",
    "Authorization"
  );
  next();
});

app.use("", routes);
app.use(express.json());

// connectDB();

// app.listen(process.env.port || 8080, () => {
//   console.log("Server listening on port 8080");
// });
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, host, () => {
      console.log(`Server running at ${host}:${port}`);
      
    });
  })
  .catch((err) => {
    console.log(err);
  });
