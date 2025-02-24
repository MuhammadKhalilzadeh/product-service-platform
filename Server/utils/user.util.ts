import User from "../models/user";
import UserModel from "../schemas/user.schema";

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
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      throw new Error(`User with email ${email} not found`);
    }
    return existingUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user by email: ${error.message}`);
    } else {
      throw new Error("Error fetching user by email: Unknown error");
    }
  }
}
