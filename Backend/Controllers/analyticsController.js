const { postModel } = require("../Models/postModel");
const { userModel } = require("../Models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Retrieve the total number of users.
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

//Retrieve the top 5 most active users, based on the number of posts.
const analyticsUsersTopActive = async (req, res) => {
  try {
    const data = await userModel.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "user_id",
          as: "posts",
        },
      },
      {
        $project: {
          id: "$_id",
          name: 1,
          email: 1,
          bio: 1,
          created_at: 1,
          updated_at: 1,
          post_count: { $size: "$posts" },
        },
      },
      {
        $sort: { post_count: -1 },
      },
      { $limit: 5 },
    ]);
    res.send(data);
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};
//Retrieve the total number of posts.
const analyticsPosts = async (req, res) => {
  try {
    const totalPost = await postModel.count();
    res.status(200).json({
      msg: "Retrieving Total Posts Successfully",
      total_posts: totalPost,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

//Retrieve the top 5 most liked posts.
const analyticsPostsTopLiked = async (req, res) => {
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
  analyticsPostsTopLiked,
};
