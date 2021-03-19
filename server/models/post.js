const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  countLikes: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;
