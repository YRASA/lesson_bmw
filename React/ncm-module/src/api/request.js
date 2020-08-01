/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 23:16:11
 * @LastEditTime: 2020-08-01 23:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\api\request.js
 */ 
import { axiosInstance } from './config'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized')
}