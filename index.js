const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

console.log(process.env.MONGO_URI);

app.use(bodyParser.json());

