import React ,{useState} from 'react'
import styles from "./Landing.module.css"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'

import { tileProps } from '../../react-calendar/src/shared/propTypes'
const Holidays=(props)=>{
    const[items,setItems]=useState([{"name":"New Year","amount":"1st Jan 2022","basis":"Wednesday","due":"342 days to go" ,"remarks":""}])
  
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>
                    Holidays
                </div>
                <div className={styles.addDepartment} >
                    + Add Holidays
                </div>
            </div>
            <div className={styles.division}>
         
         <div className={styles.search2}>
             <div className={styles.id}>
                 SN
             </div>
             <div className={styles.code}>
                Title
             </div>
             <div className={styles.offers}>
                Holiday Date
             </div>
             <div className={styles.start}>
                 Day
             </div>
             <div className={styles.start}>
                 Status
             </div>
             <div className={styles.start}>
                 Remarks
             </div>
             <div  className={styles.id}>
                
             </div>
         </div>
         {items.map((dat,index)=>
                  <div className={styles.search3} key={index}>
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
                     <BiDotsVerticalRounded/>
                 </div>
              </div>
         )}

     </div>
        </div>
    )
}

export default Holidays