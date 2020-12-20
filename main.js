//*************** import ***************
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./middlewares";
import router from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
//*************** import ***************
const app = express()

app.set("view engine", "pug");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"))

app.use(localMiddleware)

app.use(router.home, globalRouter);

app.use(router.user, userRouter);
//이렇게하면 /user/password, /user/edit, user등이 생길수 있다(use로 꼭 왜냐면 누군가가 /user에 접속하면 userRouter전체를 쓰겠단 의미다) magic
app.use(router.video, videoRouter);


export default app;