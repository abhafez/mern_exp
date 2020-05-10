const mongoose = require('mongoose');
const Department = require('../models/Departments');
const Products = require('../models/Products');
const Promotions = require('../models/Promotions');
const ProductsPromotions = require('../models/ProductsPromotions');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async function () {
  console.log('Connection Successful!');
  let products;
  let promotions;
  await Products.find()
    .then((res) => {
      products = res.reduce((acc, cur) => ({ ...acc, [cur.name]: cur._id }), {});
    })
    .catch((err) => console.error(err));

  await Promotions.find()
    .then((res) => {
      promotions = res.reduce((acc, cur) => ({ ...acc, [cur.code]: cur._id }), {});
    })
    .catch((err) => console.error(err));

  let productPromoList = [
    { product_id: products['PlayStation IV'], promotion_id: promotions['Game-30'] },
    { product_id: products['Algorithms'], promotion_id: promotions['Book-80'] },
    { product_id: products['Medal'], promotion_id: promotions['Gift-50'] },
    { product_id: products['Chess'], promotion_id: promotions['Toy-20'] },
  ];

  ProductsPromotions.collection.insertMany(productPromoList, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log('✔ Your data has been inserted to DB');
      process.exit();
    }
  });
});
