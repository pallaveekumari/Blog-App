const { userModel } = require("../Models/userModel");



//Create a new user.

const createUser = async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const newUser = await new userModel({
      name,
      email,
      bio,
    });
    await newUser.save();
    res.status(200).json({ msg: "New User Created Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};


//Retrieve a user by id.

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
    await userModel.findByIdAndUpdate({ _id: id }, userData);
    res.status(200).json({ msg: "User Updated Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "User Not Found", error: err });
  }
};
//Delete a user by id
const deleteUsers = async (res, req) => {
  const { id } = req.params;

  try {
    await userModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "User Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "User Not Found", error: err });
  }
};

module.exports = {
  createUser,
  retrieveUser,
  updateUsers,
  deleteUsers,
};
