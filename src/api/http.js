import axios from 'axios';
import { Toast } from 'vant';

// create an axios instance
const service = axios.create({
   // baseURL: process.env.baseUrl, // api的base_url
  baseURL: '', // api的base_url
  timeout: 2 * 60 * 1000, // request timeout
});

// toast
let toast = null;
let loaderCount = 0;

// request interceptor
service.interceptors.request.use((config) => {
  // 全局控制loader
  // alert(config.showLoader)
if(config.headers.showLoader) {
  loaderCount += 1;
  toast = Toast.loading({
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner',
  });
}
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    loaderCount = loaderCount - 1 <= 0 ? 0 : loaderCount - 1;
    loaderCount === 0 && toast && toast.clear();
    const res = response.data;
    if (res.code !== 0 && res.code !== 1) {
      return Promise.reject(res.msg);
    }
    if (res.code === 0 || res.code === 1) {
      return response;
    }
  },
  (error) => {
    loaderCount = loaderCount - 1 <= 0 ? 0 : loaderCount - 1;
    loaderCount === 0 && toast && toast.clear();
    return Promise.reject(error);
  },
);

export default service;
