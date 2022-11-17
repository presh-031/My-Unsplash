const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Photo", photoSchema);
