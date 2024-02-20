import express from "express";
import { createFood, deletefood, getallfood, updatefood } from "../controller/Food";

const food = express.Router()
food.route("/").post(createFood).get(getallfood)
food.route("/food").delete(deletefood)
food.route("/food/:id").delete(deletefood).put(updatefood)

export {food}
