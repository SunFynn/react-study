import React, { useState, useEffect, } from 'react';
import moment from "moment"

export default function Time(props) {
  const [time,setTime]=useState(new Date())
  useEffect(() => {
    const timer=setInterval(()=>{
      setTime(new Date())
    },1000)
    return () => {
      clearInterval(timer)
    };
  }, [])
  return (
    <span className={props.className}>
       {moment().format('YYYY/MM/DD HH:mm:ss')} 
    </span>
  )
}
