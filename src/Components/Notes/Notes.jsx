import React, { useState } from 'react'
import styles from './Notes.module.css'


const Notes=()=>{
    const options = ['Cash In','Cash Out','Others']
    const [divX,setDivX] = useState(0)
 
    return(
        <div className={styles.container}>
           <div className={styles.title}>
                Create New Notes
           </div>
          <div className={styles.innerDiv}>
                <div className={styles.topDiv}>
                    <input className={styles.input} placeholder='Title'/>
                </div>
                <div className={styles.topDiv}>
                    <textarea className={styles.input2} placeholder='Notes'/>
                </div>
          </div>
          <div className={styles.buttonDiv}>
                <div className={styles.cancel}>

                    Cancel
                </div>
                <div className={styles.create}>
                    Create
                </div>
          </div>
        </div>
    )
}

export default Notes