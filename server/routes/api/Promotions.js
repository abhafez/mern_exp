const express = require('express');
const router = express.Router();

const Promotion = require('../../models/Promotions');

/*
 * @route GET api/detpartment
 * @description  GET All Promotions
 * @access Public
 */
router.get('/', (req, res) => {
  Promotion.find().then((items) => res.json(items));
});

/*
 * @route POST api/detpartment
 * @description  Post a new All Promotions
 * @access Public
 */
router.post('/', (req, res) => {
  const newPromotion = new Promotion({
    code: req.body.code,
    active: req.body.active,
    discount: req.body.discount,
  });
  newPromotion.save().then((item) => res.json(item));
});

/*
 * @route POST api/detpartment/:id
 * @description  Post a new All Promotions
 * @access Public
 */
router.delete('/:id', (req, res) => {
  Promotion.findById(req.param.id)
    .then((Promotion) => Promotion.remove().then(() => res.json({ success: true })))
    .catch((err) =>
      res.status(404).json({ success: false, message: "Item Doesn't exist" }),
    );
});

module.exports = router;
