<!--
 * @Author: Zzceaon
 * @Date: 2020-07-07 14:46:03
 * @LastEditTime: 2020-07-07 15:44:56
 * @LastEditors: Please set LastEditors
 * @Description: 链表
 * @FilePath: \Course\algorithm\list\README.md
--> 
数组: 存储的时候是一段连续的空间
[1, 2, 3, 4, 5, , 6] 稀疏数组

1 -> 2 -> 3 -> 4 -> 5 -> NULL
{val: 1, next: {
  val: 2, next: {
    val: 3, next: {
      val: 4, next: {
        val: 5, next: null
      }
    }
  }
}}
奇链表: 1 -> 3 -> 5
偶链表: 2 -> 4
奇链表.next = 偶链表