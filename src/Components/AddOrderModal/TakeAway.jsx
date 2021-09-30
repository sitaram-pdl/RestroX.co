import React from 'react'
import styles from './AddModal.module.css'

const TakeAway=()=>{
    return(
        <div className={styles.delivery}>
            <div className={styles.name}>
                Customer Name
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.input} placeholder='Type Name Here...'/>
            </div>
            <div className={styles.name}>
                Contact Number
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} placeholder='+977 9813233123'/>
                        
                </div>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} placeholder='Secondary Phone Number' />
                        
                </div>
           </div>
           <div className={styles.rowDivider}>
           <div className={styles.name2}>
                Pick Up Time
            </div>
            
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.inputDiv2}>
                        <input className={styles.input} placeholder='8:00 PM'/>
                        
                </div>
                
           </div>
           <div className={styles.rowDivider}>
           <div className={styles.name2}>
                Add Food
            </div>
            
           
            </div>
           <div className={styles.rowDivider}>
                <div className={styles.btnDiv}>
                    <div className={styles.btn} >
                        Add Food
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

export default TakeAway