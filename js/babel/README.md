cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
npx babel app.js --out-dir dist
presets: 插件集合
plugins: 插件
cnpm i @babel/plugin-proposal-decorators -D
cnpm i webpack webpack-cli webpack-dev-server babel-loader -D
npx webpack
cnpm i react react-dom -S
npx: 在node_modules找到命令, 没有找到则下载一个
cnpm i html-webpack-plugin -D