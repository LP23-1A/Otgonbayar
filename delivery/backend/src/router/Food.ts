import express, { Router } from "express";
import { createFood } from "../controller/Food";

const food = express.Router()
food.route("/").post(createFood)

export {food}
