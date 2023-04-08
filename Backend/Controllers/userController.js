const {userModel} =require( "../Models/userModel")


const createUser = async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const newUser = await new userModel({
      name,
      email,
      bio,
    });
    await newUser.save();
    res.status(200).json({ msg: "New User Created Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};


const retrieveUser=async(req,res)=>{
    const {id}=req.params;
    try{
        const user= await userModel.findById({_id:id})
   
        res.status(200).json({msg:"Retrieved User By its id Successfully",user})
    }
    catch(err)
    {
        res.status(400).json({msg:"Retrieved User By its id Not Found",error:err})
        
    }
}
module.exports={
    createUser,
    retrieveUser
}

