import { Pool } from "pg";
import fs from "fs";
import path from "path";

// Initial pool to connect to postgres database
const initialPool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1377",
  database: "postgres", // Connect to default postgres database first
});

// Pool for connecting to our application database
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1377",
  database: "trademaster",
});

export async function checkAndCreateDatabase() {
  try {
    // Check if database exists
    const result = await initialPool.query(
      "SELECT datname FROM pg_database WHERE datname = 'trademaster'"
    );

    if (result.rows.length === 0) {
      // Create the database if it doesn't exist
      await initialPool.query("CREATE DATABASE trademaster");
      console.log("Database 'trademaster' created successfully.");
    } else {
      console.log("Database 'trademaster' already exists.");
    }
  } catch (err) {
    console.error("Error creating database:", err);
    throw err;
  } finally {
    await initialPool.end();
  }
}

export async function checkAndCreateTables() {
  try {
    const sqlPath = path.join(__dirname, "../sql/tables.sql");

    // Create sql directory if it doesn't exist
    const sqlDir = path.dirname(sqlPath);
    if (!fs.existsSync(sqlDir)) {
      fs.mkdirSync(sqlDir, { recursive: true });
    }

    // Create tables.sql if it doesn't exist
    if (!fs.existsSync(sqlPath)) {
      const defaultTableSchema = `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      fs.writeFileSync(sqlPath, defaultTableSchema);
    }

    const sql = fs.readFileSync(sqlPath, "utf-8");

    // Check if users table exists
    const result = await pool.query(
      "SELECT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'users')"
    );

    if (!result.rows[0].exists) {
      await pool.query(sql);
      console.log("Tables created successfully.");
    } else {
      console.log("Tables already exist.");
    }
  } catch (err) {
    console.error("Error creating tables:", err);
    throw err;
  }
}

export default pool;
