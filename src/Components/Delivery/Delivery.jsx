import React from 'react'
import Delivered from './Delivered'
import styles from './Delivery.module.css'
import Pending from './Pending'
import Processing from './Processing'

const Delivery=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.first}>
                <Pending/>
            </div>
            <div className={styles.second}>
               <Processing/>
            </div>
            <div className={styles.first}>
                <Delivered/>
            </div>
        </div>
    )
}

export default Delivery