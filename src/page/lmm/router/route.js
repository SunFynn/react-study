import React from 'react'
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom"
import A from "./a"
import B from "./b"
import C from "./c"
import D from "./d"

export default function RouteComponent() {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to='/lmm/a'>a组件</Link></li>
          <li><Link to='/lmm/b?title=b组件传递的数据'>b组件</Link></li>
          <li><Link to={{pathname:'/lmm/c',query:{title:'c组件的数据'}}}>c组件</Link></li>
          <li><Link to={{pathname:'/lmm/d',state:{title:'d组件的数据'}}}>D组件</Link></li>
        </ul>
        <Switch>
          <Route exact path="/lmm/a/:ff" component={A}/>
          <Route exact path="/lmm/b" component={B}/>
          <Route exact path="/lmm/c" component={C}/>
          <Route exact path="/lmm/d" component={D}/>
        </Switch>
      </Router> 
    </div>
  )
}
