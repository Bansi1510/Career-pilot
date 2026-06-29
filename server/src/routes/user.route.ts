import express from "express";
import {
  createUser,
  verifyOtp,
  login,
  updateUser,
  logout,
  resendOtp,
  googleAuth,
} from "../controller/user.controller";
import auth from "../middleware/auth";


const UserRouter = express.Router();

// Public Routes
UserRouter.post("/signup", createUser);
UserRouter.post("/auth/google", googleAuth);
UserRouter.post("/verify-otp", verifyOtp);
UserRouter.post("/re-otp", resendOtp);
UserRouter.post("/login", login);

// Protected Routes
UserRouter.put("/update", auth, updateUser);
UserRouter.post("/logout", auth, logout);

export default UserRouter;