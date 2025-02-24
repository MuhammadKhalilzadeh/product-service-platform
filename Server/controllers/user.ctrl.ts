import { Request, Response } from "express";
import { READ_REAL_DATA } from "../flags";
import {
  createNewMockUser,
  getAllMockUsers,
} from "../mock/utils/user.mock.util";
import User from "../models/user";
import {
  createUser,
  getAllUsers as getAllUsersFromDB,
  getUserByEmail,
} from "../utils/user.util";

export async function getAllUsers(req: Request, res: Response): Promise<any> {
  try {
    if (READ_REAL_DATA) {
      const users = await getAllUsersFromDB();
      res.status(200).json(users);
    } else {
      const users = getAllMockUsers();
      res.status(200).json(users);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNewUser(req: Request, res: Response) {
  try {
    const userFromReq: User = req.body;
    if (READ_REAL_DATA) {
      const anExistingUser = await getUserByEmail(userFromReq.email);

      if (anExistingUser) {
        res.status(409).json(anExistingUser);
      } else {
        const newUser = await createUser(userFromReq);

        res.status(200).json(newUser);
      }
    } else {
      const user = createNewMockUser(req.body as User);
      res.status(200).json(user);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
