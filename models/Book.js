const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
