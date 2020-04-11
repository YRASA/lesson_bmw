##类型

##基本数据(基础)类型
Null
Undefined
String
Number
Bool
##复杂数据(引用)类型
Object
    array
    function
    reg(正则)

运行时决定变量类型
var a = 123
var b = []
function c() {}
var d = {a:1, b:2} // 对象字面量
var e = /[0-9]/
var f = Date.now()

##定义变量的关键词
var(es5)
块级变量:
const(es6):可变的(更完美的var)
let(es6):不可变的

## ==
值是否相等,会进行类型转换
## ===
值是否相等,不会进行类型转换

##盒模型
content-box(标准盒模型)
width/height:content区域
border-box(怪异盒模型)
width/height:border及以内区域
IE