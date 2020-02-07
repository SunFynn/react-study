import React, { Component } from 'react'
import emitter from "./ev"

export default class Two extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>emitter.emit('myEvent','数据22')}>
          点击发送传递数据
        </button>
      </div>
    )
  }
}

