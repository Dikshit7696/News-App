const express = require("express");
const { getAllnews, createNews, findSingleNews, UpdateSingleNews, deleteNews } = require("../controllers/newController");

const Router = express.Router();

Router.get('/',(req,res)=>{
    res.send("you are in news Route")
})


Router.get('/find',getAllnews)
Router.get('/findOne',findSingleNews)
Router.post('/create',createNews)
Router.post('/update',UpdateSingleNews)
Router.delete('/delete',deleteNews)



module.exports = Router;