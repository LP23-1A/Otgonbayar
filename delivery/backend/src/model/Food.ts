import mongoose from "mongoose";

const foodMongoose = new mongoose.Schema({
    name : String,
    image : String,
    ingeredient : String,
    price : {
        type : Number
    },
    discount : {
        type : Number,
        default : 0
    }
})
const foodModel = mongoose.model("food", foodMongoose )
export {foodModel}
