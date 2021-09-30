import React ,{useState} from 'react'
import styles from './Cashin.module.css'
import {RiSuitcaseFill} from 'react-icons/ri'
import { Switch } from 'antd'
import 'antd/dist/antd.css'
import {GiAmericanShield} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
import {AiFillCreditCard} from 'react-icons/ai'
const CashIn =()=>{
    const options = ['Cash','Credit','Others']
    const [divX,setDivX] = useState(0)
   
    return(
        <div className={styles.container}>
            <div className={styles.secondRow}>
                    <div>
                    <GiAmericanShield className={styles.img} color='tomato'/>
                 </div>
                    <div>
                        <div className={styles.title}>
                            Payee
                        </div>
                        <div>
                            Others
                        </div>
                    </div>
                    <div className={styles.price}>
                        Rs 500
                    </div>

            </div>
            <div className={styles.lowerDiv}>
                <div className={styles.singleRow}>
                    <div>
                        <RiSuitcaseFill size={'2em'} color='gray'/>
                    </div>
                    <div className={styles.date}>
                        {new Date().toString().slice(0,16)}
                    </div>
                </div>
                <div className={styles.singleRow}>
                    <div>
                        <AiFillCreditCard size={'2em'} color='gray'/>
                    </div>
                    <div className={styles.date}>
                    <div className={styles.option}>
               
               {options.map((dat,index)=>
               <div className={index===divX?styles.active:null} onClick={()=>setDivX(index)}>
              {dat}
           </div>
               ) 
               }
            </div>
                    </div>
                </div>
                <div className={styles.singleRow}>
                    <div>
                        <RiSuitcaseFill size={'2em'} color='gray'/>
                    </div>
                    <div className={styles.date}>
                        General Expenses
                    </div>
                </div>
                <div className={styles.singleRow}>
                    <div>
                        <RiSuitcaseFill size={'2em'} color='gray'/>
                    </div>
                    <div className={styles.date}>
                        Cleared
                    </div>
                    <div className={styles.switch}>
                    <Switch defaultChecked/>
                    </div>
                   
                </div>
                <div className={styles.buttons}>
                <div className={styles.cancel}>
                    Cancel
                </div>
               <div className={styles.done}>
                    Done
               </div>
            </div>
            </div>

        
            <div>
                
            </div>
        </div>
    )
}

export default CashIn