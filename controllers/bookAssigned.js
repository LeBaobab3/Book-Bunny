const { model } = require("mongoose");
const bookAssigned = require("../models/BookAssigned");
const bookModel = require("../models/Book");
const studentModel = require("../models/Student");

async function getAssignedBook(req, res) {
  let data = await bookAssigned.find({});
  let allBook = await bookModel.find({});
  let allStudent = await studentModel.find({});
  res.render("bookAssign", { allRecord: data, allBook, allStudent });
}

async function createAssigndBook(req, res) {
  let { studentId, bookId } = req.body;
  console.log(studentId, bookId);
  res.redirect("/book-assign");
}

module.exports = { getAssignedBook, createAssigndBook };
