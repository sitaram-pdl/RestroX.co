import React from 'react'
import { RightTask } from '..'
import ActualCalender from '../ActualCalender/ActualCalender'
import styles from './Calender.module.css'

const Calender=(props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.Calender}>
                    <ActualCalender {...props}/>
            </div>
            <div className={styles.task}>
                    <RightTask {...props}/>  
            </div>
        </div>
    )

}

export default Calender