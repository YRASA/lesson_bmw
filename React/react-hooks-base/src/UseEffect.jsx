import React, { useEffect, useState, useMemo, useCallback } from 'react'
// state = {
//   a: null,
//   b: [],
//   c: {}
// }
// this.setState()
let arr = [1, 2];
let set = new Set();  // 无重复的数据集 [1, 1, 1]
set.add(1);
set.add(1);
console.log(set);
let set1 = new Set([1, 1, 1, 1, 1]);
console.log([...set1]);
// ...[1, 2, 3] ...'678' ...{a: 1, b: 2}
function Demo() {
  console.log('render');
  const [ inputVal, setVal ]= useState('海阔天空');
  const [ list, setList ] = useState([]);
  // const [val, setVal] = ['', () => {}]
  // const val = [1, 2]
  // 缓存的时候检查依赖, 只有没有变化才会使用上次的值
  const val = useMemo(() => [1, 2], []);
  set.add(val);
  console.log(set.size);
  const handleChange = useCallback((event) => {
    setVal(event.target.value);
  }, [])
  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
    .then(res => res.json())
    .then((res) => {
      setList(res.result.songs);
    })
    return () => {
      console.log('111111111')
      // 卸载
      // clearInterval()
      // document.removeEventListener()
    }
  }, [inputVal]);
  // 依赖 react 检查 依赖里面有没有数据发生变化，没变化就不会重新调用
  // []  一次  componentDidMopunt
  // [inputVal] 多次  componentDidUpdate
  return (
    <div>
      { list.length }
      <input type="text" value={inputVal}
       onChange={handleChange}/>
    </div>
  )
}
// () => {
//   const val = [1,2]
//   const handleChange = () => {}
// }
// () => {
//   const val = 
//   const handleChange = 
// }
export default Demo;