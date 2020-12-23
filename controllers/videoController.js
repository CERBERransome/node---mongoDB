import routes from "../routes";


//model을 사용할려면 일단 import를 하고
//아 그리고 이건 DB의 element가 아니고 이건 단지 model이다 완-전 다른거다 element를 받는 통로일 뿐이지 elerment자체는 아니다
import Video from "../models/video"
//사용방법은
export const home = async (req, res) => {
    //개념정리 async는 이 함수내에서 뭔가 기달려야 할게 있다는거 알려주는거고
    try{
        const videos = await Video.find({}).sort({_id:-1});
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

export const videoDetail = async (req,res) => {
    // console.log(req.params)
    //rout.js에 VIDEO_DETAIL에 /:id를 면시해놓아서 params를 하면자동으로 id의 값을 불러온다 ex.{ id: '5fe163900c5d572fd0098ac6' }
    const { params:{id} } = req;
    try{   
    const video = await Video.findById(id);
    //                  Video는 model 이다
    //연재 findById는 Video안에있는 id란 obj를 가져오겠단 것이다
    console.log(video)
    res.render("videoDetail", {pageTitle:video.title, video});
    }catch(err){
        console.log(`❌ Error:${err}`)
        res.redirect(routes.home);
    }
}

export const getUpload = (req,res) => {
    res.render("upload", {pageTitle:"Upload"});
}
//수정가니까 똑디 봐라
// export const postUpload = (req,res) => {
//     const {
//         body: { file, title, description }
//     } = req;
//     console.dir(file, title, description)
//     //여기에서 중요한건 우리는 file name원하는게아니라 file url을 원한다 중요하다
//      res.render("upload", {pageTitle:"Upload"});
// };
//수정가니까 똑디 봐라


//multer.ver
export const postUpload = async (req,res) => {
    const {
        body: { title, description },
        file: { path }
    }
    = req;
    //보면 file에 path라는 게있다 이게 우리가 원하던거다!!
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id));
    //자 됬다! 너무이쁘다 id 연결 파일 너무이쁘다
};
//파일을 업로드하고 submit을하니 video란 폴더가 생기고 이상한 파일이 생겼다

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        //              의문을 가져라(mongoose에서 봐라)
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};


export const deleteVideo = async (req,res) => {
    const {
        params: { id }
    } = req;
    try{
        await Video.findOneAndRemove({_id : id})
        //            이 id를 찾고 id를 삭제시킨다
    } catch(err){
        console.log(`❌ Error: ${err}`);
    }
    res.redirect(routes.home);
}
