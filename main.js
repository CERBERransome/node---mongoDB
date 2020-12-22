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
const app = express()

app.use(helmet());
app.set("view engine", "pug");
app.use("/upload", express.static("upload/"))
//                 이거는 directory에서 file을 보내주는 middleware다
//이렇게 하니 video가 정상 작동한다
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"))

app.use(localMiddleware)

app.use(router.home, globalRouter);

app.use(router.user, userRouter);
app.use(router.video, videoRouter);


export default app;
