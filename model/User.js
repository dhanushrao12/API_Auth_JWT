const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    min: 6,
    max: 25,
  },
  email: {
    required: true,
    type: String,
    min: 8,
    max: 30,
  },
  password: {
    required: true,
    type: String,
    min: 8,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
