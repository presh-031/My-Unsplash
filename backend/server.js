const express = require("express");
const mongoose = require("mongoose");

import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
}); //custom logger

const port = process.env.PORT || 4000;

// connect to db
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    })
  )
  .catch((err) => console.log(err.message));

// routes
