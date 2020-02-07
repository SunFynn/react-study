import React, { Component } from 'react'
import emitter from "./ev"
export default class one extends Component {
  constructor(){    
    super();    
    this.state={   msg:""  }   
  }
  componentDidMount(){ 
    this.eventEmitter=emitter.addListener('myEvent',(msg)=>{   //自定义订阅事件
      this.setState({msg})
    })
  }
  componentWillUnmount(){   //组件销毁时，删除这个自定义事件
    emitter.removeListener(this.eventEmitter)
  }
  render() {
    return (
      <div>
        <h1>ONE组件</h1>
        TWO组件通过回调函数传回了的数据：<span>{this.state.msg}</span>
      </div>
    )
  }
}

