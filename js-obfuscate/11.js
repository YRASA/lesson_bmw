// 禁用控制台输出
const code = `
console.log('hello world')
`
const options = {
    diableConsoleOutput: true
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))