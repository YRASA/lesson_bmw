/*
 * @Author: Zzceaon
 * @Date: 2020-07-23 11:08:09
 * @LastEditTime: 2020-07-28 11:25:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\api\request.js
 */ 
import { axiosInstance } from './config'

// 项目所有请求API列表文件
// 每一个请求函数
// 每个函数都是返回一个promise

// api 与actions的分离点
// axiosInstance.get 返回是Promise

// 首页广告
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 歌手列表 分页 0 - 50 - 100
// reducer init = {singerList: [], offset: 0}
// useEffect dispatch getHotSingerList -> getHotSingerListRequest API 请求
//   then
//     changeSingerList [] [...oldSingerList..., data] 同步
//     changeOffset 0 data.length 同步

//     better-scroll baseUI scroll/index.js 上拉触底加载更多

// 下拉刷新过程
// onPullDown offset 0 changeOffset 0
// getHotSingerList -> getHotSingerListRequest(API) -> changeSingerList

// 前后端合作的要素:
// 1.接口地址
//   url /top/artists 请求 restful 资源暴露
// 2.传参
// 3.接口文档 后端

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

// history.push() Link
export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const sentVcodeRequest = phone => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
  return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};