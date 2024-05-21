const User = require("../model/userModel");

const jwt = require("jsonwebtoken")

const getAlluser = async(req,res)=>{

  let users = await  User.find();

  res.send(users);

}





const registerUser =async(req,res)=>{

    let data = req.body;
    let newUser = await new User(data).save()
 res.send(newUser);

}

const loginUser = async(req,res)=>{
    let data = req.body;
    let existingUser = await User.findOne({username:data.username});

    if(!existingUser){
       return  res.status(401).send("user not found please register")
    }

    if(existingUser.password !== data.password){
      return   res.send("wrong password")
    }

    let token = jwt.sign({userId:existingUser._id},"thisisyourprivatekey")
  
    console.log(token);
   
    const userdata ={
        username:existingUser.username,
       token:token,
       role:existingUser.role
    }

    res.send(userdata)

}


async function deleteUser(req,res){
  let id = req.headers.id;
   await User.findByIdAndDelete(id);
   res.send("user deleted successfully")
}

module.exports ={getAlluser,registerUser,loginUser,deleteUser}