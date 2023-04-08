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
    const postData=req.body;
    try{
        const updatedPost= await postModel.findByIdAndUpdate({_id:id},postData)
    res.status(200).json({msg:"updated post successfully"})
    }
    catch(err)
    {
        res.status(400).json({msg:"Post Not Found",error:err})
    }

}


const deletePost=async (req,res)=>{
    const {id}=req.params;
    try{
const deletedPost= await postModel.findByIdAndDelete({_id:id})
res.status(200).json({msg:"Deleted Post Successfully",deletedPost})   
}
    catch(err)
    {
        res.status(400).json({msg:"Post Not Found",error:err})
    }
}


const likePost=async (req,res)=>{
    const {id}=req.params;
    try{
const likedPost= await postModel.findOneAndUpdate({_id:id})
res.status(200).json({msg:"Liked Post Successfully",likedPost})
    }
    catch(err)
    {
res.status(400).json({msg:"Something went wrong",error:err})
    }
}


const unLikePost=async (req,res)=>{
    const {id}=req.params;
    try{
        const unLikedPost= await postModel.findOneAndUpdate({_id:id})
        res.status(200).json({msg:"UnLiked Post Successfully",unLikedPost})
    }
    catch(err)
    {
        res.status(400).json({msg:"Something went wrong",error:err})   
    }
}
module.exports={
    retrievePost,
    updatePost,
    deletePost,
    likePost,
    unLikePost

}