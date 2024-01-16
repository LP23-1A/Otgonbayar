import express from "express";
import bp from "body-parser";
import dotenv from "dotenv";
import { pool } from "./db.js";
import { user } from ".././/backend/src/router/user.js";
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 3001
dotenv.config()

app.use(bp.json());
app.use('/users', user)
app.use(cors({origin : "*"}))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
  });

// app.get("/users", async (req, res) => {
//   try {
//         const queryText =
//         `SELECT * FROM users`;
//         const response = await pool.query(queryText);
//         res.send(response.rows);
//       } catch (error) {
//         console.error(error);
//     }
// });

// app.get("/user", async (req, res) => {
//     const { name, email } = req.body;
//     try {
//         const queryText =
//         `SELECT * FROM users WHERE name='${name}' AND email='${email}'`;
//         const response = await pool.query(queryText);
//         res.send(response.rows);
//       } catch (error) {
//         console.error(error);
//     }
// });

app.post("/createTable", async (_, res) => {
    try {
      const tableQueryText = `
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        avatar_img BYTEA,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        currency_type TEXT DEFAULT 'MNT'
      )`;
      await pool.query(tableQueryText);
      res.send("ok");
    } catch (error) {
      console.error(error);
    }
  });

app.post("/createCategory", async (_, res) => {
    try {
      const tableQueryText = `
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_image VARCHAR(50)
      )`;
      await pool.query(tableQueryText);
      res.send("ok");
    } catch (error) {
      console.error(error);
    }
   });

// app.post("/user", async (req, response) => {
//   const { name, email } = req.body;
//   console.log(name, email, 'req.body');
//   try {
//     const queryText =
//       "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
//     const res = await pool.query(queryText, [ name, email ]);
//     response.send(res.rows[0]);
//   } catch (error) {
//     console.error(error);
//     response.send('error query')
//   }
// });

// app.put("/user", async (req, response) => {
//   const { name, email, id} = req.body;
  
//   try {
//     const queryText = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
//     await pool.query(queryText);
//     response.send("updated");
//   } catch (error) {
//     response.send("error").end();
//     console.error(error);
//   }
// });
 
// app.delete("/user", async (req, response) => {
//   const { name, email, id} = req.body;
  
//   try {
//     const queryText = `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`
//     await pool.query(queryText);
//     response.send("deleted");
//   } catch (error) {
//     response.send("error").end();
//     console.error(error);
//   }
// });
