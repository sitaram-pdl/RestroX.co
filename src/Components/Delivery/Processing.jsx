import React ,{useEffect} from 'react'
import { useState } from 'react'
import styles from './Processing.module.css'
import Item from './Item'
import ProcessingItem from './ProcessingItem'
const Processing=()=>{
    const[change,setChange]=useState()
  
    return(
        <div className={styles.pendingContainer} >
            <div className={styles.topRow2}>
                <div className={styles.title}>
                    Processing
                </div>
                <div className={styles.subText}>
                    24 Orders Processing
                </div>
            </div>
            <div className={styles.lowerDiv2} id="masonry2">
               {[1,23,6,45,6].map((dat,index)=><ProcessingItem id={`id2${index}`} setChange={setChange} />)}
            </div>
        </div>
    )
}

export default Processing