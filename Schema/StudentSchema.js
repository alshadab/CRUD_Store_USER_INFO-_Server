const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email is already in use"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  address: {
    type: String,
    required: true,
  },
});
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
