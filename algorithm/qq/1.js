// js中整数和浮点数都为Number类型
let arr =[];
let nums = '631758924';
// console.log(typeof nums);
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2); //slice
nums += c;
// while 规律
console.log(nums, arr);
// 1.第一位删除
// 2.第二位移动到最后
