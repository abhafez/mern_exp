const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const departments = require("./routes/api/Departments");

const app = express();

// Middlewares
app.use(bodyParser.json());

const db = process.env.MONGO_URI;

app.get('/', (req, res) => {
})
console.log(db);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.log(err));

app.use("/api/departments", departments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
