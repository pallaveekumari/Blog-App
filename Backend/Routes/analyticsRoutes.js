const {Router}=require("express")
const { analyticsUsers, analyticsPosts, analyticsUsersTopActive, analyticsPostsTopActive } = require("../Controllers/analyticsController")
const analyticsRoutes=Router()

analyticsRoutes.get("/users",analyticsUsers)
analyticsRoutes.get("/posts",analyticsPosts)
analyticsRoutes.get("/users/top-active",analyticsUsersTopActive)
analyticsRoutes.get("/posts/top-liked",analyticsPostsTopActive)
module.exports={
    analyticsRoutes
}