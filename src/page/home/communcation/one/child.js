import React,{useState} from 'react'

export default function Child(props) {
  const [childNum,setChildNum]=useState(2)
  return (
    <div>
      <p>父组件传递来的数据:{props.count}</p>
      <button onClick={()=>props.getChildNum(childNum)}>点击发送</button>
    </div>
  )
}
