import express from "express";
import bp from "body-parser";
import postgre from "postgre";
import dotenv from "dotenv";
import { pool } from "./db.js";

const app = express()

dotenv.config()

app.use(bg.json());

app.get("/user", async (req, res) => {
    const {username, email} = req.body
    try{
        const queryText = "SELECT * FROM users username = $1, email = $2"
        const response = pool.query(queryText)
        res.send(response.rows)
    } catch (error){
        console.log(error);
    }
})

app.post("/user", async (req, res) => {
    try{
        const tableQueryText = `
        CREATE TABLE IF NOT EXIST users{
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
    }`
    await pool.query(tableQueryText)
    res.send('ok')
    } catch (error) {
        console.log(error);
    }
})

app.post("/user", async (req, res) => {
    const {username, email} = req.body
    try{
        const queryText = `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *`
        const result =  await pool.query(queryText, [username, email])
        res.send(res.rows[0])
    } catch (error){
        console.log(error);
    }
})
