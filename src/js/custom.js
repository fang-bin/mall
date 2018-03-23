const ZSAPP = {};
const u = navigator.userAgent;
const ua = navigator.userAgent.toLowerCase();

ZSAPP.isZhushou = (ua.match("zhushou browser")) ? true : false;
ZSAPP.isIos = (ua.match("iphone")) ? true : false;
ZSAPP.isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';
ZSAPP.hasCustomJS = typeof CustomJS !== "undefined" ? true : false;
ZSAPP.Error = function () {
    console.warn("CustomJS is undefined")
    isZhushou ? alert("调取方法时发生异常") : alert("请在保险助手中打开");
}
if (ZSAPP.isZhushou && ZSAPP.hasCustomJS){    //是否是在助手中打开
    const result = ZSAPP.GetUserInfo();
    if (!result.uid){   //未登录
        ZSAPP.JumpLogin();
    }else{
        ZSAPP.userInfo = result;  //已登录
    }
}
if (ZSAPP.isWeixin){     //是否是在微信中打开
    
}
//调起助手登录
ZSAPP.JumpLogin = function (cb) {
    if (!hasCustomJS) {
        ZSAPP.Error()
        return false;
    }
    window.zhuShouCallback = cb || function () { window.location.reload() };
    isIos ? CustomJS.showActivity('BXPhoneLoginViewController', '') : CustomJS.showActivity('LoginActivity', '');
}

//调起助手分享
ZSAPP.OpenShare = function (obj) {
    if (!hasCustomJS) {
        ZSAPP.Error()
        return false;
    };
    var def = {
        title: document.title,
        content: "【保险助手】保险代理人移动展业+快速增员+专业学习+同行交流，用这1个就够了",
        imgUrl: "http://s29.dev.bxd365.com/res/crowdsource/apph5/common/img/default-share.jpg",
        shortlink: window.location.href,
    }
    for (key in obj) {
        if (key) {
            def[key] = obj[key]
        }
    }
    CustomJS.share('{"title":"' + def.title + '","content": "' + def.content + '","imgUrl":"' + def.imgUrl + '","shortlink":"' + def.shortlink + '","platfrom":""}');
}
//跳转我的钱包
// ZSAPP.JumpWallet = function () {
//     if (!hasCustomJS) {
//         ZSAPP.Error()
//         return false;
//     }
//     isIos ? CustomJS.showActivity('BXPhoneLoginViewController', '') : CustomJS.showActivity('LoginActivity', '');
// }
//获取助手内用户信息
ZSAPP.GetUserInfo = function () {
    var result = {
        uid: "",
        password: "",
        phone: "",
        userData: {},
    };
    if (!hasCustomJS) return result
    try {
        var userinfo = JSON.parse(CustomJS.getUserInfo());
        result.password = userinfo.data.password || "";
        result.uid = userinfo.data.userid || "";
        result.userData = userinfo.data || {};
        result.phone = userinfo.data.phone || "";
        result.headImg = "https://pic3.zhimg.com/v2-3c0b45dde2e460aa5dad5600b0e371c0_xl.jpg";
    } catch (err) {
        console.log(err)
    }
    return result
}
//关闭当前webview
ZSAPP.CloseWebView = function () {
    if (!hasCustomJS) {
        ZSAPP.Error()
        return false;
    };
    CustomJS.closeCurrentPage();
}
//返回助手首页

//获取当前助手版本号
// ZSAPP.GetVersion = function () {
//     if (!hasCustomJS) return "";
//     return CustomJS.getVersion();
// }


// ZSAPP.SetTitle = function (title) {
//     if (!hasCustomJS) {
//         console.warn("CustomJS is undefined")
//         return false;
//     }
//     CustomJS.setTitle(title || window.document.title);
// }
// ZSAPP.OpenNewWebview = function (url) {
//     if (url == "") {
//         console.warn("url is empty")
//         return false;
//     }
//     if (!hasCustomJS) {
//         ZSAPP.Error()
//         return false;
//     }
//     CustomJS.openNewWebview(url);
// }
// ZSAPP.RefreshWebView = function () {
//     if (!hasCustomJS) {
//         ZSAPP.Error()
//         return false;
//     }
//     CustomJS.refreshWebView();
// }

export default ZSAPP;
