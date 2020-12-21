import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, video, videoDetail, videoUpload } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import router from "../routes";

const videoRouter = express.Router();

videoRouter.get(router.video, video);

videoRouter.get(router.videoUpload, getUpload);
videoRouter.post(router.videoUpload, uploadVideo ,postUpload);
//이렇게 uploadVideo(multer)를 middleware로 꼿아주자
//videoController.js로

videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);
videoRouter.get(router.videoDetail(), videoDetail);

export default videoRouter;
