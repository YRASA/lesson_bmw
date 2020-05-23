// BFS: 顺序(F C E A D H G B M)
// DFS: 前序(root left right) 中序(left right root) 后序(left right root)
let tree = {
    val: 'F',
    left: {
        val: 'C',
        left: {
            val: 'A'
        },
        right: {
            val: 'D'
        }
    },
    right: {
        val: 'E'
    }
}
tree.left.left