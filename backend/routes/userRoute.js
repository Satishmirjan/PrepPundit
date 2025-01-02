import express from "express";
import upload from "../middlewares/multer.js";
import authUser from "../middlewares/authUser.js";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

// userRouter.post('/register', upload.single('none'), registerUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getUser", authUser, getUser);

export default userRouter;
