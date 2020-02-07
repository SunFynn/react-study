import React from 'react'
import Parent from "./communcation/one/parent"
import GrandPa from "./communcation/kuaji/grandPa"
import GrandPa1 from "./communcation/kuaji2/grandPa"
import One from "./communcation/noqiantao/one"
import Two from "./communcation/noqiantao/two" 

export default function Home() {
  return (
    <div>
      <h3 style={{textAlign:'center'}}>组件间通信</h3>
      <h4>父子组件通信</h4>
      <Parent/>
      <h4>跨级组件通信</h4>
      <GrandPa/>
      <h4>跨级组件旧context方法</h4>
      <GrandPa1/>
      <h4>同级组件传递数据</h4>
      <One/>
      <Two></Two>
    </div>
  )
}
