import React ,{useEffect, useState} from 'react'
import styles from './Attendance.module.css'
import {AiOutlineRight} from "react-icons/ai"
import { Progress } from 'react-sweet-progress';
import {RiRecordCircleFill} from 'react-icons/ri'
import "./custom.css"
const Attendance=(props)=>{
    const[data,setData]=useState([{'name':'Arrival','desc':'10:00 AM','sub':[{'name':'Completion of Tax','desc':'Study all tax acts'},{'name':'Completion of Tax','desc':'Study all tax acts'}]},{'name':'Exit','desc':'9:00 PM'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
          
            <div className={styles.row}>
                <div className={styles.first}>
                    <div className={styles.time}>
                        Time Sheet
                    </div>
                    <div className={styles.arrival}>
                        <div>
                            Arrival Time
                        </div>
                        <div className={styles.sub2}>
                            {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                    <div className={styles.timer}>
                        6.7 hrs
                    </div>
                    <div className={styles.arrival}>
                        <div>
                            Departure Time
                        </div>
                        <div className={styles.sub2}>
                            {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                    <div className={styles.overtime}>
                    <div className={styles.arrival2}>
                        <div>
                            Break
                        </div>
                        <div className={styles.sub2}>
                            {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                    <div className={styles.arrival2}>
                        <div>
                            Overtime
                        </div>
                        <div className={styles.sub2}>
                            {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.right}>
                <div className={styles.time}>
                       Statistics
                    </div>
         <div className={styles.alternative}>
                <div className={styles.line44}>
                    <div className={styles.title3}>
                        Today
                    </div>
                    <div className={styles.row}>
                    <div className={styles.lineBar22}>
                    <Progress  
                     symbolClassName={styles.symbol}
                      percent={38}   />
                    </div>
                    <div className={styles.stats}>
                    3hrs/5 
                    </div>
                    </div>
                </div>
                <div className={styles.line44}>
                    <div className={styles.title3}>
                       This week
                    </div>
                    <div className={styles.row}>
                    <div className={styles.lineBar22}>
                    <Progress  
                     symbolClassName={styles.symbol}
                      percent={38}   />
                    </div>
                    <div className={styles.stats}>
                    3hrs/5 
                    </div>
                    </div>
                </div>
                <div className={styles.line44}>
                    <div className={styles.title3}>
                       This Month
                    </div>
                    <div className={styles.row}>
                    <div className={styles.lineBar22}>
                    <Progress  
                    symbolClassName={styles.symbol}
                      percent={38} 
                      
                       />
                    </div>
                    <div className={styles.stats}>
                        3hrs/5 
                    </div>
                    </div>
                </div>
            </div>
                </div>
                <div className={styles.right}>
                <div className={styles.time}>
                        Activity
                    </div>
                    <div className={styles.timeline}>
                    {data.map((dat,index)=>  <div  className={styles.pallete} onClick={()=>setInitial(index)}> 
                <div className={styles.icons}>  
                    <RiRecordCircleFill className={styles.dot} color={dat.name=="Arrival"?'green':"red"}/>
                    <div className={initial==index?styles.line:styles.line2}/>
                </div> 
                <div className={styles.message}>
                    <div className={styles.division}>
                        <div>
                            {dat.name}
                        </div>
                      <div className={styles.sub2}>
                          {dat.desc}
                        </div>
                        {dat.sub?dat.sub.map((dat2)=>
                                  <div className={styles.division}>
                                  <div>
                                     {dat2.name}
                                  </div>
                                <div className={styles.sub2}>
                                    {dat2.desc}
                                  </div>
          
                              </div>
                        ):null}
                      
                    </div>
                   
                </div>
            </div>
            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attendance