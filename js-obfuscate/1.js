// 代码混淆
const code = `
let x = '1' + 1
console.log('x', x)
`
const options = {
    compact: false, // 默认为true,进行压缩
    controlFlowFlattening: true
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))