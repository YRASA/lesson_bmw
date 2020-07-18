let str1 = 'english' let str2 = 'english' ...N
let str3 = 'flower' let str4 = 'flow' let str5 = 'dog'
let tree = {
    e: {n: {g: {l: {i: {s: {h: {'$': N}}}}}}}  // 代表english出现N次
    f: {l: {o: {w: {'$': 1, e: {r: {'$': 1}}}}}}   // flow出现一次 flower出现一次
}

- replace不会对原来的数据造成影响 => newData
- \w: 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
- \s代表一个空白字符（可能是空格、制表符、其他空白）

## 匹配位置
^
$
(?=p): 正向先行断言 p前
(?!p): 负向先行断言 p前非
<!-- es6 -->
(?!=p) p全
环视