const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  posterId: {type: String, required: true},
  postType: {type: String, required: true},
  postContent: {type: String, required: true},
  postLikes: {type: Array, required: false}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;