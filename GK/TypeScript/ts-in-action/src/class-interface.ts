/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 06:02:48
 * @LastEditTime: 2020-08-23 10:46:18
 * @LastEditors: Please set LastEditors
 * @Description: 类与接口
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\class-interface.ts
 */
// 类类型接口
interface Human {
  // new (name: string): void  // 接口不能约束类的构造函数
  name: string;
  eat(): void
}
// 类实现接口时必须实现接口中所有的属性
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  // 接口只能约束类的公有(public)成员
  name: string
  eat() {}
  sleep() {}
}

// 接口的继承(一个接口可以继承多个接口)
interface Man extends Human {
  run(): void
}
interface Child {
  cry(): void
}
interface Boy extends Man, Child {}
let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口还可以继承类, 这就相当于接口把类的成员都抽象了出来, 也就是只有类的成员结构, 而没有具体实现
class Auto {
  state = 1
  private state2 = 0
}
interface AutoInterface extends Auto {}
// class C implements AutoInterface {
//   state = 1
// }
class Bus extends Auto implements AutoInterface {}  // 因为是Auto的子类, 所以不必实现state属性了
// 接口在抽离类的成员的时候, 不仅抽离了公共成员, 而且抽离了私有成员和受保护成员