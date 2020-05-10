// 变量名混淆
const code = `
let x = '1' + 1
console.log('hello', hello)
`
const options = {
    // compact: true,
    // identifierNamesGenerator: 'mangled'
    identifiersPrefix: 'germey'
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))