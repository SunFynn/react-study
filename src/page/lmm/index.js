import React from 'react'
import RouteComponent from "./router/route"

export default function index(props) {
  const hangleA=()=>{
    alert(1)
    props.history.push({pathname:'/lmm/a/秒米哦啊'})
  }
  const hangleB=()=>{
    alert(1)
    props.history.push({pathname:'/lmm/b?title=秒米哦啊'})
  }
  const hangleC=()=>{
    alert(1)
    props.history.push({pathname:'/lmm/c',query:{title:'cccccccc'}})
    console.log(props.location)
  }
  const hangleD=()=>{
    alert(1)
    props.history.push({pathname:'/lmm/d',state:{title:'dddddddddd'}})
    console.log(props.location)
  }
  return (
    <div>
      lmm的家庭
      <RouteComponent/>
      <button onClick={hangleA}>
        向a组件发送数据
      </button>
      <button onClick={hangleB}>
        向b组件发送数据
      </button>
      <button onClick={hangleC}>
        向c组件发送数据
      </button>
      <button onClick={hangleD}>
        向d组件发送数据
      </button>
    </div>
  )
}
