// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout"
const SEARCH = "/search";

// Users
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/video"
const VIDEO_UPLOAD = "/upload";
const VIDEO_DETALE = "/:id";
const EDIT_VIDEO = "/:id/edit"
const DELET_VIDEO = "/:id/delete"


const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    user:USER,
    userDetail:(id) => {
        if(id){
            return `/user/${id}`
        } else{
            return USER_DETAIL
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    video:VIDEOS,
    videoDetail: (id) => {
        if (id) {
            return `/video/${id}`;
        } else {
            return VIDEO_DETALE;
        }
    },
    videoUpload:VIDEO_UPLOAD,
    editVideo: EDIT_VIDEO,
    deleteVideo:DELET_VIDEO
};

export default routes;
