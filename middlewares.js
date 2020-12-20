import routes from "./routes";

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "NuTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:1
    }
    next();
}
//이렇게 local.valName으로 전역변수를 선언할수있다 이러면 pug파일에서 #{}을 해서 이 siteName을 불러올수있다
//당연히 app.use(router.home, globalRouter);하기 전에 app.use(ocalMiddleware)을 해야한다