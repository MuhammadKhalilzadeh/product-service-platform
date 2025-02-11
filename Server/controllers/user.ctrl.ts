import { Request, Response } from "express";
import { READ_REAL_DATA } from "../flags";

export async function getAllUsers(req: Request, res: Response): Promise<any> {
  try {
    if (READ_REAL_DATA) {
    } else {
    }
  } catch (error) {}
}
