import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDatabase = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://otgonbayar:oggy0503@fooddelivery.1ux5rps.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(MONGODB_URI)
        console.log('Database connected');
    } catch (error:unknown) {
        throw new Error("Database cannot connect")
    }
}

export {connectDatabase}