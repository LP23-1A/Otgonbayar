import { createTransaction } from "../controller/transaction.js";
import express from "express";

const transaction = express.Router()
transaction.route('/transaction').post(createTransaction)

export { transaction }