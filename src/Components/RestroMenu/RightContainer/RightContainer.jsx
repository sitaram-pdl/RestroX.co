import React from "react"
import ActualCalender from "../../ActualCalender/ActualCalender"
import styles from "./RightContainer.module.css"

const RightContainer=()=>{
    return(
        <div className={styles.container}>
            <ActualCalender/>
        </div>
    )
}

export default RightContainer