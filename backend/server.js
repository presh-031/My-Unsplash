const express = require("express");
const mongoose = require("mongoose");

import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
