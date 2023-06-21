const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalname: String,
  filename: String,
  filepath: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);
