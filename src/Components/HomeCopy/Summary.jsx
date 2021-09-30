import React from 'react'
import { useState } from 'react'
import styles from './Summary.module.css'
import {AiOutlineUser} from 'react-icons/ai'
const Summary =()=>{
    const [options,setOptions] =useState([{'name':'Order', 'number':'21','img':'/images/icon.png'},{'name':'Pending', 'number':'21','img':'/images/icon2.png'},{'name':'Order', 'number':'21','img':'/images/icon3.png'}])
    return(
        <div className={styles.container}>
               <div className={styles.container2}>
                {options.map((dat,index)=>
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <img src={dat.img}/>
                        </div>
                        <div className={styles.desc}>
                            <div className={styles.number}> 
                                21
                            </div>
                            <div>
                               {dat.name}
                            </div>
                        </div>
                    </div>
                 ) }
          </div>
        </div>
    )
}

export default Summary