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
  // checkOut: {
  //   type: Number,
  //   required: true,
  // },
  // OverDue: {
  //   type: Number,
  //   required: true,
  // },
  // read: {
  //   type: Number,
  //   required: true,
  // },
  registered_on: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Student", StudentSchema);
