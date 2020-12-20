import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, video, videoDetail, videoUpload } from "../controllers/videoController";
import router from "../routes";

const videoRouter = express.Router();

videoRouter.get(router.video, video);

videoRouter.get(router.videoUpload, getUpload);
videoRouter.post(router.videoUpload, postUpload);

videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);
videoRouter.get(router.videoDetail(), videoDetail);

// M : data(DB)
// V : how does the data look(template)
// C : function that looks for the data
//뭐 그냥 기억만 해둬라

export default videoRouter;
