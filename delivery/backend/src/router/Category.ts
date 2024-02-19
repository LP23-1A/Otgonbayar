import express from "express";
import { createCategory } from "../controller/Category";

const category = express.Router();
category.route("/").post(createCategory);

export { category };