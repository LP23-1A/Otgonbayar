import express from "express";
import { createUser } from "../controller/user";

const auth = express.Router()
auth.route('/createUser').post(createUser)

export {auth}