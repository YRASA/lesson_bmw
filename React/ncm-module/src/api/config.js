/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 23:10:05
 * @LastEditTime: 2020-08-01 23:13:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\api\config.js
 */ 
import axios from 'axios'

export const baseUrl = "http://localhost:8080"

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误")
  }
)

export {
  axiosInstance
}