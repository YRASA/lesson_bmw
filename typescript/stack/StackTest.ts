import Stack from "./libs/Stack"

const stack = new Stack()
stack.push("data1")
stack.push("data2")
stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.toString())
stack.clear()