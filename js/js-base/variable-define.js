// var没有块级变量
// 块:独立的块 => {}
// function () {

// }
// 如果有块级变量 => a只在{}里生效
{
    var a = 123;
    let b = 123;
    b = function() {};
    console.log(b);
    // const d = true;
    // d = false;
    const PI = 3.1415926;
    
}
console.log(a);
console.log(b);