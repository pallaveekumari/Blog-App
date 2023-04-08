const {Router}=require("express")
const { retrievePost, updatePost, deletePost, likePost, unLikePost } = require("../Controllers/postController")
const postRoutes=Router()

postRoutes.get("/:id",retrievePost)
postRoutes.put("/:id",updatePost)
postRoutes.delete("/:id",deletePost)
postRoutes.post("/:id/like",likePost)
postRoutes.post("/:id/unlike",unLikePost)
module.exports={
    postRoutes
}