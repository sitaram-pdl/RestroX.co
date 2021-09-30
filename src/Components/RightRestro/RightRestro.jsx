import React,{useState} from 'react'
import styles from './RightRestro.module.css'
import {BiMessageSquareDots} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { Message, ReviewBox } from '..'
import cx from 'classnames'
const RightRestro=(props)=>{
    const [top,setTop]=useState(localStorage.getItem('align')=='false'?false:true);

    return(
        <div className={styles.container}>
        <div className={styles.profile}>
         
        </div>
        <div className={styles.message} id='upperDiv' draggable  onDragEnd={(e)=>{localStorage.setItem('align',!top);e.dataTransfer.dropEffect = 'copy'; console.log(e);setTop(!top)}}>
           {!top? <Message {...props}/>:<ReviewBox {...props}/>}
        </div>
        <div className={styles.message} id='lowerDiv' draggable onDragEnd={()=>{localStorage.setItem('align',!top); setTop(!top)}}>
        {!top?<ReviewBox {...props}/>:<Message {...props}/>}
        </div>
        </div>
    )
}
export default RightRestro