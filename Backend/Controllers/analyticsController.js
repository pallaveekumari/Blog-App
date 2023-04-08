const { postModel } = require("../Models/postModel");
const { userModel } = require("../Models/userModel");

const analyticsUsers = async (req, res) => {
  try {
    const totalData = await userModel.countDocuments();
    res.status(200).json({
      msg: "Retrieving Total Users Successfully",
      total_users: totalData,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};
const analyticsUsersTopActive = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

const analyticsPosts = async (req, res) => {
  try {
    const totalPost = await userModel.countDocuments();
    res.status(200).json({
      msg: "Retrieving Total Posts Successfully",
      total_posts: totalPost,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};
const analyticsPostsTopActive = async (req, res) => {
  try {
    const topActivePosts = await postModel.aggregate([
      { $sort: { likes: -1 } },
      { $limit: 5 },
    ]);
    res
      .status(200)
      .send({ msg: "Top Active Posts", top_active_posts: topActivePosts });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

module.exports = {
  analyticsUsers,
  analyticsPosts,
  analyticsUsersTopActive,
  analyticsPostsTopActive,
};
