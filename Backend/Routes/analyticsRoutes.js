const {Router}=require("express")
const { analyticsUsers } = require("../Controllers/analyticsController")
const analyticsRoutes=Router()

analyticsRoutes.get("/users",analyticsUsers)

module.exports={
    analyticsRoutes
}