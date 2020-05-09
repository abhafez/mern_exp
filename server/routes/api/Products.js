const express = require('express');
const router = express.Router();

const Product = require('../../models/Products');

/*
 * @route GET api/detpartment
 * @description  GET All Products
 * @access Public
 */
router.get('/', (req, res) => {
  Product.find().then((items) => res.json(items));
});

/*
 * @route POST api/detpartment
 * @description  Post a new All Products
 * @access Public
 */
router.post('/', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    department_id: req.body.department_id,
  });
  newProduct.save().then((item) => res.json(item));
});

/*
 * @route POST api/detpartment/:id
 * @description  Post a new All Products
 * @access Public
 */
router.delete('/:id', (req, res) => {
  Product.findById(req.param.id)
    .then((Product) => Product.remove().then(() => res.json({ success: true })))
    .catch((err) =>
      res.status(404).json({ success: false, message: "Item Doesn't exist" }),
    );
});

module.exports = router;
