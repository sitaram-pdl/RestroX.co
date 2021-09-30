import React, { useState } from 'react'
import styles from './RightTask.module.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import cx from 'classnames'
const RightTask=(props)=>{
    const [data,setData]=useState([{'desc':'Repair Wifi'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'},{'desc':'Make Payment to Samir'}])
    return(
            <div className={cx(styles.container,props.theme?styles.white:null)}>
                <div className={styles.row}>
                    <div className={styles.task}>
                   My Tasks <div className={styles.total}>( {data.length} )</div>
                    </div>
                    
                    <div>
                        <AiOutlinePlus size='24'/>
                    </div>
                </div>
                <div className={styles.row2}>
              {data.map((dat,index)=>  <div className={cx(styles.row,styles.array,props.theme?styles.whiteText:null)}>
                    <div className={styles.number}>
                        {index + 1}
                    </div>
                    <div className={styles.desc}>
                        {dat.desc}
                    </div>
                    <div>
                    <IoCheckmarkDoneCircleOutline size='24'/>
                  
                    </div>
                </div>
              )}
            </div>
         </div>
    )
    
}
export default RightTask