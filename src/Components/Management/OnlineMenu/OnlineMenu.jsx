import React, { useEffect } from 'react'
import styles from './OnlineMenu.module.css'

const OnlineMenu=()=>{
    useEffect(()=>{

    })
    return(
        <div className={styles.container}>
            <div className={styles.mobile}>
             <iframe className={styles.mobile} scrolling="yes"  src='http://onlinemenu.restro-x.com'/>
             <img src='/images/iphone.png' className={styles.iphone}/>
            </div>
            <div className={styles.hr2}></div>
         
        </div>
    )
}
export default OnlineMenu