import express from "express";

import { getUsers, createUser, getOneUsers, deleteUser, updateUser } from "../controller/user.js";
import { createCategory } from "../controller/category.js";
import { createTransaction } from "../controller/transaction.js";

const user = express.Router()

user.route('/').get(getUsers).post(createUser)
user.route('/user').post(getOneUsers).delete(deleteUser).put(updateUser)
user.route('/user/category').post(createCategory)
user.route('/user/transaction').post(createTransaction)

export { user }