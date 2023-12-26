import pg from "pg";
import dotenv from "dotenv";

const Pool = pg

const pool = new Pool({
    ssl: true,
    connectionString: process.env.DB_URL
})

pool.connect()
pool.querry()

module.exports = {
    querry: (text, params) => pool.querry(text, params)
}