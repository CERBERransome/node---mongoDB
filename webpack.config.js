//일단 사용할려면 package.json에서 start를 dev:server로 바꿔준다
//그리고 여기에 쓰는 코드는 100% client를 위한 코드여야한다 그리고 여기에선 babel이 적용이 안되서 올래된 js를 써야한다
const path = require("path");

//이렇게 쓴는건 import와 같고 path는 node의 기본 라이브러리로 node에서 진짜 팡릴을 쓸수있게 해준다

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
//__dirname은 node의 기본 전역변수 인데 지금 프로젝트를 실행시키고 있는 파일을 의미한다
const OUTPUT_DIR = path.join(__dirname, "static")

const config = {
    //webpack은 두가지를 가직도 있는데 하나는 entry고 하나는 output이다
    //entry은 파일이 어디서 왔는지 를 의미하고
    //output은 그걸 어디에 넣을 것인가를 를 의미한다
    entry:ENTRY_FILE,
    output:{
        path:OUTPUT_DIR,
        name:"[name].[format]"
    }
}

module.export = config;
