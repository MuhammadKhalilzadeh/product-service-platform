import pool from "../../database/db";
import User from "../../models/user/index";

export async function GetAllUsersPg(): Promise<User[]> {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

export async function CreateOneUserPg(user: {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}): Promise<User> {
  const { firstName, lastName, email, passwordHash } = user;
  const result = await pool.query(
    `INSERT INTO users (firstName, lastName, email, passwordHash, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [firstName, lastName, email, passwordHash, new Date(), new Date()]
  );
  return result.rows[0];
}

export async function DeleteOneUserPg(id: string): Promise<User> {
  const result = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
}

export async function GetUserByIdPg(id: string): Promise<User> {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result.rows[0];
}

export async function GetUserByEmailPg(email: string): Promise<User> {
  const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  return result.rows[0];
}

export async function UpdateUserPg(id: string, updateData: Partial<User>) {
  const setClause = Object.entries(updateData)
    .map(([key, _], index) => `"${key}" = $${index + 2}`)
    .join(", ");

  const values = Object.values(updateData);

  const query = `
    UPDATE users 
    SET ${setClause}
    WHERE id = $1
    RETURNING *
  `;

  const result = await pool.query(query, [id, ...values]);
  return result.rows[0];
}
