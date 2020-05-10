const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const departments = require('./routes/api/Departments');
const promotions = require('./routes/api/Promotions');
const products = require('./routes/api/Products');
const ProductsPromotions = require('./routes/api/ProductsPromotions');

const cors = require('cors');
const app = express();

const db = process.env.MONGO_URI;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected Successfully'))
  .catch((err) => console.log(err));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use('/api/departments', departments);
app.use('/api/promotions', promotions);
app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
