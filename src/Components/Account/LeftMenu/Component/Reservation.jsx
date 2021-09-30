import React,{useState} from "react"
import styles from "../leftContainer.module.css"
import {CgArrowsExpandUpRight} from "react-icons/cg"
import {AiOutlineClockCircle,AiOutlineUserAdd,AiOutlineAlignLeft,AiFillTag} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
const Reservation=()=>{
    const [priority,setPriority] = useState(0)
    const [priority2,setPriority2] = useState(0)
   
    const options=["No","Medium","High","Low"]
   const [number,setNumber]=useState(0)
    return(
        <div className={styles.containerComponent}>
            <div className={styles.expand}>
                <CgArrowsExpandUpRight size="0.5em"/>
            </div>
            <div className={styles.title}>
               Add Reservation
            </div>
            <div className={styles.inputDiv}>
                <div>
                    Name
                </div>
                <div>
                    <input className={styles.input} />
                </div>
            </div>
            <div className={styles.timeDiv}>
          
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
                <AiFillTag color="#EE3E4B" size="1em"/>
              </div>
                <div className={styles.timeRight}>
                       
                <div className={styles.upDown}>
                    <div onClick={()=>setNumber((data)=>data>0?data-1:data)}>
                       -
                    </div>
                    <div>
                        {number}
                    </div>
                    <div  onClick={()=>setNumber((data)=>data+1)}>
                        +
                    </div>
                </div>
         
                </div>
               
            </div>
            <div className={styles.time}>
                <div>
                <AiFillTag color="#EE3E4B" size="1em"/>
              </div>
                <div className={styles.timeRight}>
                       
                <input placeholder="Select Table Number" className={styles.input} />
         
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
                    <IoMdNotificationsOutline color="white" size="1.6em"/>
                </div>
                <div className={styles.timeRight}>
                       
                <input placeholder="Any Special Request" className={styles.input} />
         
                </div>
               
            </div>
            </div>
            <div className={styles.buttonDiv} >
                <div className={styles.btn} style={{backgroundColor:"#46BD84",color:'white'}}>
                    Create reminder
                </div>
            </div>
        </div>
    )
}

export default Reservation