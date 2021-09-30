import React, { useState } from 'react'
import styles from '../Support/Support.module.css'
import cx from 'classnames'
import {FaFacebook} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai'
const Landing=(props)=>{
    const [supportData,setSupportData]=useState([{'name':'Regular','image':'/images/faq.png'},{'name':'Violations','image':'/images/start.png'},{'name':'Abuse','image':'/images/tips.png'}])
    return(
        <div className={styles.container}>
          
            <div className={styles.division}>
                <div className={styles.title}>
                    Select Category
                </div>
          
                    <div className={styles.subDivision}>
                       {
                           supportData.map((dat)=>
                            <div className={styles.box} onClick={()=>{props.history.push(`/settings/Support & Help/Report Problem/${dat.name}`)}}>
                                <img src={dat.image} className={styles.image2}/>
                                <div className={styles.name}>
                                    {dat.name}
                                </div>
                            </div>
                           )
                       }
                       
                    </div>
      
                    <div className={styles.lower2}>
                        <div className={styles.social2}>
                            <div>
                                Privacy
                            </div>
                            <div>
                                Security
                            </div>
                            <div>
                                Terms
                            </div>
                            <div>
                                License
                            </div>
                       
                        </div>
                    </div>
                  
            </div>
        </div>
    )
}
export default Landing