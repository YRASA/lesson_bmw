function hongbao(total, num){
    let arr = [];
    let restAmount = total; //最后一个人拿剩下的钱
    //平均数
    let restNum = num;
    for(let i = 0; i < num - 1; i++){
        //随机算法
        let amount = total / num;
        arr.push(amount);
        restAmount -= amount;
    }
    arr.push(restAmount);
    return arr;
}

console.log(hongbao(5, 40));