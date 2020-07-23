/*
 * @Author: Zzceaon
 * @Date: 2020-07-23 11:08:09
 * @LastEditTime: 2020-07-23 11:38:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\api\request.js
 */ 
import { axiosInstance } from './config'

export const getRecommendListRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          id: 1,
          title: 'aaaaaa'
        }]
      })
    }, 1000)
  })
}

export const getBannerRequest = () => {
  return axiosInstance.get("/banner")
}