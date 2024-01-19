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
    const { name, amount, description, transaction_type } = req.body;
    try {
      const queryText = `INSERT INTO transaction(id, name, amount, description, transaction_type) VALUES (gen_random_uuid (), $1, $2) RETURNING *`;
      const response = await pool.query(queryText, [name, amount, description, transaction_type]);
      res.send(response.rows[0]);
    } catch (error) {
      console.error(error);
      res.send("error query");
    }
  };