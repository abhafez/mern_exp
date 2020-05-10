const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsPromotionsSchema = new Schema({
  product_id: {
    type: String,
    unique: true,
    required: true,
  },
  promotion_id: {
    type: String,
    required: true,
  },
});

const ProductsPromotions = mongoose.model('productsPromotions', ProductsPromotionsSchema);

module.exports = ProductsPromotions;
