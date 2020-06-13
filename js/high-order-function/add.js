// 不同的地方: 传参
function buildUrl(url, obj) {
  // 拼接逻辑
  // 内部逻辑公用
}
// 数据不一样
buildUrl('http://localhost', { search: 'Aimer' })
buildUrl('http://api.com/v1', { search: 'Aimer' })
// 1.不同
// 2.公用