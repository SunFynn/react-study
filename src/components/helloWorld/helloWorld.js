import React, { Component } from 'react'
import styles from './helloWorld.scss'


export default class FileName extends Component {

  render() {
    return (
      <div className={styles.helloWorld}>
         <h3 className={styles.foo}>1111</h3>
      </div>
    )
  }
}