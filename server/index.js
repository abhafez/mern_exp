const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const departments = require('./routes/api/Departments');
const promotions = require('./routes/api/Promotions');
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

app.use('/api/departments', departments);
app.use('/api/promotions', promotions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
