const mongoose = require('mongoose');
const Promotions = require('../models/Promotions');

const { promotions } = require('../data/Promotions');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection Successful!');

  Promotions.collection.insertMany(promotions, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log('✔ Your data has been inserted to DB');
      process.exit();
    }
  });
});
