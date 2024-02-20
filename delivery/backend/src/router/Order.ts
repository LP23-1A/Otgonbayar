import express from "express";
import { createOrder, deleteOrder, updateOrder } from "../controller/Order";

const order = express.Router()
order.route("/").post(createOrder)
order.route("/order").delete(deleteOrder)
order.route("/food/:id").delete(deleteOrder).put(updateOrder)

export {order}