import React ,{useState} from 'react'
import styles from "./Landing.module.css"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'

import cx from "classnames"
import { tileProps } from '../../react-calendar/src/shared/propTypes'
const Payroll=(props)=>{
    const[items,setItems]=useState([{"name":"Basic Salary","amount":"Monthly Remuneration","basis":"Rs -","due":"342 days to go" ,"remarks":""}])
    const [category,setCategory]=useState([{'name':'Additions','count':'1'},{'name':'Deductions','count':'1'},{'count':'1','name':'Overtime'}])
    const [num,setNum]=useState(0)
   
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>
                    Payroll Items
                </div>
                <div className={styles.addDepartment} onClick={()=>props.clicked()} >
                    + Add Items
                </div>
            </div>
            
            <div className={styles.division}>
            <div className={styles.search}>
                <div className={styles.rightIcons}>
                    {category.map((data,index)=>
                         <div onClick={()=>setNum(index)} className={cx(styles.filter,index!=num?styles.tomato:null)}>
                         {data.name} 
                     </div>
                    )}
                  
                </div>
               
            </div>
         <div className={styles.search2}>
             <div className={styles.id}>
                 SN
             </div>
             <div className={styles.code}>
                Title
             </div>
             <div className={styles.offers}>
                Category
             </div>
             <div className={styles.start}>
                 Default/Unit Amount
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

export default Payroll