import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./header.module.scss"
import Time from "./../components/time"

export default function Header() {
  return (
    <div className={styles.header}>
     
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/lmm" activeClassName={styles.active}>lmm</NavLink>
        </li>
        <li>
          <NavLink exact to="/wzz" activeClassName={styles.active}>wzz</NavLink>
        </li>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.time}>
        <span style={{color:"red",fontWeight:'800'}}>LOVE:&nbsp;</span>2019/5/18 23:25----<Time style={{color:'red'}}/>
      </div>
    </div>
  )
}
