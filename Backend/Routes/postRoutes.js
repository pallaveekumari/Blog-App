const {Router}=require("express")
const { retrievePost, updatePost } = require("../Controllers/postController")
const postRoutes=Router()

postRoutes.get("/:id",retrievePost)
postRoutes.put("/:id",updatePost)
module.exports={
    postRoutes
}