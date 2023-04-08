const {userModel} = require("../Models/userModel")

const analyticsUsers=async (req,res)=>{
    try{
        const totalData=await userModel.find()
        res.status(200).json({msg:"Retrieving Total Users Successfully",totalData})
    }
    catch(err)
    {
        res.status(400).json({msg:"Something went wrong",error:err})
    }
}
module.exports={
    analyticsUsers
}
