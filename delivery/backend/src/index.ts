import express from "express";
import { connectDatabase } from "./utils/database";
import { auth } from "./router/user";
import { category } from "./router/Category";
import { food } from "./router/Food";
import { order } from "./router/Order";

connectDatabase()

const start = () => {
    const app = express()
    app.use(express.json())
    app.use("/order", order)
    app.use("/food", food)
    app.use("/category", category)
    app.use("/user", auth)
    const PORT = 8000
    app.get('/', (req, res) => {
        res.status(200).send({success:true, msg: "hello"})
    })
    app.listen(PORT, () => {
        console.log("server is running");
    })
}
start()