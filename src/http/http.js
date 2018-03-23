import axios from 'axios';
import qs from 'qs';
// import ZSAPP from '../common/js/custom'
import ZSAPP from '../js/custom'

axios.interceptors.request.use(config => {

    const _params = {
        u_id: ZSAPP.userInfo.uid,
        password: ZSAPP.userInfo.password,
        phone: ZSAPP.userInfo.phone
    }

    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.method === 'post') {   //将参数序列化 
        let data = qs.parse(config.data);
        config.data = qs.stringify({
            ..._params,
            ...data
        })
    }
    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

export default axios;