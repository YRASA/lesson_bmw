// 对象键名替换
const code = `
(function(){
    var object = {
        foo: 'test',
        bar: {
            baz: 'test2'
        }
    };
})();
`
const options = {
    compact: false,
    transformObjectKeys: true
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))