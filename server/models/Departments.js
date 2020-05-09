const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model('department', DepartmentSchema);

module.exports = Department;
