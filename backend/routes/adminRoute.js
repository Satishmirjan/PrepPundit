import express from "express";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { loginAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);

export default adminRouter;
