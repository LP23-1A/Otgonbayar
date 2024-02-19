import mongoose from "mongoose";

const foodMongoose = new mongoose.Schema({
    name : String,
    image : String,
    ingeredient : String
})
const foodModel = mongoose.model("food", foodMongoose )
export {foodModel}