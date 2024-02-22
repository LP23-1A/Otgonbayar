import express from "express";
import { createOrder, deleteOrder, getAllOrder, updateOrder } from "../controller/Order";

const order = express.Router()
order.route("/createOrder").post(createOrder)
order.route("/getallorder").get(getAllOrder)
order.route("/:id").delete(deleteOrder).put(updateOrder)

export {order}