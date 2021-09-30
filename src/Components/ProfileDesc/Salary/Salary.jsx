import React, { useState } from "react"
import styles from "./Salary.module.css"
import {BsThreeDotsVertical} from "react-icons/bs"

import {AiOutlineSearch,AiFillEdit,AiOutlineInfoCircle,AiOutlineFileDone,AiOutlineClose,AiOutlinePrinter,AiOutlineFileText} from 'react-icons/ai'
import {IoFilter} from 'react-icons/io5'
import {BiDotsVerticalRounded,BiDownload} from 'react-icons/bi'
import {GrEdit} from "react-icons/gr"
import {RiRecordCircleFill} from "react-icons/ri"
const Salary=(props)=>{
    const [option,setOption]=useState(true)
    const[items,setItems]=useState([{"name":"Basic Salary","amount":"1500","basis":"Monthly","due":"12 Nov" ,"remarks":""},{"name":"Basic Salary","amount":"1500","basis":"Monthly","due":"12 Nov" ,"remarks":""},{"name":"Basic Salary","amount":"1500","basis":"Monthly","due":"12 Nov" ,"remarks":""}])
    const[data2,setData2]=useState([{'name':'Completion of Date','desc':'10:00 AM,20 sept 2020'},{'name':'Completion of Date','desc':'10:00 AM,20 sept 2020'}])
   
    const [data,setData]=useState([{"name":"Average Monthly Salary","amount":"20000"},{"name":"Average Annual Salary","amount":"222,20000"},{"name":"Next Due Date","amount":"12 Nov"},{"name":"Average Monthly Salary","amount":"20000"}])
    return(
        <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.top}>
                <div className={styles.title}>
                    Basic Salary Information
                </div>
                   {option? <BsThreeDotsVertical onClick={()=>setOption(false)}/>:
                            <div className={styles.icons}>
                                <div className={styles.iconColumn} onClick={()=>props.clicked("salary")}>
                                   <div>
                                        <AiFillEdit/>
                                    </div>
                                    <div className={styles.iconName} >
                                        Edit
                                    </div>
                                </div>
                                <div className={styles.iconColumn}>
                                   <div>
                                    <AiOutlineFileDone/>
                                    </div>
                                    <div className={styles.iconName}>
                                        Reports
                                    </div>
                                </div>
                                <div className={styles.iconColumn}>
                                    <BiDownload/>
                                    <div className={styles.iconName}>
                                        Download
                                    </div>
                                </div>
                                <div className={styles.iconColumn}>
                                    <AiOutlineFileText/>
                                    <div className={styles.iconName}>
                                        Payslip
                                    </div>
                                </div>
                                <div className={styles.iconColumn}>
                                    <AiOutlinePrinter/>
                                    <div className={styles.iconName}>
                                        Print
                                    </div>
                                </div>
                                <div className={styles.iconColumn}>
                                    <AiOutlineClose onClick={()=>setOption(true)}/>
                                    
                                </div>
                           </div>}
               
              </div>
               <div className={styles.top}>
                   {   
                    data.map((dat,index)=>
                        <div className={styles.box}>
                             <div className={styles.rupee}>
                                {index!=2 && index != 3?"Rs.":null} {dat.amount}
                             </div>   
                            <div className={styles.desc}>
                                {dat.name}
                             </div>
                        </div>
                        
                        )
                      

                   }
                  
                </div>
                <div className={styles.division}>
         
            <div className={styles.search2}>
                <div className={styles.id}>
                    SN
                </div>
                <div className={styles.code}>
                    Particular
                </div>
                <div className={styles.offers}>
                    Amount
                </div>
                <div className={styles.start}>
                    Salary Basis
                </div>
                <div className={styles.start}>
                    Due Date
                </div>
                <div className={styles.start}>
                    Remarks
                </div>
                <div  className={styles.id}>
                   
                </div>
            </div>
            {items.map((dat,index)=>
                     <div className={styles.search3}>
                     <div className={styles.id}>
                         {index+1}
                     </div>
                     <div className={styles.code}>
                         {dat.name}
                     </div>
                     <div className={styles.offers}>
                         {dat.amount}
                     </div>
                     <div className={styles.start}>
                         {dat.basis}
                     </div>
                     <div className={styles.start}>
                         
                     {dat.due}
                     </div>
                     <div className={styles.start}>
                     {dat.remarks==''?"-":dat.remarks}
                    
                     </div>
                     <div  className={styles.id}>
                        <AiOutlineInfoCircle/>
                    </div>
                 </div>
            )}
   
        </div>
            </div>
            <div className={styles.right}>
            <div className={styles.time}>
                        History
                    </div>
                    <div className={styles.timeline}>
                    {data2.map((dat,index)=>  <div  className={styles.pallete} > 
                <div className={styles.icons}>  
                    <RiRecordCircleFill className={styles.dot} color="orange"/>
                    <div className={styles.line}/>
                </div> 
                <div className={styles.message}>
                    <div className={styles.division3}>
                        <div>
                            {dat.name}
                        </div>
                      <div className={styles.sub2}>
                          {dat.desc}
                        </div>
                    
                      
                    </div>
                   
                </div>
            </div>
            )}
                    </div>
            </div>
        </div>
    )
}

export default Salary