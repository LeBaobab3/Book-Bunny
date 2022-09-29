const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
  checkedOut: {
    type: String,
    required: true,
  },
  overDue: {
    type: Number,
    required: true,
  },
  renew: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
