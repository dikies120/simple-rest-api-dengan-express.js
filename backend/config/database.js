import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const dbPool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
});


export default dbPool;