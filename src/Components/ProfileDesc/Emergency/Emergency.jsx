import React,{useState} from "react"
import styles from "./Modal.module.css"

import {RiRecordCircleFill} from 'react-icons/ri'
const Emergency=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM'},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
            <div className={styles.title}>
               Emergency Contact
            </div>
            <div className={styles.center}>
                <div className={styles.top}>
                <div className={styles.contact}>
                    Primary Contact
                </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Name *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Relationship
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Phone*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Email *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.top2}>
                <div className={styles.contact}>
                    Primary Contact
                </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Name *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Relationship
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Phone*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Email *
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
export default Emergency