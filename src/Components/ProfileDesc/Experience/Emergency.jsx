import React,{useState} from "react"
import styles from "./Modal.module.css"

import {RiRecordCircleFill} from 'react-icons/ri'
const Experience=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM'},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
            <div className={styles.title}>
              Experience Information
            </div>
            <div className={styles.center}>
                <div className={styles.top}>
                <div className={styles.contact}>
                    Experience Information
                </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                      Company Name *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Location
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Job Position*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Period From *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                </div>
                <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                     Period To*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
               
                </div>
            </div>
       
            </div>
            <div className={styles.buttons}>
                <div className={styles.cancel}>
                    Cancel
                </div>
                <div className={styles.save}>
                    Save
                </div>
              
            </div>
        </div>
    )
}
export default Experience