const Student = require("../models/Student");

module.exports = {
  getStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      res.render("student.ejs", {
        student: student,
        user: req.user,
      }); //property of comments that is equal to the  comments we found in our collection that match the id of the post that we're on
    } catch (err) {
      console.log(err);
    }
  },
  createStudent: async (req, res) => {
    try {
      await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        user: req.user.id,
      });
      console.log("Student has been added!");
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      // Find student by id
      let student = await Student.findById({ _id: req.params.id });
      // Delete student from db
      await Student.remove({ _id: req.params.id });
      console.log("Deleted Student");
      res.redirect("/student");
    } catch (err) {
      res.redirect("/student");
    }
  },
};
