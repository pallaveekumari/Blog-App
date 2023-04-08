// const createPost=async (req,res)=>{
//  const {}

const { postModel } = require( "../Models/postModel")


// }


const retrievePost=async (req,res)=>{
    const {id}=req.params;

    try{
        const post=await postModel.findById({_id:id})
        res.status(200).json({msg:"Retrieving Post Successfully",post})
    }
catch(err)
{
    res.status(400).json({msg:"Retrieving Post Not Found"})
}
}


const updatePost=async (req,res)=>{

    const {id}=req.params;
    const {postData}=req.body;
    try{
        const updatedPost=
    }

}
module.exports={
    retrievePost
}