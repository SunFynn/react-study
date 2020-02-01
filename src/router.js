import React from 'react'
import {HashRouter as Router,Link,Route,Switch} from "react-router-dom"
import App from "./App"
import Home from "./page/home"
import Lmm from "./page/lmm"
import Wzz from "./page/wzz"

export default function router() {
  return (
    <div>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/lmm" component={Lmm}></Route>
            <Route path="/wzz" component={Wzz}></Route>
          </Switch>
        </App>
      </Router>
    </div>
  )
}
