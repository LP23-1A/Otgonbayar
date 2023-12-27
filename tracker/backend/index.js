import express from "express";
import bp from "body-parser";
import dotenv from "dotenv";
import { pool } from "./db.js";

const app = express()
const PORT = process.env.PORT || 3001
dotenv.config()

app.use(bp.json());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
  });

app.get("/users", async (req, res) => {
    try{
        const queryText = `SELECT * FROM users`
        const response = await pool.query(queryText)
        res.send(response.rows)
    } catch (error){
        console.log(error);
    }
})

app.get("/user", async (req, res) => {
    const {username, email} = req.body
    try {
        const queryText = `SELECT * FROM users WHERE username='${username}' AND email='${email}'`
        const response = await pool.query(queryText)
        res.send(response.rows)
    } catch (error) {
        console.log(error);
    }
})

app.post("/createTable", async (_, res) => {
    try {
      const tableQueryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )`;
      await pool.query(tableQueryText);
      res.send("ok");
    } catch (error) {
      console.error(error);
    }
  });

app.post("/user", async (req, res) => {
    const { username, email } = req.body;
    console.log(username, email, 'req.body');
    try {
      const queryText =
        "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *";
      const res = await pool.query(queryText, [ username, email ]);
      res.send(res.rows[0])
    } catch (error) {
      console.error(error);
      res.send('error query')
    }
  });

app.delete("/user", async (req, res) => {
    const { username, email, id } = req.body;
    try {
        const queryText = `DELETE from users WHERE username='${username}' AND email='${email} OR id='${id}`
        await pool.query(queryText)
    } catch (error) {
        console.log(error);
    }
})

app.put("/user", async (req, res) => {
    const { username, email, id } = req.body;
    try {
        const queryText = `UPDATE users set username='${username}' email='${email}' WHERE id='${id}'`
        await pool.query(queryText)
        console.log('ok');
    } catch (error) {
        res.send("error").end()
        console.log(error);
    }
})