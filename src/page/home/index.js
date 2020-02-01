import React from 'react'
import Parent from "./communcation/one/parent"

export default function Home() {
  return (
    <div>
      <h3 style={{textAlign:'center'}}>组件间通信</h3>
      <Parent/>
    </div>
  )
}
