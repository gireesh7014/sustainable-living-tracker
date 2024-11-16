const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FootprintSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true
  },
  transport: {
    type: Number,
    default: 0
  },
  energy: {
    type: Number,
    default: 0
  },
  waste: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Footprint', FootprintSchema);
