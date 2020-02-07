import React from 'react'

import TitleContext from "./context"


export default function GrandChild() {
  return (
    <TitleContext.Consumer>
      {context=>{
        console.log(context)
        return(
        <div>
          <p>孙子组件</p>
          传递过来的值：{context}
        </div>
        )
      }}
    </TitleContext.Consumer>
  )
}

