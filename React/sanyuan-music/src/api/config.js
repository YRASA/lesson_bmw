/*
 * @Author: Zzceaon
 * @Date: 2020-07-23 11:17:39
 * @LastEditTime: 2020-07-23 12:15:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\api\config.js
 */ 
import axios from 'axios'

export const baseUrl = "http://localhost:8080"  // 全局后端api前缀
const axiosInstance = axios.create({
  baseURL: baseUrl
})

export { axiosInstance }