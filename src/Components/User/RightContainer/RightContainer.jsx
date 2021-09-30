import React from "react"
import Calender from "./Components/Calender"
import styles from "./RightContainer.module.css"
import Applicants from './Components/Applicants'

const RightContainer=()=>{
    return(
        <div className={styles.container}>
            <Calender/>
            <Applicants/>
        </div>
    )
}

export default RightContainer