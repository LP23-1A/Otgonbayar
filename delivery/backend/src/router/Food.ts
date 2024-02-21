import express from "express";
import { createFood, deletefood, getallfood, updatefood } from "../controller/Food";

const food = express.Router()
food.route("/createFood").post(createFood)
food.route("/getallfood").get(getallfood)
food.route("/deletefood").delete(deletefood)
food.route("/:id").delete(deletefood).put(updatefood)

export {food}
