const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PromotionsSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

const Promotions = mongoose.model('promotion', PromotionsSchema);

module.exports = Promotions;
