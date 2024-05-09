// create Movies folader
// npm init ==> package.json
// npm install express mongoose

// import express , lunch the server

import express from "express";
import mongoose from "mongoose";
const app = express();
const MONGODB_URL = "mongodb://127.0.0.1:27017/moviesDatabase";
// database connection
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB:", MONGODB_URL);
});

app.listen(8000, () => console.log(`server started on port ${8000}`));
