const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

const userRouters = require("./routes/userRoutes");

// ROUTES
app.use("api/auth", userRouters);

// CONNECT MONGODB

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
  console.log("Mongoose ready!");
});

// RUN SERVER
const server = app.listen(process.env.PORT, () => {
  console.log(`Express server running on port ${process.env.PORT}`);
});
