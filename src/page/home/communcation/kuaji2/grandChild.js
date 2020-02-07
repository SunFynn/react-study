import React, { Component } from 'react'
import PropTypes from "prop-types"
class GrandChild extends Component {
  static contextType={
    color:PropTypes.string,
    callback:PropTypes.func
  }
  
  render() {
    const returnData="孙子组件中的数据"
    return (
      <div>
        {/* {this.context.color} */}
        <button onClick={()=>this.context.callback(returnData)}>
          点击将后代数据通过回调函数传递给祖先APP组件
        </button>
      </div>
    )
  }
}

export default GrandChild

