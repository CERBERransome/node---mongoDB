//아! 하기전에 mongodb를 쓸라면 mongod가 켜져있어야하는데 확인법은 mongod가 켜져있으면 mongo를 했을떄 정상적으로 뜬다

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

mongoose.connect(
    // "mongodb://localhost:27017/nu-tube",
    process.env.MONGO_URL,
    {
    useNewUrlParser: true,
    useFindAndModify: false
    //그냥 moongoose쓰면 써라
    }
);

//mongoose와 connection한뒤
const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);
db.once("open", handleOpen);
//한번만 실해되는건데 만약 DB가 문제없이 open되면 handleOpen을 실행하는거고
db.on("error", handleError);
//에러가나면 handleError을 실행하는겄이다
//이게 되는이유는 videoController에서 db에 connet하고 있기 떄문인데 이 import를 이제 init에 옴길거다 init으로(☞ﾟヮﾟ)☞


//자돌아와서 이제 왜 dotenv를 설치했는지 궁금해질겄이다 왜 dotenv를 설치 했냐면  가끔 내가 어떤 부분을 숨겨놓고 싶을수있기 때문이다
//만약 이게 localhost가아니고 공개된 사이트면 사람들이 중요한 db를 염탐할수있기 떄문이다
//dotenv를 구성할거다 dotenv를 구성하기 위해 처음으로 해야할건 db.js가 있는 파일에 .env라는 파일을 만드는거다
//.env파일로 고고씽
//이렇게 한다음 dotenv을 import하고 dotenv.config를 한뒤 mongoose.connect에 "mongodb://localhost:27017/nu-tube"대신 process.env.정보를 담은 var이름 을 하면된다
//이렇게 key를 숨길수있는데 여기서 중요한건 꼭 .gitgnore파일에 .env를 추가해주어야한다