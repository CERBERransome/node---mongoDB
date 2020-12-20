import express from "express";
import { changePassword, editProfile, user, userDetail } from "../controllers/userController";
import router from "../routes";

const userRouter = express.Router();

userRouter.get(router.user, user);
userRouter.get(router.editProfile, editProfile);
userRouter.get(router.userDetail(), userDetail);
userRouter.get(router.changePassword, changePassword);

export default userRouter
// ## **Module & Router [ 2.8 ]** (복습용)
// ES 6 모듈 사용법
// export default app; → import app from "./app";
// export const 변수명; → import { 변수명 } from "./파일명";
// Router
// express.Router();
// 라우트를 카테고리별로 쪼개서 묶을 수 있음.
// 그럼 주소가 /user/~~~ /video/ ~~~ 이런식으로 나뉠 수 있음.