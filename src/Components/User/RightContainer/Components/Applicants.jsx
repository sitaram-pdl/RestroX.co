import React, { useState } from 'react'
import cx from 'classnames'
import styles from "./Applicants.module.css"

import {AiFillStar } from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'

import 'antd/dist/antd.css'; 
import { Switch } from 'antd';


const LeftContainer=()=>{
    const[items,setItems]=useState([{'transactionname': 'Subin Bhandari', 'transactiondesc': 'Chef','image': 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'},{'transactionname': 'Subin Bhandari', 'transactiondesc': 'Chef','image': 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'},{'transactionname': 'Subin Bhandari', 'transactiondesc': 'Chef','image': 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'},{'transactionname': 'Subin Bhandari', 'transactiondesc': 'Chef','image': 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'},{'transactionname': 'Subin Bhandari', 'transactiondesc': 'Chef','image': 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'}])
  
    return(
        <div className={styles.container}>
             <div className={styles.search2}>
             <div className={styles.sn}>
             New Applicants
             </div>
             <div className={styles.id}>
             See All
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
                                <div>
                               Applied for </div>
                               <div  className={styles.desc} > {dat.transactiondesc} </div>
                            </div>
                               </div>
                        </div>
                  </div>
                  <div className={styles.id1}>
                  View CV
                  </div>
               
              </div>
         )}
        
            
        </div>
    )
}

export default LeftContainer