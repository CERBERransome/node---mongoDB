import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle:"Join"})
};

export const postJoin = (req, res) => {
    // console.log(req.body);
    //이렇게 보면 form으로 전송받은 대이터가 뜬다!!!!!!!!!!!!! wowowowowoowwoo 이게 bodyPaser의 힘이고 하는 일이다 bodyPaser가 없으면 안된다
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        //이뜻은 만약 password와 password2가 다르다면 status code 400(Bad resquset)를 return하라는 뜻이다 그래서 이렇게 작성하면 둘이 맞으면 chroom이 비밀번호를 저장할거냐고 묻고 400이 들어오면 chroom이
        //잘못된 req인 걸알고 안물어본다
        res.render("join", {pageTitle:"Join"})
    } else{
        //TODO: register User
        //TODO: login
        res.redirect(routes.home)
        //password !== password2하지 않으면 main으로 이동
    }
};


// - Search 페이지 만들기 (헤더 + 비디오블록적용)
// - Join(회원가입부분) get과, post 방식 쪼개서 처리, bodyParser의 필요성 확인!
// - userController에서 post처리부분에서 비밀번호&비번확인 대조하는 작업 처리.


export const getLogin = (req, res) => {res.render("login", {
    pageTitle:"Login"
})};

export const postLogin = (req, res) => {
    res.redirect(routes.home)
}


export const logout = (req, res) => {
    //TODO: Process log out
    res.redirect(routes.home)
};
export const user = (req, res) => {res.render("user", {
    pageTitle:"User"
})};
export const userDetail = (req, res) => {res.render("userDetail", {
    pageTitle:"User Detail"
})};
export const editProfile = (req, res) => {res.render("editProfile", {
    pageTitle:"Edit Profile"
})};
export const changePassword = (req, res) => {res.render("changePassword", {
    pageTitle:"Change password"
})};