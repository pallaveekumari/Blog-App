const { Router } = require("express");
const {
  createUser,
  retrieveUser,
  updateUsers,
  deleteUsers,
} = require("../Controllers/userController");

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/:id", retrieveUser);
userRoutes.put("/:id", updateUsers);
userRoutes.delete("/:id", deleteUsers);

module.exports = {
  userRoutes,
};
