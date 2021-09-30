import React,{useState} from "react"
import styles from "./Modal.module.css"

import {RiRecordCircleFill} from 'react-icons/ri'
const Details=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM'},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Personal Information
            </div>
            <div className={styles.center}>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Passport Number
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Passport Expiry Date
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        PAN No.
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Nationality *
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div> <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Religion
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Maritial Status
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div> <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Employee of Spouse
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        No. of Children
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
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
export default Details