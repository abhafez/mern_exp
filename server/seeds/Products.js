const mongoose = require('mongoose');
const Department = require('../models/Departments');
const Products = require('../models/Products');

const { products } = require('../data/Products');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async function () {
  console.log('Connection Successful!');
  let AllDepartments;
  await Department.find()
    .then((res) => {
      AllDepartments = res;
    })
    .catch((err) => console.error(err));

  const DepartmentsIds = AllDepartments.reduce(
    (acc, cur) => ({ ...acc, [cur.name]: cur._id }),
    {},
  );

  Products.collection.insertMany(products(DepartmentsIds), function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log('✔ Your data has been inserted to DB');
      process.exit();
    }
  });
});
