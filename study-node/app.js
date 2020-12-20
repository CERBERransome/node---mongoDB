//명 심:여기는 순서가 정말정말정말정말정말정말정말정말 중요하다
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
//여기에선 express나 morgan등등등을 import해서 쓸거다(babel이 설치가안되어 있으면 못쓴다)
const app = express()
const port = 8080;


const handleListening = () =>{
    console.log(`Listening on: http://localhost:${port}`);
    console.log(`Listening on profile: http://localhost:${port}/profile`);
}

const handleHome = (req, res) => {
    res.send("app Hello!")
}

const handleProfile = (req, res) => {
    res.send("Profile Hello!")
}


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//bodyParser은 옵션을 주어야하는데
//.json - form data가 json인경우
//.urlebcided - 일반적인 html form인 경우.....
//기본적으로 이런거다 이거 말고도 여러 가지 options들이 있는데
//뭐 나중에 알아보고
//지금은 이해가 안가더라도 일단 사용하고 나서 연습으로 그걸(body-parser) 지우면 어떤 영향을 주고 어떻게 도움을 주는지 볼수 있을거다 -nico-
//정 이해하고 싶고 하면(어쩌피 만들어 보고 한번 예네들 없애면 알건데) https://github.com/expressjs/body-parser#readme 여기에서 연습해라




app.use(morgan("dev"))
//margan 시작
//morgan은 이렇게 쓰고 속성이 5개가 있는데
//tiny - GET / 304 - - 3.577 ms
//short - ::1 - GET / HTTP/1.1 304 - - 4.321 ms
//dev - GET / 304 - - 3.577 ms(304부분이 파란색이다)
//common - ::1 - - [15/Dec/2020:09:14:12 +0000] "GET / HTTP/1.1" 304 -
//combined - ::1 - - [15/Dec/2020:09:14:43 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
//이렇게 변화가 있다
//이젠 언제 무슨방식으로 어떤 페이지를(현제 써있는건 / 이지만 /profile이 될수도 있음) 어떤 브라우저로 어떤 중류의 접속방식(?)(http, https) 어떤 브라우전지... 등등등을 logging할수 있다


app.use(helmet());
//helmet은 이렇게 적용하면 끝이다 간-단하다
//이로서 기초 보안도 완성되었다!
//그리고 이야기 안한건데
//middleware가 연결을 끊을수가 있다
// const middleware = (req, res, next) => {
//     res.send("not happing");
// }
//app.get("/", middleware, handleHome);
//이렇게 하면 handleHome과의 연결이 끊켜 버린다

app.get("/", handleHome);
app.get("/profile", handleProfile);

// Morgan - 로그를 남겨줌(margan 시작 파트에서)
// helmet - 기초보안담당함(helmet 시작 파트에서)
// cookieParser - 쿠키를 다룰 수 있음(cookieParser 시작 파트에서)
// bodyParser - form데이터를 서버로 받아와서 활용가능함.(bodyParser 시작 파트에서)

app.listen(port, handleListening);