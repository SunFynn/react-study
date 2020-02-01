import React,{useState} from 'react'
import Child from "./child"

export default function Parent() {
  const [count,setCount]=useState(0)
  const [num,setNum]=useState(0)
  const getChildNum=(getChildNum)=>{
    alert(1)
    setNum(getChildNum)
  }
  return (
    <div>
      <Child count={count} getChildNum={getChildNum}/>
      <p>子组件传递来的数据：{num}</p>
    </div>
  )
}
