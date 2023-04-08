const { userModel } = require("../Models/userModel");

const analyticsUsers = async (req, res) => {
  try {
    const totalData = await userModel.find();
    res
      .status(200)
      .json({ msg: "Retrieving Total Users Successfully", totalData });
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
    const totalPost = await userModel.find();
    res
      .status(200)
      .json({ msg: "Retrieving Total Posts Successfully", totalPost });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};
const analyticsPostsTopActive = async (req, res) => {
  try {
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
