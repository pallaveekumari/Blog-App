const { postModel } = require("../Models/postModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//Create a new post. The request should include the user_id.
const createPost = async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  const payload = req.body;
  try {
    if (payload.content.length == 0 || payload.content.length > 300) {
      res.status(400).json({ msg: "Invalid content" });
    }
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        res.status(400).json({ msg: "Something went wrong" });
      } else {
        console.log(decoded);
        const users = await postModel({ ...payload, user_id: decoded.user_id });
        await users.save();
        res.status(200).json({ msg: "post created successfully" });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong" });
  }
};
//Retrieve a post by id.
const retrievePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findById({ _id: id });

    res.status(200).send({ msg: "Retrieving Post Successfully", post });
  } catch (err) {
    res.status(400).send({ msg: "Retrieving Post Not Found" });
  }
};
//Update a post's content by id
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    if (content.length == 0 || content.length > 300) {
      res.status(404).send({ msg: "Invalid content" });
    } else {
      await postModel.findByIdAndUpdate(
        { _id: id },
        { content: content, updated_at: Date.now() }
      );
    }

    res.status(200).send({ msg: "Post updated successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Post Not Found", error: err });
  }
};
//Delete a post by id.
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await postModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Deleted Post Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Post Not Found", error: err });
  }
};
//Increment the like count of a post by id.
const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } });
    res.status(200).send({ msg: "Liked Post Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong", error: err });
  }
};
//Decrement the like count of a post by id. The count should not go below 0.
const unLikePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findOne({ _id: id });
    if (post.likes == 0) {
      res
        .status(400)
        .send({ msg: "We cannot unlike because likes are already zero" });
    } else {
      await postModel.findOneAndUpdate({ _id: id }, { $inc: { likes: -1 } });
      res.status(200).send({ msg: "UnLiked Post Successfully" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong", error: err });
  }
};
// get all posts
const getAllPosts = async (req, res) => {
  try {
    const data = await postModel.find();
    res.status(200).json({ msg: "all Posts", data: data });
  } catch (err) {
    res.status(400).json({ msg: "something went wrong" });
  }
};
module.exports = {
  createPost,
  retrievePost,
  updatePost,
  deletePost,
  likePost,
  unLikePost,
  getAllPosts
};
