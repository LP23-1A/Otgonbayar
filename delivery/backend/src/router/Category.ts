import express from "express";
import { createCategory, deletecategory, updatecategory } from "../controller/Category";

const category = express.Router();
category.route("/").post(createCategory);
category.route("/category").delete(deletecategory)

export { category };