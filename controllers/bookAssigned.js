const { model } = require("mongoose");
const bookAssigned = require("../models/BookAssigned");
const bookModel = require("../models/Book");
const studentModel = require("../models/Student");

async function getAssignedBook(req, res) {
  let data = await bookAssigned.find({}).sort("-given_at");
  let allBook = await bookModel.find({});
  let allStudent = await studentModel.find({});

  let finalizeData = data.map((element, index) => {
    return {
      status: element.status,
      student:
        allStudent.filter((item) => item._id == element.student_id)[0] || [],
      book: allBook.filter((item) => item._id == element.book_id)[0] || [],
      given_at: element.given_at,
      received_at: element.received_at,
      _id: element.id,
    };
  });

  res.render("bookAssign", {
    allRecord: data,
    allBook,
    allStudent,
    record: finalizeData,
  });
}

async function createAssigndBook(req, res) {
  let { studentId, bookId } = req.body;
  console.log(studentId, bookId);
  let obj = bookAssigned();
  obj.student_id = studentId;
  obj.book_id = bookId;
  obj.status = "assigned";
  obj.save();
  res.redirect("/book-assign");
}

async function bookReceived(req, res) {
  const { id } = req.body;
  let data = await bookAssigned.findOne({ _id: id });
  data.status = "received";
  data.received_at = new Date();
  data.save();
  console.log("id=>", id);
  console.log("data=>", data);

  res.redirect("/book-assign");
}

module.exports = { getAssignedBook, createAssigndBook, bookReceived };
