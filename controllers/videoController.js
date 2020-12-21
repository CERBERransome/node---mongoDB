import routes from "../routes";


//model을 사용할려면 일단 import를 하고
//아 그리고 이건 DB의 element가 아니고 이건 단지 model이다 완-전 다른거다 element를 받는 통로일 뿐이지 elerment자체는 아니다
import Video from "../models/video"
//사용방법은
export const home = async (req, res) => {
    //개념정리 async는 이 함수내에서 뭔가 기달려야 할게 있다는거 알려주는거고
    try{
        const videos = await Video.find({});
        //await은 이 작업이 끝나면 이 작업의 결과를 return해주는거다(작업이 성공적이든 아니든 끝나면 그냥 render바로 실행 그래서 try쓰겟음)
        console.log(videos);
        //그리고 여기서 콘솔로그 하니까 node창에서 띄워지네 (╯°□°）╯︵ ┻━┻)
        res.render("home", {pageTitle:"Home", videos});
    } catch(error){
        console.log(`❌ 👨🏼‍💻 Error:${error}`)
        res.render("home", {pageTitle:"Home", videos:[]});
    }
}
//이렇게 사용하면 된다(find가 뭔지 ㅁㄹ겠음)
//이러면 err는 안나지만 아무 video도 화면에 안뜰겄이다 왜냐하면 현재 videos는 빈 array이기 떄문이다 아직 생성도니 video가 없으니

export const search =(req, res) => {
    const {query:{term : searchingBy}} = req;
    res.render("search", {pageTitle:"Search", searchingBy, videos});
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
    res.redirect(routes.videoDetail(324393));
};

export const editVideo = (req,res) => {
    res.render("editVideo", {pageTitle:"Edit Video"});
}

export const deleteVideo = (req,res) => {
    res.render("deleteVideo", {pageTitle:"Delete Video"});
}
