// 代码自我保护
const code = `
var a = 'hello world'
`
const options = {
    selfDefending: true
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))