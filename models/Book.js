const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const BookSchema = new mongoose.Schema({
  authors: [
    {
      type: String,
    },
  ],
  // description: {
  //   type: String,
  //   required: true,
  // },
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
  // available: {
  //   type: boolean,
  //   required: true,
  // },
});

module.exports = mongoose.model("Book", BookSchema);
