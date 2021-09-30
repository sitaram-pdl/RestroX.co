import React, { useState } from "react"
import styles from "../leftContainer.module.css"
import {CgArrowsExpandUpRight} from "react-icons/cg"
import {AiOutlineClockCircle,AiOutlineUserAdd,AiOutlineAlignLeft,AiFillTag } from "react-icons/ai"
const Task=()=>{
    const [priority,setPriority] = useState(0)
    const [priority2,setPriority2] = useState(0)
   
    const options=["No","Medium","High","Low"]
    const options2=["All","Work","Personal"]
    return(
        <div className={styles.containerComponent}>
            <div className={styles.expand}>
                <CgArrowsExpandUpRight size="0.5em"/>
            </div>
            <div className={styles.title}>
                Create a New Task
            </div>
            <div className={styles.inputDiv}>
                <div>
                   Task Name
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
                  !!!
                </div>
                <div className={styles.timeRight}>
                       
                <div className={styles.slider}>
                    {options.map((data,index)=>
                    <div className={priority===index?styles.color:null} onClick={()=>setPriority(index)}>
                        {data}
                    </div>
                    )}
                   
                </div>
         
                </div>
               
            </div>
            <div className={styles.time}>
                <div>
                 <AiFillTag color="#EE3E4B" size="1.6em"/>
                </div>
                <div className={styles.timeRight}>
                       
                <div className={styles.slider}>
                    {options2.map((data,index)=>
                    <div className={priority2===index?styles.color:null} onClick={()=>setPriority2(index)}>
                        {data}
                    </div>
                    )}
                   
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
          
            <div className={styles.buttonDiv} >
                <div className={styles.btn} style={{backgroundColor:"#EE3E4B",color:"White"}}>
                    Create Task
                </div>
            </div>
        </div>
    )
}

export default Task