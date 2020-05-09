const express = require('express');
const router = express.Router();

const ProductsPromotion = require('../../models/ProductsPromotions');

/*
 * @route GET api/detpartment
 * @description  GET All ProductsPromotions
 * @access Public
 */
router.get('/', (req, res) => {
  ProductsPromotion.find().then((items) => res.json(items));
});

/*
 * @route POST api/detpartment
 * @description  Post a new All ProductsPromotions
 * @access Public
 */
router.post('/', (req, res) => {
  const newProductsPromotion = new ProductsPromotion({
    promotion_id: req.body.promotion_id,
    product_id: req.body.product_id,
  });
  newProductsPromotion.save().then((item) => res.json(item));
});

/*
 * @route POST api/detpartment/:id
 * @description  Post a new All ProductsPromotions
 * @access Public
 */
router.delete('/:id', (req, res) => {
  ProductsPromotion.findById(req.param.id)
    .then((ProductsPromotion) =>
      ProductsPromotion.remove().then(() => res.json({ success: true })),
    )
    .catch((err) =>
      res.status(404).json({ success: false, message: "Item Doesn't exist" }),
    );
});

module.exports = router;
