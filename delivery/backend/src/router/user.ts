import express from "express";
import { createUser, deleteUser, getAllUser, login, updateUser } from "../controller/user";

const auth = express.Router()
auth.route('/createUser').post(createUser)
auth.route('/getalluser').get(getAllUser)
auth.route("/:id").delete(deleteUser).put(updateUser)
auth.route('/login').post(login)

export {auth}