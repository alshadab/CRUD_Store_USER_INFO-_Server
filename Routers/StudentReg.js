const express = require("express");
const router = express.Router();
const Student = require("../Schema/StudentSchema");

router.post("/create", async (req, res) => {
  try {
    const student = await Student(req.body).save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/get", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).send(student);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findById(_id);
    res.status(200).send(student);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findByIdAndDelete(_id);
    res.status(200).send([student, "Deleted Successfully"]);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
