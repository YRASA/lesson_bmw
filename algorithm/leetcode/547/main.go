/*
 * @Author: Zzceaon
 * @Date: 2020-07-10 10:00:41
 * @LastEditTime: 2020-07-10 10:29:02
 * @LastEditors: Please set LastEditors
 * @Description: leetcode 547 朋友圈
 * @FilePath: \Course\algorithm\leetcode\547\main.go
 */ 
// GO 语言 表达二维数组?
package main

import "fmt"

func findCircleNum(M [][]int) int {
	N := len(M)
	fmt.Printf("数组长度: %d\n", N)
	res := N  // 最多有多少个朋友圈...
	// N--
	friend := make([]int, res)  // res 是长度
	for i := 0; i < res; i++ {
		friend[i] = i  // 0, 1, 2
		// 合并的时候 res--
	}
	union := func(s, d int) {
		for i := range friend {
			// 同化一下
			if friend[i] == s {
				friend[i] = d
			}
		}
	}
	for i:= 0; i < N; i++ {
		for j := i + 1; j < N; j++ {
			if M[i][j] == 1 {
				if friend[i] != friend[j] {
					res--
					fmt.Printf("i是%d, j是%d\n", friend[i], friend[j])
					union(friend[i], friend[j])
				}
			}
		}
	}
	return res
}

func main() {
	// [[0, 1, 0]]
	// []{1, 2, 3}
	count := findCircleNum([] []int{
		{1, 1, 0},
		{1, 1, 0},
		{0, 0, 1},
	})
	fmt.Printf("朋友圈的数量是%d", count)
}