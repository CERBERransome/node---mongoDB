import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, video, videoDetail, videoUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";
import router from "../routes";

const videoRouter = express.Router();

// console.log(routes.editVideo)
// console.log(routes.editVideo())

videoRouter.get(router.video, video);

videoRouter.get(router.videoUpload, getUpload);
videoRouter.post(router.videoUpload, uploadVideo ,postUpload);
//이렇게 uploadVideo(multer)를 middleware로 꼿아주자
//videoController.js로

videoRouter.get(router.editVideo(), getEditVideo);
videoRouter.post(router.editVideo(), postEditVideo);
videoRouter.get(router.deleteVideo(), deleteVideo);
videoRouter.get(router.videoDetail(), videoDetail);

export default videoRouter;
