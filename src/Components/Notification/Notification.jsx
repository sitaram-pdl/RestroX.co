import React from 'react'
import styles from './Notification.module.css'

const Notification=(props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Notification & Sound
            </div>
            <div className={styles.mainDiv}>
                <div className={styles.items}>
                    
                </div>
            </div>
        </div>
    )
}
export default Notification