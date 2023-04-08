const {Router}=require("express")
const { analyticsUsers, analyticsPosts } = require("../Controllers/analyticsController")
const analyticsRoutes=Router()

analyticsRoutes.get("/users",analyticsUsers)
analyticsRoutes.get("/posts",analyticsPosts)

module.exports={
    analyticsRoutes
}