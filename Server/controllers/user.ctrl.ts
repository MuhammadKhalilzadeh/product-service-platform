import { Request, Response } from "express";
import { READ_REAL_DATA } from "../flags";
import { getAllMockUsers } from "../mock/utils/user.mock.util";

export async function getAllUsers(req: Request, res: Response): Promise<any> {
  try {
    if (READ_REAL_DATA) {
    } else {
      const users = getAllMockUsers();
      res.status(200).json(users);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
