import React, { useState } from 'react'
import { CgOptions } from 'react-icons/cg'
import CashIn from './Components/CashIn'
import styles from './Modals.module.css'

import CashOut from './Components/CashOut'
import Others from './Components/Others'
const AddExpense=()=>{
    const options = ['Cash In','Cash Out','Others']
    const [divX,setDivX] = useState(0)
  const  renderSelector=()=>{
        switch(divX){
            case 0:
                return <CashIn/> ;
            
            case 1:
                return <CashOut/>;
            
            case 2 :
                return <Others/>

        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.option}>
               
               {options.map((dat,index)=>
               <div className={index===divX?(index===0?styles.active:styles.activeBlue):null} onClick={()=>setDivX(index)}>
              {dat}
           </div>
               ) 
               }
            </div>

              {
                  renderSelector()
             }
            
        </div>
    )
}

export default AddExpense