// 字符串混淆
const code = `
var a = 'hello world'
`
const options = {
    // stringArray: false,
    // rotateStringArray: true,
    // stringArrayEncoding: true,
    // stringArrayThreshold: 1
    compact: false,
    unicodeEscapeSequence: true
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))
