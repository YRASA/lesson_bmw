/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 00:53:23
 * @LastEditTime: 2020-08-23 10:31:19
 * @LastEditors: Please set LastEditors
 * @Description: 类
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\class1.ts
 */
// 类的成员修饰符(ts对es的一种扩展)(默认public)
// 私有成员(private): 只能在类的本身被调用, 而不能被类的子类和类的实例调用
// 受保护成员(protected): 只能在类或者子类中访问, 而不能在类的实例中访问
class Dog {
  constructor(name: string) {  // constructor前加上private: 这个类既不能被实例化, 也不能被继承; 加上protected表明不能被实例化, 只能被继承, 相当于声明了一个基类
    this.name = name
  }  // 返回值 => Dog
  public name: string = 'dog'  // 显示声明
  run() {}  // 默认返回值 => void
  private pri() {}
  protected pro() {}
  readonly legs: number = 4  // 只读属性(一定要被初始化)
  static food: string = 'bones'  // 类的静态成员(只能通过类名来调用, 而不能通过子类来调用, 但可以通过继承来以子类的函数名调用)
}
// 无论在js还是ts中, 类成员的属性都是实例属性, 而不是原型属性, 类成员的方法都是实例方法
console.log(Dog.prototype)  // >>> {run: ƒ, pri: ƒ, pro: ƒ, constructor: ƒ}
let dog = new Dog('wangwang')
console.log(dog)  // >>> {name: "wangwang"} 内部属性只在实例上, 而不在原型上
// dog.pri()
// dog.pro()
console.log(Dog.food)
// console.log(Dog.food, dog.food)
// 实例的属性必须具有初始值, 或者在构造函数中被初始化

// 继承
// 除了类的成员可以添加修饰符之外, 构造函数也可以添加修饰符, 作用是将参数自动变成了实例的属性, 这样就可以省略在类中的定义了
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color  // this一定要在super调用之后再调用
    // this.pri()
    this.pro()
  }
  // color: string
}
console.log(Husky.food)  // 类的静态成员可以被继承
