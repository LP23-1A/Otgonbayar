import express from "express";
import { createCategory, deletecategory, getallcategory, updatecategory } from "../controller/Category";

const category = express.Router();
category.route("/createCategory").post(createCategory);
category.route("/:id").delete(deletecategory).put(updatecategory);
category.route("/getAllCategory").get(getallcategory);

export { category };