import React, { useState } from 'react'
import cx from 'classnames'
import styles from "./Transaction.module.css"

import {AiFillStar } from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'

import 'antd/dist/antd.css'; 
import { Switch } from 'antd';


const LeftContainer=()=>{
    const[items,setItems]=useState([{"transaction":"- Rs 144.00",'transactionname': 'Binod Salary', 'transactiondesc': 'Food','image': 'https://img.icons8.com/cotton/2x/bread--v2.png'},{"transaction":"- Rs 144.00",'transactionname': 'Binod Salary', 'transactiondesc': 'Food','image': 'https://img.icons8.com/cotton/2x/bread--v2.png'},{"transaction":"- Rs 144.00",'transactionname': 'Binod Salary', 'transactiondesc': 'Food','image': 'https://img.icons8.com/cotton/2x/bread--v2.png'},{"transaction":"- Rs 144.00",'transactionname': 'KFC Restaurant', 'transactiondesc': 'Food & Drink','image': 'https://img.icons8.com/cotton/2x/bread--v2.png'},{"transaction":"- Rs 24.00",'transactionname': 'New Fridge', 'transactiondesc': 'Subscription','image': 'https://img.icons8.com/cotton/2x/bread--v2.png'}])
  
    return(
        <div className={styles.container}>
             <div className={styles.search2}>
             <div className={styles.sn}>
             Today’s Transactions
             </div>
             <div className={styles.id}>
             -Rs 56,000
             </div>
           
         </div>
         {items.map((dat,index)=>
                  <div className={styles.search3}>
                  <div className={styles.sn1}>
                  <div className={styles.singleRow}>
               
                <div>
                <img className={styles.image} src={dat.image}>
                            </img>
                    </div>
                     
                 
                           
                           <div>
                           <div  className={styles.small1}>
                                {dat.transactionname}
                            </div>
                            <div className={styles.small2}>
                                {dat.transactiondesc}
                            </div>
                               </div>
                        </div>
                  </div>
                  <div className={styles.id1}>
                      {dat.transaction}
                  </div>
               
              </div>
         )}
        
            
        </div>
    )
}

export default LeftContainer