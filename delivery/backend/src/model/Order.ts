import mongoose from "mongoose";

const orderMongoose = new mongoose.Schema({
    orderNumber : Number,
    process : {
        type : String,
        enum : ['valid', 'invalid']
    },
    createdDate : {
        type: Date,
        default: () => Date.now()
    },
    district : String,
    khoroo : String,
    apartment : String
})

const orderModel = mongoose.model('order', orderMongoose)
export {orderModel}