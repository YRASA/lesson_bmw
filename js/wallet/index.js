// js es6 class 关键字
const UUID = require('uuid'); // 引入模块
class Wallet {
    // 属性和方法组成
    constructor() {
        // 构造函数里声明属性
        // console.log('欢迎使用支付宝钱包')
        // 唯一ID
        this._id = UUID.v1().replace(/-/g,""); // _变量 私有
        // console.log(this.id);
        this._createTime = + new Date(); // +:类型转换
        this._balance = 0; // 余额

    }
    getId() {
        return this._id;
    }
    setId() {
        throw new Error('私有属性_id不可修改');
    }
    getCreateTime() { // public
        return this._createTime;
    }
    getBalance() {
        return '余额:' + this._balance.toFixed(2) + '\n' + 'time:' + this._createTime;
    }
    increaseBalance(increaseAmount) {
        console.log('进账' + increaseAmount);
        this._balance += increaseAmount;
        this._createTime = new Date()
    }
    decreaseBalance(decreaseAmount) {
        console.log('消费' + decreaseAmount);
        this._balance -= decreaseAmount;
        this._createTime = new Date()
    }
}

const zcWallet = new Wallet(); // 实例化
// zcWallet._id = '123';
// console.log(zcWallet.id); // id是zcWallet的public属性
console.log('用户ID:' + zcWallet.getId());
// console.log(zcWallet.setId());
// console.log(zcWallet.getCreateTime());
// console.log(zcWallet.getBalance());
zcWallet.increaseBalance(100.0);
console.log(zcWallet.getBalance());
setTimeout(() => {
    zcWallet.decreaseBalance(7.8);
console.log(zcWallet.getBalance());
}, 60000);
setTimeout(() => {
    zcWallet.increaseBalance(15.0);
console.log(zcWallet.getBalance());
},120777);