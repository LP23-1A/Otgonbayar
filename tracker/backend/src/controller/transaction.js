import { pool } from "../../db.js";

export const getTransaction = async (req, res) => {
    try {
        const queryText =
        `SELECT * FROM transaction`;
        const response = await pool.query(queryText);
        res.send(response.rows);
    } catch (error) {
        console.log(error);
    }
}

export const createTransaction = async (req, res) => {
    const { name, description } = req.body;
    try {
      const queryText = `INSERT INTO category (id, name, description) VALUES (gen_random_uuid (), $1, $2) RETURNING *`;
      const response = await pool.query(queryText, [name, description]);
      res.send(response.rows[0]);
    } catch (error) {
      console.error(error);
      res.send("error query");
    }
  };