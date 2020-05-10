const mongoose = require('mongoose');
const Department = require('../models/Departments');
const Products = require('../models/Products');
const Promotions = require('../models/Promotions');

const { departments } = require('../data/Departments');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection Successful!');

  Department.collection.insertMany(departments, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log('✔ Your data has been inserted to DB');
      process.exit();
    }
  });
});
