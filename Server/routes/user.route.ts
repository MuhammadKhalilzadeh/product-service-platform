import express from "express";
import { createNewUser, getAllUsers } from "../controllers/user.ctrl";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);

export default router;
