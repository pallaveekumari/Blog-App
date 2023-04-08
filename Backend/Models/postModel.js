// id (unique identifier)
// user_id (foreign key referencing the User model)
// content (string, 1-300 characters)
// created_at (timestamp, automatically set when the post is created)
// updated_at (timestamp, automatically updated when the post is updated)
// likes (integer, non-negative)
const mongoose = require('mongoose');

const postSchema =  mongoose.Schema({
 
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = {
    postModel
}
