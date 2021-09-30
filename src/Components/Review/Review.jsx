import React from 'react'
import styles from './Review.module.css'
import Left from './Review/Review'

import { RightTask } from '..'
const Review=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <Left/>
            </div>
            <div className={styles.right}>
            <div className={styles.div}>

                    </div>
                    <div>
                        <RightTask/>
                    </div>
            </div>
        </div>
    )
}

export default Review
