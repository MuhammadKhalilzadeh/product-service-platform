import express from "express";
import {
  createNewUser,
  getAllUsers,
  userLogin,
} from "../controllers/user.ctrl";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.post("/login", userLogin);

export default router;
