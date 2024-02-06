import express from "express";
import { createUser, login } from "../controller/user";

const auth = express.Router()
auth.route('/createUser').post(createUser)
auth.route('/login').post(login)

export {auth}