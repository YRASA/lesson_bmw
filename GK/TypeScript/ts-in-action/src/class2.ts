/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 05:34:07
 * @LastEditTime: 2020-08-23 10:37:29
 * @LastEditors: Please set LastEditors
 * @Description: 类
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\class2.ts
 */
// 抽象类: 只能被继承, 而不能被实例化的类
abstract class Animal {
  // 抽象类可以定义一个具体实现的方法, 这样子类就不用实现了, 这就实现了方法的复用
  eat() {
    console.log('eat')
  }
  // 也可以不指定方法的实现, 这就构成了一个抽象方法
  abstract sleep(): void
}
// let animal = new Animal()
class Duck extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('Duck sleep')
  }
}
let duck = new Duck('gaga')
duck.eat()

// 多态 在父类中定义一个方法, 在多个子类中有不同的实现, 在程序运行的时候会根据不同的对象执行不同的操作, 这样就实现了运行时的绑定
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}
let cat = new Cat()
let animals: Animal[] = [duck, cat]
animals.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()
// this类型也可以表现出多态: this既可以是父类型, 也可以是子类型
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()
