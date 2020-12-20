import {videos} from "../db"
import routes from "../routes";

export const home =(req, res) => {
    res.render("home", {pageTitle:"Home", videos});
}

//와우 pug 여기 이렇게 send대신 render를 쓰면 된다 우리는 이미 app.set("view engine", "pug");를 해서 알아서 render가 views에 home인 pug파일을 찾아 띄운다
export const search =(req, res) => {
    const {query:{term : searchingBy}} = req;
    res.render("search", {pageTitle:"Search", searchingBy, videos});
    //이렇게 searchingBy에 req.query에 저장되어있는 term이란 값을 저장할수있다
    //그리고 이렇게 값을 불러올라면 꼭 form방식이 get이여야 한다
}

export const video = (req,res) => {
    res.render("video", {pageTitle:"Video"});
}

export const videoDetail = (req,res) => {
    res.render("videoDetail", {pageTitle:"Video Detail"});
}

export const getUpload = (req,res) => {
    res.render("upload", {pageTitle:"Upload"});
}

export const postUpload = (req,res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const editVideo = (req,res) => {
    res.render("editVideo", {pageTitle:"Edit Video"});
}

export const deleteVideo = (req,res) => {
    res.render("deleteVideo", {pageTitle:"Delete Video"});
}
