import React ,{useState} from "react"
import styles from "./salary.module.css"
import {BiDotsVerticalRounded} from 'react-icons/bi'

import {IoCheckmarkDoneCircle} from 'react-icons/io5'

import cx from "classnames"
import Air from "../Attendance/icon.png"
import Dropdown from '../../react-dropdown'

const SalaryReport=(props)=>{
    const[items,setItems]=useState([{"name":"Swadesh Nepali","type":"Medical Leave","from":"2 Jan 2020","to":"3 Jan 2020","days":"2 days","reason":"To go Hospital","status":"Approved"}])
    const [data,setData]=useState([{"name":"Today Present","amount":"22/89"},{"name":"Planned Leave","amount":"8"},{"name":"Unplanned Leave","amount":"1"},{"name":"Pending Leave","amount":"22"},,{"name":"Pending Leave","amount":"22/33"}])
 
    const [category,setCategory]=useState([{'name':'All','count':'1'},{'name':'Reception','count':'1'},{'count':'1','name':'Helper'}])
    const [num,setNum]=useState(0)
    const [name,setName]=useState(null)
    return(
        <div className={styles.container}>
             <div className={styles.top}>
                <div className={styles.title}>
                   Salary Report
                </div>
                <div className={styles.addDepartment} >
                    + Add Reports
                </div>
            </div>
            <div className={styles.division}>
            <div className={styles.search}>
                <div className={styles.rightIcons}>
                    {category.map((data,index)=>
                         <div onClick={()=>setNum(index)} className={cx(styles.filter,index!=num?styles.tomato:null)}>
                         {data.name} ({data.count})
                     </div>
                    )}
                  
                </div>
               
            </div>
            <div className={styles.search2}>
                <div className={styles.code}>
                   Employee
                </div>
              
               
                        <div className={styles.start}>
                      
                        Due Date
                        
                        
                    </div>
                    
                
                    <div className={styles.start}>
                      
                      Role
                      
                      
                  </div>
                  
                  <div className={styles.start}>
                      
                      Salary
                      
                      
                  </div>
                  
                  <div className={styles.start}>
                      
                     Payslip
                      
                      
                  </div>
                  <div className={styles.start}>
                      
                     Remarks
                      
                  </div> 
                    
               
                
                <div className={styles.active}>
                    
                </div>
            </div>
            <div className={styles.overflowContainer}>

                {items.map((dat,index)=>
                     <div className={styles.search3}>
                   
                     <div className={styles.code} onClick={()=>setName(dat.name)}>
                         <div>
                             <img className={styles.image} src='https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' />
                        </div>
                         <div className={styles.nameLine} >
                             <div className={styles.name}>
                                 Swadesh Nepali
                            </div>
                            <div className={styles.email}>
                                Cashier
                            </div>
                        </div>
                     </div>
                   
                    <div className={styles.start2} >
                        {dat.type}         
                    </div>
                    <div className={styles.start2} >
                        {dat.from}         
                    </div>
                    <div className={styles.start2} >
                        {dat.to}         
                    </div>
                    <div className={styles.payslip} onClick={()=>props.setPayslip(true)}>
                        Generate Pay Slip    
                    </div>
                    <div className={styles.start2} >
                        {dat.reason}         
                    </div>
                   
                   
                   
                    
                     <div className={styles.active}>
                     <BiDotsVerticalRounded />
                     </div>
                 </div>
            )}
           </div>
         
        </div>
        </div>
    )
}

export default SalaryReport