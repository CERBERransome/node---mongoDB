//명 심:여기는 순서가 정말정말정말정말정말정말정말정말 중요하다

const express = require('express')
//require가 하는일은 node modle을 어딘가에서 가져오는 거다 여기선 node modle에 express를 찾는거다
const app = express()
//그리고 express를 app이란 상수에서 실행시킨거다
const port = 8080;


const handleListening = () =>{
    console.log(`Listening on: http://localhost:${port}`);
    console.log(`Listening on profile: http://localhost:${port}/profile`);
}

const handleHome = (req, res) => {
    // console.log(req);
    res.send("index Hello!")
}

const handleProfile = (req, res) => {
    res.send("Profile Hello!")
}

const betweenHome = (req, res, next) => {
    console.log("im between");
    next();
};

// app.get("/", handleHome);
//get은 post와 함께 data를 전달하는 방법인데 중요한 예로 유저 정보 같은 겄들은 get으로 전달하면 위험하다 이 경우에는 /라는 페이지(localhost:8080/)즉 기본페이지에 누군가 접속하면 정보를 여기 터미널에
//handleHome을 출력하는거다 그런데 중요한건 여기엔 응답하는 코드가 없으면 무언가를 응답하는 코드가 있어야한다 응답하는 방법은 handleHome은 두개의 인자를 받고 (req(requst)와 res(respones))를 res.send("Hello")를 하면
//send에 적은 값이 응답하는 값이된다
//그럼 화면에 Cannot GET/ 이 아니라 응답한 값이 생긴다 예제

app.use(betweenHome);

app.get("/", handleHome);//betweenHome, handleHome);
//betweenHome이 새롭게 들어갔는데 이 betweenHome은 middleware이다
//여기에서 betweenHome은 handleHome에게 실행할지 말지를
//알려줄수 있다 그렇게 권한을 주거나 말거나할려면
//betweenHome엔 req,res,next 라는 인자가 필요한데
//모~든 express의 route나 그런 connenction을 다루는건
//req,res,next가 있다
//그리고 모든 middleware은 next()을 보통한다 next()를 하면 다음 함수가 정상적으로 실행되고
//next();가 없으면 다음 함수가 실행되지 않는다
//그리고 next()를 안쓰는데 middleware에 send함수가없으면 계속 페이지가 로딩된다(middleware은 원하는 만큼 가질수 있다)
//그리고 찐막으로 이렇게 하면 betweenHome이라는 middle ware가
//localhost:8080에만 적용되는데 localhost:8080/profile에도 적용시키고 싶으면 그냥 여기선 app.use(betweenHome)이라고 쓰면 모든 app.get에 middleware로 betweenHome이 적용된다

app.get("/profile", handleProfile);
//localhost:8080/profile에 접속하면 Profile Hello!가 뜨게된다
//그리고 진정한 웹사이트 처럼보일라면 그냥 text를 send하는게 아닌 완전한 html css파일을 send해주어야 한다 방법은 나중에 쉿!

app.listen(port, handleListening);
//서버를 8080번 포트에서 연다는 뜻이다(localhost:8080) 그리고 이다음에 있는 변수(함수)가 들어간건은 이 서버가 호스팅이 되었을떄(시작할떄) 하는 동작이다 예로 handleListening이 console.log("Listening in port 8080")면
//서버를 열때(node index.js) 터미널(vsc)에서 Listening in port 8080가 출력된다

//그리고 매번 node index.js이런 식으로 열기 싫으면 아 그리고 앞으로 package.json을 중앙기지 처럼 쓸거다 다시 돌아와서 node index.js이런 식으로 열기 싫으면 package.json에 "scripts"라는 entry를 만들어주고
//그안에 "start"를 만들고 그 값을 "node 파일이름" 하면된다 그럼 그냥 npm start라고 터미널에 치기만하면 설정한 파일이 node로 바로 실행된다(babel사용 할려고 babel-node index.json으로 바뀌었음)
//(또 nodemon도 사용할려고 nodemon --exec babel-node index.js로 바뀌었음)(또 파일 두번실행 문제 때문에 nodemon --exec babel-node index.js --delay 2로 바뀌었음)


//여기 에서 app.js로 이전했음