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
