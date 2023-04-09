const { Router } = require("express");
const {
  retrievePost,
  updatePost,
  deletePost,
  likePost,
  unLikePost,
  createPost,
  getAllPosts,
} = require("../Controllers/postController");
const postRoutes = Router();
postRoutes.post("/",createPost)
postRoutes.get("/:id", retrievePost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
postRoutes.post("/:id/like", likePost);
postRoutes.post("/:id/unlike", unLikePost);
postRoutes.get("/allposts/all", getAllPosts);
module.exports = {
  postRoutes,
};
