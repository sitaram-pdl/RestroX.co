import React,{useState} from "react"
import styles from "./Modal.module.css"

import {RiRecordCircleFill} from 'react-icons/ri'
const Education=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM'},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
            <div className={styles.title}>
              Education Information
            </div>
            <div className={styles.center}>
                <div className={styles.top}>
                <div className={styles.contact}>
                    Education Information
                </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                      Institution *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Subject
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Start Date*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Completed Date *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                </div>
                <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                      Degree*
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Grade *
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
export default Education