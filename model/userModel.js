const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  u_email: {
    type: String, 
    required: true, 
  },
  u_name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  skill: {
    type: [],
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  interest: {
    type: [],
    required: true,
  },
});

module.exports = new mongoose.model("userModel", userModel);
