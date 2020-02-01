import React from 'react'
import styles from "./footer.module.scss"
import heart from "./../../assets/images/heart.png"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy;版权所有2020-12020-----魏廷州先生&李苗女士<img src={heart}/></p>
    </div>
  )
}
