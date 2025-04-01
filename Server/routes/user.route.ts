import express, { Router } from "express";
import {
  DeleteUser,
  ForgotPassword,
  GetAllUsers,
  GetUserById,
  LoginUser,
  RegisterUser,
  ResetPassword,
  UpdateUser,
} from "../controllers/user.ctrl";
const router: Router = express.Router();

router.post("/register", RegisterUser as express.RequestHandler);
router.post("/login", LoginUser as express.RequestHandler);
router.post("/forgot-password", ForgotPassword as express.RequestHandler);
router.post("/reset-password", ResetPassword as express.RequestHandler);
router.post("/verify-email");
router.post("/resend-verification-email");
router.post("/logout");
router.post("/set-new-password");
router.post("/successful-pass-change");

router.get("/", GetAllUsers as express.RequestHandler);
router.get("/:id", GetUserById as express.RequestHandler);
router.patch("/:id", UpdateUser as express.RequestHandler);
router.delete("/:id", DeleteUser as express.RequestHandler);

export default router;
