const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8000;

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/MVCArchitecture")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Mongo Error", err));

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// set ejs view engine
app.set("view engine", "ejs");

// Routes
app.use("/", userRoutes);

app.listen(8000, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
