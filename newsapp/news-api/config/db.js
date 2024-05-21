const mongoose = require("mongoose");


async function ConnectDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/kal_tak").then(()=>{
    console.log("connected to database successfully");
}).catch((err)=>console.log(err))
}


module.exports = ConnectDb;