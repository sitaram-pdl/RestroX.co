import React from 'react'
import styles from './AddModal.module.css'

const Delivery=()=>{
    return(
        <div className={styles.delivery}>
            <div className={styles.name}>
                Customer Name
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.input} />
            </div>
            <div className={styles.name}>
                Contact Number
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} />
                        
                </div>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} />
                        
                </div>
           </div>
           <div className={styles.rowDivider}>
           <div className={styles.name2}>
                Address
            </div>
            <div className={styles.name2}>
                Time
            </div>
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} />
                        
                </div>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} />
                        
                </div>
           </div>
           <div className={styles.rowDivider}>
           <div className={styles.name2}>
                Add Food
            </div>
            <div className={styles.name2}>
                Assign Delivery Boy
            </div>
           
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.btnDiv}>
                    <div className={styles.btn} >
                        Add Food
                    </div>
                </div>
                <div className={styles.btnDiv}>
                <div className={styles.btn} >
                        Add Staff
                    </div>
                </div>

           </div>
           <div className={styles.rowDivider2}>
           <    div className={styles.btnDiv2}>
                    <div className={styles.btn} >
                        Add Order
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Delivery