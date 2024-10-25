const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/news-app";

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Connected to the database ${name} in host ${host}`);
  } catch (error) {
    console.log(
      "Oops! Something went wrong when try to connect with the db",
      error
    );
  }
};

module.exports = {
  DB_URL,
  connect,
};
