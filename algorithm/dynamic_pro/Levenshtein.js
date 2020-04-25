var a = "mitcmu"
var b = "mtacnu"
// 长度
var n = 6, m = 6;
// 莱文斯坦距离
// (-)Infinity (负)无穷大
var minDist = Infinity;
function lwstBT(i, j, edist) {
    if (i == n || j == m) {
        if(i < n) edist += (n - i);
        if(j < m) edist += (m - j);
        if(edist < minDist) minDist = edist;
        return;
    }
    if(a[i] == b[j]) {
        lwstBT(i+1, j+1, edist)
    }
    else {
        lwstBT(i+1, j, edist+1); // 删除a[i]或在b[j]前添加一个字符
        lwstBT(i, j+1, edist+1); // 删除b[j]或在a[i]前添加一个字符
        lwstBT(i+1, j+1, edist+1); // 替换为相同字符
    }
}
lwstBT(0, 0, 0);
console.log(minDist);
