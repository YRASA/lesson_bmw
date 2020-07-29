npm init -y
npm install @babel/core @babel/cli
npm install @babel/preset-env (高转低的包)

"babel": {
    "presets": ["@babel/presets-env"]
}
现在可以直接babel
优先查询.babelrc, 再到package.json(只能存在一个, 不然会报错)