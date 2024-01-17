import { createCategory, getCategory } from "../controller/category.js";
import express from "express";

const category = express.Router()

category.route('/category').post(createCategory).get(getCategory)

export { category }