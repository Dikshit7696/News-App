const News = require("../model/newModel");

const getAllnews = async (req, res) => {
  let newsdata = await News.find();
  res.send(newsdata);
};

const findSingleNews = async(req,res) =>{
let id = req.headers.id;

let newsdata = await News.findById(id);

res.send(newsdata)


};

const UpdateSingleNews = async(req,res) =>{
let id = req.headers.id;
let data = req.body;
let newsdata = await News.findByIdAndUpdate(id,data);
res.send(newsdata)


};
const deleteNews = async(req,res) =>{
  
let id = req.headers.id;
console.log(id);
 await News.findByIdAndDelete(id);

res.send('news deleted')

};


const createNews = async (req, res) => {
  let data = req.body;

  let newdata = await new News(data).save();

  res.send(newdata);
};


module.exports = {getAllnews,createNews,findSingleNews,UpdateSingleNews,deleteNews}