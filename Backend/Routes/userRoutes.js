const { Router } = require("express");
const {
  createUser,
  retrieveUser,
  updateUsers,
  deleteUsers,
  userLogin,
 
} = require("../Controllers/userController");

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.post("/login",userLogin)
userRoutes.get("/:id", retrieveUser);
userRoutes.put("/:id", updateUsers);
userRoutes.delete("/:id", deleteUsers);

module.exports = {
  userRoutes,
};
