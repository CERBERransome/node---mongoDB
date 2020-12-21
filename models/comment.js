import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:"Text is required"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    //comment를 달 video의 id를 가져오는 거다
    // video:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     //ObjectId를 불러오는데
    //     ref:"video"
    //     //model video에서 불러오는거다
    // }
    // //또다른 방법이 있는데 video.js에 Schema맨 마지막 값
});
const model = mongoose.model("comment", CommentSchema)
export default model;