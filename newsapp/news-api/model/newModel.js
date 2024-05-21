const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
    thumbnail:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    }
})


let News = mongoose.model("news",newSchema);

module.exports = News;