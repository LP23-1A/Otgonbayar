import mongoose from "mongoose";

const newMongoose = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: String,
    password: String,
    avatarimg: Buffer
})
const userModel = mongoose.model("user", newMongoose )
export {userModel}