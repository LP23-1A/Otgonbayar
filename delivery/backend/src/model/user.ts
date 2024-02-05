import mongoose from "mongoose";

const newMongoose = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    number: {
        type: Number,
        length: {
            minlength: 8,
            maxlength: 8
        }
    },
    password: {
        type: String,
        select: false
    },
    avatarimg: Buffer
})
const userModel = mongoose.model("user", newMongoose )
export {userModel}