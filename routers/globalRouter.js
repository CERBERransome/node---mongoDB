import express from "express";
import { getJoin, getLogin, postLogin ,logout, postJoin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import router from "../routes";

const globalRouter = express.Router();

globalRouter.get(router.join, getJoin);
globalRouter.post(router.join, postJoin);

globalRouter.get(router.login, getLogin);
globalRouter.post(router.login, postLogin);

globalRouter.get(router.home, home);
globalRouter.get(router.search, search);
globalRouter.get(router.logout, logout);

export default globalRouter;
