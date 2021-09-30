import React from "react"
import Calender from "./Components/Calender"
import styles from "./RightContainer.module.css"
import Transaction from './Components/Tansaction'

const RightContainer=()=>{
    return(
        <div className={styles.container}>
            <Calender/>
            <Transaction/>
        </div>
    )
}

export default RightContainer