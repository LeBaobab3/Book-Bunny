const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const BookAssigned = new mongoose.Schema({
  book_id: {
    type: String,
    require: true,
  },
  student_id: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    required: true,
  },
  given_at: {
    type: Date,
    default: Date.now,
  },
  received_at: {
    type: Date,
    require: false,
  },
});

module.exports = mongoose.model("BookAssigned", BookAssigned);
