const { userModel } = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//login

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await userModel.find({ email });
    if (users.length == 0) {
      res
        .status(400)
        .json({ msg: "User doesnot exist please Create a new User" });
    } else {
      const matchPassword = await bcrypt.compare(password, users[0].password);
      if (!matchPassword) {
        res.status(400).json({ msg: "Incorrect Password" });
      } else {
        let token = jwt.sign({ user_id: users[0]._id }, process.env.SECRET);
        res
          .status(200)
          .json({ msg: "login Successfull", token: token, user: users[0] });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

//Create a new user.

const createUser = async (req, res) => {
  const { name, email, bio, password } = req.body;

  const users = await userModel.find({ email });
  try {
    if (users.length != 0) {
      res.status(400).json({ msg: "user already exist" });
    } else {
      bcrypt.genSalt(6, (err, salt) => {
        if (err) {
          res.status(400).json({ msg: "Something went wrong" });
        } else {
          bcrypt.hash(password, salt, async (err, hash) => {
            if (err) {
              res.status(400).json({ msg: "Something went wrong" });
            } else {
              const newUsers = await new userModel({
                name,
                email,
                bio,
                password: hash,
              });
              await newUsers.save();
              res.status(200).json({ msg: "New User Created Successfully" });
            }
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

const retrieveUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById({ _id: id });

    res
      .status(200)
      .json({ msg: "Retrieved User By its id Successfully", user });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Retrieved User By its id Not Found", error: err });
  }
};

//Update a user's name or bio by id.
const updateUsers = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    await userModel.findByIdAndUpdate(
      { _id: id },
      { ...userData, updated_at: Date.now() }
    );
    res.status(200).json({ msg: "User Updated Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "User Not Found", error: err });
  }
};
//Delete a user by id
const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    await userModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "User Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "User Not Found", error: err });
  }
};
//get all users
const allUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(200).send({ data: data });
  } catch (err) {
    res.status(400).send({ msg: "something went wrong" });
  }
};

module.exports = {
  createUser,
  retrieveUser,
  updateUsers,
  deleteUsers,
  userLogin,
  allUsers,
};
