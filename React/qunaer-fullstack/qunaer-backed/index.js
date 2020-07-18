/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 10:52:45
 * @LastEditTime: 2020-07-17 11:13:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\qunaer-fullstack\qunaer-backed\index.js
 */ 
const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();
apiMocker(app, path.resolve('./mocker/mocker.js'));
app.listen(1314);