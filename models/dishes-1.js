// Grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
