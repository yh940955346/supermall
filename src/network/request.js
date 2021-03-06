import axios from "axios"

export default function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL : "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });
  // 2. 拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {

  });
  // 2.2 响应拦截
  instance.interceptors.response.use((res) => {
    return res.data
  }, (err) => {

  });
  // 3. 发送请求
  return instance(config)
}
