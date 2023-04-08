const { postModel } = require("../Models/postModel");
const createPost = async (req, res) => {
  const postData = req.body;
};

const retrievePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findById({ _id: id });
    // console.log(post);
    res.status(200).send({ msg: "Retrieving Post Successfully", post });
  } catch (err) {
    res.status(400).send({ msg: "Retrieving Post Not Found" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  //   console.log(id)
  try {
    if (content.length == 0 || content.length > 300) {
      res.status(404).send({ msg: "Invalid content" });
    }
    await postModel.findByIdAndUpdate(
      { _id: id },
      { content: content },
      { new: true }
    );

    res.status(200).send({ msg: "Post updated successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Post Not Found", error: err });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await postModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Deleted Post Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Post Not Found", error: err });
  }
};

const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } });
    res.status(200).send({ msg: "Liked Post Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong", error: err });
  }
};

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
module.exports = {
  retrievePost,
  updatePost,
  deletePost,
  likePost,
  unLikePost,
};
