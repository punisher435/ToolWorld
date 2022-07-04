const Server1="https://www.qiplayaltar.net";

export default {
    signup:`${Server1}/api/register`,
    login:`${Server1}/api/login`,
    getuser:`${Server1}/api/user`,
    courses:`${Server1}/api/course`,
    get_course:`${Server1}/api/course/`,
    updateMin:`${Server1}/api/user/video-min`,
    profileUpdate:`${Server1}/api/user/profile`,
    updateFav:`${Server1}/api/user/favorite/course-video/`,
    fav:`${Server1}/api/user/favorite/course-video`,
    payments:`${Server1}/api/payment-by-course`,
    getMessages:`${Server1}/api/user/message`,
    sendMessages:`${Server1}/api/user/message`,
    sendotp:`${Server1}/api/otp/send`,
    resendotp:`${Server1}/api/otp/re-send`,
    verifyotp:`${Server1}/api/otp/verify-otp`,
    forgetpassword:`${Server1}/api/forgot-password`,
}