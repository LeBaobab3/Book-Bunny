const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getDash: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("dash.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
