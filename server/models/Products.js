const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Boolean,
    required: true,
  },
  department_id: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;
