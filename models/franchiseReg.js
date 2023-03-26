const mongoose = require('mongoose');

const FuserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Phone:{
    type: Number,
    required: true,
  },

  emailID: {
    type: String,
    required: true,
  },

  Pincode: {
    type: Number,
    required: true,
  },

  State: {
    type: String,
    required: true,
  },

  City: {
    type: String,
    required: true,
  },

  Plan: {
    type: String,
    required: true,
  },

  FranchiseCode: {
    type: String,
    required: true,
    }


});

module.exports = mongoose.model('FranchiseReg', FuserSchema);