import mongoose from "mongoose";

const categoryMongoose = new mongoose.Schema({
    name : String
})
const categoryModel = mongoose.model("category", categoryMongoose )
export {categoryModel}