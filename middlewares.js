import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "upload/videos/"})
//이렇게 쓰면된다 뜻은 더알아보기로....
//그리고
export const uploadVideo = multerVideo.single("videoFile");
//이렇게 export할수있고                    이거는 하나만 name이 file인겄을 export하겠단 뜻이다
//videoRouter.js로

















export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "NuTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:1
    }
    next();
}