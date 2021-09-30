import React, { useState } from "react"
import styles from "./Modal.module.css"
import Dropdown from "react-dropdown"
import { RiRecordCircleFill } from 'react-icons/ri'
const AddPayroll = (props) => {
    const [data, setData] = useState([{ 'name': 'Arrival', 'desc': '10:00 AM' }, { 'name': 'Exit', 'desc': '9:00 PM' }])
    const [initial, setInitial] = useState(0);


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Add Addition
            </div>
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
                    Category
                    </div>
                <Dropdown controlClassName={styles.dropdown} ></Dropdown>

            </div>
            <div className={styles.column}>
                <div className={styles.name}>
                    Unit Amount
                    </div>
                <div className={styles.inputDiv}>
                    <div className={styles.rupee}>Rs</div> <input className={styles.input} ></input> <div className={styles.rupee}>.00</div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.name}>
                    Assignee
                    </div>
                <div className={styles.row}>
                    <div className={styles.name}>
                        No Assignee
                            </div>

                    <div className={styles.name}>
                        No Assignee
                            </div>

                    <div className={styles.name}>
                        No Assignee
                            </div>
                </div>
                <Dropdown controlClassName={styles.dropdown} ></Dropdown>

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
export default AddPayroll