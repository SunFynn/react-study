import React, { Component } from 'react'
import PropTypes from "prop-types"
import Parent from "./parent"

class GrandPa extends Component {
  static childContextTypes={     //名称不可变，父组件类型检查,定义context
    color :PropTypes.string,
    callback:PropTypes.func
  }
  getChildContext(){   //getChildContext方法，用来初始化context容器，自动调用
    return{
      color:'red',
      callback:this.getMsg.bind(this)    //传递给子组件的回调函数
    }
  }
  getMsg(returnData){    //用回调函数实参，接受孙子组件传回来的数据
    console.log(returnData);
  }
  render() {
    return (
      <div>
         <Parent/>   
      </div>
    )
  }
}

export default GrandPa