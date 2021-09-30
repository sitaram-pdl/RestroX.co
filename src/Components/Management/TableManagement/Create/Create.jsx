import React from 'react'
import styles from './Create.module.css'
import {FaEquals} from 'react-icons/fa'
const Create=(props)=>{
    return(
        <div className={
            styles.container
        } >
            <div className={styles.title}>
                Unit Creation 
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Unit Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} placeholder='eg Kilo Gram'></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Nick Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} placeholder='eg Kg'></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column2}>
                    <div className={styles.name}>
                       Give Your Unit a value <div className={styles.dim}>(Optional if it doesnt have value)</div>
                    </div>
                    <div className={styles.row2}>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} placeholder='eg Kilo Gram'></input>
                        <div className={styles.option}>
                            Mana
                        </div>
                    </div>
                    <div className={styles.divider}>
                        <FaEquals color='gray'/>
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} placeholder='eg Kilo Gram'></input>
                        <div className={styles.option}>
                            Mana
                        </div>
                    </div>
                   </div>
                 
                </div>
              </div>
              <div className={styles.bottom}>
            <div className={styles.button1}>
                Save Draft
            </div>
            <div className={styles.button} onClick={()=>props.history.push('/management/Inventory Management/Measuring Units/Create')}>
               Done
            </div>
        </div>
        </div>
    )
}

export default Create