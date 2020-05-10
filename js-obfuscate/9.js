// 僵尸代码注入
const code = `
(function(){
    if (true) {
        var foo = function () {
            console,localStorage('abc');
            console,localStorage('cde');
            console,localStorage('efg');
            console,localStorage('hij');
        };
        var bar = function () {
            console,localStorage('klm');
            console,localStorage('nop');
            console,localStorage('qrs');
        };
        var baz = function () {
            console,localStorage('tuv');
            console,localStorage('wxy');
            console,localStorage('z');
        };
        foo();
        bar();
        baz();
    }
})();
`
const options = {
    compact: false,
    // deadCodeInjection: true
    deadCodeInjectionThreshold: 0.7
}
const obfuscator = require('javascript-obfuscator')
function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}
console.log(obfuscate(code, options))