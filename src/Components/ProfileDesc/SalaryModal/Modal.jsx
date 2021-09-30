import React,{useState} from "react"
import styles from "./Modal.module.css"

import Dropdown from '../../react-dropdown'
import {RiRecordCircleFill} from 'react-icons/ri'
const SalaryModal=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM'},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
    const options = [
        { value: 'Most Ordered', label: 'Most Ordered' },
        { value: 'Most Reviewed', label: 'Most Reviewed' }, 
        { value: 'Most Order Type', label: 'Most Order Type' },
        { value: 'Most Delivered', label: 'Most Delivered' },
        
        ]
   
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Salary Information
            </div>
            <div className={styles.center}>
            <div className={styles.namePoint}>
                1. Basic Salary
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Basis
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown options={options} controlClassName={styles.controlDrop} menuClassName={styles.menuDrop}  value={'Most Ordered'}  placeholder="Select an option"/>
           
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Amount
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                        <div className={styles.rightTextInput}>
                            per month
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Due Date
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Remarks
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.namePoint}>
               2. Dashain Allowances
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Basis
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown options={options} controlClassName={styles.controlDrop} menuClassName={styles.menuDrop}  value={'Most Ordered'}  placeholder="Select an option"/>
           
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Amount
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                        <div className={styles.rightTextInput}>
                            per month
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Due Date
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Remarks
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div> <div className={styles.namePoint}>
                3. Bonus
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Basis
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown options={options} controlClassName={styles.controlDrop} menuClassName={styles.menuDrop}  value={'Most Ordered'}  placeholder="Select an option"/>
           
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Amount
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                        <div className={styles.rightTextInput}>
                            per month
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Due Date
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Remarks
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} ></input>
                    </div>
                </div>
            </div>
            <div className={styles.namePoint}>
                4. 10% SC
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Basis
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown options={options} controlClassName={styles.controlDrop} menuClassName={styles.menuDrop}  value={'Most Ordered'}  placeholder="Select an option"/>
           
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Amount
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                        <div className={styles.rightTextInput}>
                            per month
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Due Date
                    </div>
                    <div className={styles.inputDiv}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                         Remarks
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
export default SalaryModal