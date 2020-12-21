import express from "express";
import { changePassword, editProfile, user, userDetail } from "../controllers/userController";
import router from "../routes";

const userRouter = express.Router();

userRouter.get(router.user, user);
userRouter.get(router.editProfile, editProfile);
userRouter.get(router.userDetail(), userDetail);
userRouter.get(router.changePassword, changePassword);

export default userRouter