import mongoose from "mongoose";

const categoryMongoose = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        require : true
    }
})
const categoryModel = mongoose.model("category", categoryMongoose )
export {categoryModel}