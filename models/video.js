import mongoose from "mongoose";

//Schema는 어 이예기를 하기전에 DB는 JSON형태를 잘다룰수있게 해준다 그래서 mongodb를 쓰는데 JSON이 막 할순없으니 모델에 들어갈 Obj의 키 그 Obj의 값 혹은 뭔가가 없으면띄울 어레메세지 같은겄을 Schema에서 구성하는거다
const VideoSchema = new mongoose.Schema({
    fileUrl:{
        //fileUrl이라는 Obj의 키
        type: String,
        //그거의 type
        required: "File Url is required"
        //없는 Url의 VIdeo를 생성하려 한다면 이 error msg를 받는다
    },
    title:{
        type:String,
        required: "Title is required"
    },
    description: String,    
    views:{
        type:Number,
        default:0
        //여기에선 views가 기본으로 0로 설정되게 해놨다
    },
    createdAt:{
        type:Date,
        default:Date.now
        //default는 Date라는 Promise의 함수중 now(지금)의 시각을 default로 설정하는 겄이다
    },
    //comment.js시청후 오세요
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            //ObjectId를 불러오는데
            ref:"comment"
            //model comment에서 불러오는거다
    }]
    //이렇게 봤다 이제 두가지 선택지가 있다
    //1.모든 Comment ID들을 array로 video에 집어넣을 것인가
    //아니면
    //2.Comment에 연결된 Video ID를 줄 것인가 이다
});


const model = mongoose.model("video", VideoSchema);
//저 위에있는 Schema를 통해 모델을 만들었다
export default model;

//videoController.js로 -> -> ->