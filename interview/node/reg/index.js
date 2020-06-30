/*
 * @Author: Zzceaon
 * @Date: 2020-06-30 22:32:25
 * @LastEditTime: 2020-06-30 22:50:01
 * @LastEditors: Please set LastEditors
 * @Description: 正则解析url
 * @FilePath: \Course\interview\node\reg\index.js
 */ 
const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node";
function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1, url.lastIndexOf("#"));
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function(rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
console.log(getQueryObject(urlString));