const express = require("express");
const { registerUser, loginUser, getAlluser, deleteUser } = require("../controllers/userController");

const Router = express.Router();


Router.get('/',(req,res)=>{
    res.send("you are in user Route")
})
Router.get('/getalluser',getAlluser)
Router.post('/register',registerUser)
Router.post('/login',loginUser)
Router.delete('/delete',deleteUser)



module.exports = Router;