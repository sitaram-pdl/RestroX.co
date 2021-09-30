import React from "react"
import Component from "./Component/Component"
import Note from "./Component/Note"
import Reservation from "./Component/Reservation"
import Task from "./Component/Task"
import styles from "./leftContainer.module.css"

const LeftContainer=()=>{
    return(
        <div className={styles.container}>
            <Component/>
            <Note/>
            <Task/>
            <Reservation/>
        </div>
    )
}

export default LeftContainer