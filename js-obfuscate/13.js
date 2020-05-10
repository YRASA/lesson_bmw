// 域名锁定
const code = `
let x = 'JavaScript Obfuscator'
console.log(x)
`
const options = {
    domainLock: ['https://www.baidu.com/']
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))