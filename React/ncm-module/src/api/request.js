/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 23:16:11
 * @LastEditTime: 2020-08-05 18:48:07
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
export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`)
}
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`)
}