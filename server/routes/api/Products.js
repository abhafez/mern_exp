const express = require('express');
const { chunk } = require('../../functions/chunk');
const router = express.Router();

const Products = require('../../models/Products');
const Departments = require('../../models/Departments');
const Promotions = require('../../models/Promotions');
const ProductsPromotions = require('../../models/ProductsPromotions');
/*
 * @route GET api/detpartment
 * @description  GET All Products (Name-)
 * @access Public
 */
router.get('/', async (req, res) => {
  let productList;
  let productsPromotionsList;
  let promotionsList;
  let departmentsList;
  await Products.find()
    .then((items) => (productList = items))
    .catch((err) => res.json('something went wrong'));
  await ProductsPromotions.find()
    .then((pp) => (productsPromotionsList = [...pp]))
    .catch((err) => res.json('something went wrong'));
  await Promotions.find()
    .then((prmos) => (promotionsList = [...prmos]))
    .catch((err) => res.json('something went wrong'));
  await Departments.find()
    .then((deps) => (departmentsList = [...deps]))
    .catch((err) => res.json('something went wrong'));
  let productsWithPromos = productList.map((product) => {
    let promoDetails = promotionsList.find((promoDetails) => {
      let promotion = productsPromotionsList.find((pp) => pp.product_id == product._id);
      if (promotion) {
        return promoDetails._id == promotion.promotion_id;
      }
      return null;
    });

    let departmentName = departmentsList.find((dep) => dep._id == product.department_id);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      department: departmentName.name,
      newPrice:
        (promoDetails && product.price * ((100 - promoDetails.discount) / 100)) || null,
      code: (promoDetails && promoDetails.code) || null,
      isActive: (promoDetails && Boolean(promoDetails.active)) || false,
    };
  });
  const { page, count } = req.query;

  let paginatedData = {
    data: {
      list: [...chunk(productsWithPromos, count, page)],
      totalLengh: productsWithPromos.length,
    },
  };
  res.status(200).json(paginatedData);
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
