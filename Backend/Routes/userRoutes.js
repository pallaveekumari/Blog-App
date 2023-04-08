const { Router } = require("express");
const { createUser, retrieveUser } = require("../Controllers/userController");

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/:id", retrieveUser);

module.exports = {
  userRoutes,
};
