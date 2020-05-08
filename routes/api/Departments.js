const express = require("express");
const router = express.Router();

const Department = require("../../models/Departments");

/*
 * @route GET api/detpartment
 * @description  GET All departments
 * @access Public
 */
router.get("/", (req, res) => {
  Department.find().then((items) => res.json(items));
});

/*
 * @route POST api/detpartment
 * @description  Post a new All departments
 * @access Public
 */
router.post("/", (req, res) => {
  const newDepartment = new Department({
    name: req.body.name,
  });
  newDepartment.save().then((item) => res.json(item));
});

/*
 * @route POST api/detpartment/:id
 * @description  Post a new All departments
 * @access Public
 */
router.delete("/:id", (req, res) => {
  Department.findById(req.param.id)
    .then((department) =>
      department.remove().then(() => res.json({ success: true }))
    )
    .catch((err) =>
      res.status(404).json({ success: false, message: "Item Doesn't exist" })
    );
});

module.exports = router;
