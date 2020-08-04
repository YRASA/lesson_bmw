import * as React from 'react'
// 子组件
export interface Props{
  userName: string
}
export const HelloComponent = (props: Props) => (
  <h2>Hello user: {props.userName}</h2>
)