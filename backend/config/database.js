const mongoose= require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log("Database connection error");
      console.log(err);
    });
};