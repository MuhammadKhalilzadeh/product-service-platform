import User from "../models/user";
import UserModel from "../schemas/user.schema";
import { hashPassword } from "../tools/password.tools";

export async function getAllUsers() {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching users: ${error.message}`);
    } else {
      throw new Error("Error fetching users: Unknown error");
    }
  }
}

export async function getUserByEmail(email: string) {
  return await UserModel.findOne({ email });
}

export async function createUser(user: User) {
  if (!user.password) {
    throw new Error("Password is required to create a user");
  }
  const securedPassword = await hashPassword(user.password);
  const newUser = new UserModel({ ...user, passwordHash: securedPassword });
  await newUser.save();
  return newUser;
}
