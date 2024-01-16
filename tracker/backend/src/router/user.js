import express from "express";

import { getUsers, createUser, getOneUsers, deleteUser, updateUser } from "../controller/user.js";

const user = express.Router()

user.route('/').get(getUsers).post(createUser)
user.route('/user').post(getOneUsers).delete(deleteUser).put(updateUser)

export { user }