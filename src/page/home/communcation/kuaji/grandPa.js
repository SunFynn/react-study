import React from 'react'
import Parent from "./parent"

import TitleContext from "./context"


export default function grandPa() {
  return (
    <TitleContext.Provider value="哈哈哈">   
    {/* 使用一个Provider将值传递下去，无论多深，都能将数据传递到组件中，当前值为哈哈哈 */}
      <p>爷爷组件</p>
      <Parent/>
    </TitleContext.Provider>
  )
}
