
const express =require("express");
const userRouter = require("./routers/userRouter");
const newsRouter = require("./routers/newsRouter");
const ConnectDb = require("./config/db");
const cors = require("cors")
const server = express();
require("dotenv").config();
server.use(cors())
server.use(express.json());
server.use('/user',userRouter)
server.use('/news',newsRouter)

server.get('/',(req,res)=>{
    res.send("server is up")
})




ConnectDb().then(()=>{
    server.listen(8000,()=>{
        console.log("server is listening on port 8000")
    })
}).catch((err)=>console.log(err));
