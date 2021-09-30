import React from "react"
import styles from "../leftContainer.module.css"
import {CgArrowsExpandUpRight} from "react-icons/cg"
import {AiOutlineClockCircle,AiOutlineUserAdd,AiOutlineAlignLeft} from "react-icons/ai"
const Component=()=>{
    return(
        <div className={styles.containerComponent}>
            <div className={styles.expand}>
                <CgArrowsExpandUpRight size="0.5em"/>
            </div>
            <div className={styles.title}>
                Create a new reminder
            </div>
            <div className={styles.inputDiv}>
                <div>
                    Name
                </div>
                <div>
                    <input className={styles.input} />
                </div>
            </div>
            <div className={styles.time}>
                <div>
                    <AiOutlineClockCircle color="white" size="1.6em"/>
                </div>
                <div className={styles.timeRight}>
                    <div className={styles.timeMain}>
                        12:00 AM - 1:00 PM
                    </div>
                    <div>
                        Friday,28 May
                    </div>
                </div>
            </div>
            <div className={styles.time}>
                <div>
                    <AiOutlineUserAdd color="white" size="1.6em"/>
                </div>
                <div className={styles.timeRight}>
                        <img src="/images/user.jpeg" className={styles.image}/>
                   
                </div>
                <div className={styles.timeRight}>
                        <img src="/images/user.jpeg" className={styles.image}/>
                   
                </div>
                <div className={styles.timeRight}>
                        <img src="/images/user.jpeg" className={styles.image}/>
                   
                </div>  
            </div>
            <div className={styles.time}>
                <div>
                    <AiOutlineAlignLeft color="white" size="1.6em"/>
                </div>
                <div className={styles.timeRight}>
                       
                <input placeholder="Add description" className={styles.input} />
         
                </div>
               
            </div>
            <div className={styles.buttonDiv}>
                <div className={styles.btn}>
                    Create reminder
                </div>
            </div>
        </div>
    )
}

export default Component