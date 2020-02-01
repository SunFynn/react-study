import React from 'react'
import Header from "./components/header"
import Footer from "./components/footer"

export default function App(props) {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer/>
    </div>
  )
}
