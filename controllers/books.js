const cloudinary = require("../middleware/cloudinary");
const Book = require("../models/Book");

module.exports = {
  getDash: async (req, res) => {
    try {
      const books = await Book.find({ user: req.user.id });
      res.render("dash.ejs", { books: books, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getDash: async (req, res) => {
    try {
      const books = await Book.find({ user: req.user.id });
      res.render("library.ejs", { books: books, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      // const comments = await Comment.find({ post: req.params.id })
      // .sort({ createdAt: "desc" })
      // .lean();
      res.render("book.ejs", {
        book: book,
        user: req.user,
      }); //property of comments that is equal to the  comments we found in our collection that match the id of the post that we're on
    } catch (err) {
      console.log(err);
    }
  },
  addBook: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Book.add({
        title: req.body.title,
        author: req.body.author,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        description: req.body.description,
        user: req.user.id,
      });
      console.log("Book has been added!");
      res.redirect("/book");
    } catch (err) {
      console.log(err);
    }
  },

  deleteBook: async (req, res) => {
    try {
      // Find post by id
      let book = await Book.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(book.cloudinaryId);
      // Delete post from db
      await Book.remove({ _id: req.params.id });
      console.log("Deleted Book");
      res.redirect("/book");
    } catch (err) {
      res.redirect("/book");
    }
  },
};
