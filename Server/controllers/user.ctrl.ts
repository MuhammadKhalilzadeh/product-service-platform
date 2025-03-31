import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  CreateOneUserPg,
  DeleteOneUserPg,
  GetAllUsersPg,
  GetUserByEmailPg,
  GetUserByIdPg,
  UpdateUserPg,
} from "../utils/pg/user.pg.util";
import User from "../models/user/index";
import path from "path";
import fs from "fs/promises";
import mjml2html from "mjml";
import { generateJWT } from "../tools/jwt.proc";

const DB_FLAG = "pg";

export async function GetAllUsers(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    const users = await GetAllUsersPg();
    res.json(users);
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function RegisterUser(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    const { firstName, lastName, email, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);

    const existingUser = await GetUserByEmailPg(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await CreateOneUserPg({
      firstName,
      lastName,
      email,
      passwordHash: password_hash,
    });

    res.status(201).json(user);
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function DeleteUser(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    const { id } = req.params;
    const user = await DeleteOneUserPg(id);
    res.json(user);
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function GetUserById(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    const { id } = req.params;
    const user = await GetUserByIdPg(id);
    res.json(user);
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function UpdateUser(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    try {
      const { id } = req.params;
      const updateFields = req.body;

      // Get the current user first
      const existingUser = await GetUserByIdPg(id);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Create an update object with only the fields that were provided
      const updateData: Partial<User> = {};

      // Only add fields that were actually sent in the request
      if ("firstName" in updateFields)
        updateData.firstName = updateFields.firstName;
      if ("lastName" in updateFields)
        updateData.lastName = updateFields.lastName;
      if ("email" in updateFields) {
        // If email is being updated, check if it's not already taken
        if (updateFields.email !== existingUser.email) {
          const emailExists = await GetUserByEmailPg(updateFields.email);
          if (emailExists) {
            return res.status(400).json({ error: "Email already in use" });
          }
        }
        updateData.email = updateFields.email;
      }
      if ("phoneNumber" in updateFields)
        updateData.phoneNumber = updateFields.phoneNumber;
      if ("bio" in updateFields) updateData.bio = updateFields.bio;
      if ("languagePreference" in updateFields)
        updateData.languagePreference = updateFields.languagePreference;
      if ("timezone" in updateFields)
        updateData.timezone = updateFields.timezone;

      // Add updatedAt timestamp
      updateData.updatedAt = new Date();

      // You'll need to create this function in your pg utils
      const updatedUser = await UpdateUserPg(id, updateData);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function LoginUser(req: Request, res: Response) {
  if (DB_FLAG === "pg") {
    try {
      const { email, password } = req.body;

      // Check if email and password are provided
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      const user = await GetUserByEmailPg(email);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Add null check for passwordHash
      if (!user.passwordhash) {
        return res.status(500).json({ error: "User password hash not found" });
      }

      const passwordMatch = await bcrypt.compare(password, user.passwordhash);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      res.status(202).json(user);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(500).json({ error: "Database flag not set" });
  }
}

export async function ForgotPassword(req: Request, res: Response) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const user = await GetUserByEmailPg(email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    const templatePath = path.join(
      __dirname,
      "../template/reset-password.mjml"
    );

    const token = generateJWT({ email: user.email }) as string;
    const link = `${req.protocol}://${req.hostname}:${
      process.env.FRONTEND_PORT
    }/set-new-password?${new URLSearchParams({ token }).toString()}`;
    const data = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      link,
    };

    // await sendEmail(data, templatePath);
  } catch (error) {}
}

export async function ResetPassword(req: Request, res: Response) {}
