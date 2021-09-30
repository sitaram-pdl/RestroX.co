import React, { useState } from 'react'
import styles from './Support.module.css'
import Animation from './giphy.gif'
import cx from 'classnames'
import {FaFacebook} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai'
const Support=(props)=>{
    const [supportData,setSupportData]=useState([{'name':'FAQ','image':'/images/faq.png'},{'name':'Get Started','image':'/images/start.png'},{'name':'Tips','image':'/images/tips.png'},{'name':'User Manual','image':'/images/manual.png'},{'name':'Report Problem','image':'/images/problem.png'},{'name':'Send Suggestions','image':'/images/suggestion.png'},{'name':'Contact','image':'/images/suggestion.png'}])
    return(
        <div className={styles.container}>
            {/* <div className={styles.animation}>
                <img className={styles.image} src={Animation}/>
            </div> */}
            <div className={styles.division}>
                <div className={styles.title}>
                    How Can We Help you?
                </div>
                <div className={styles.inputDiv}>

                 <div className={cx(styles.search,props.theme?styles.whiteBox:null)}>
                        <div className={styles.searchIcon} >
                            <FiSearch/>
                        </div>
                       
                            <div className={styles.inputField}>
                                <input className={cx(styles.input,props.theme?styles.inputWhite:null)} placeholder='What you looking for..' />
                            </div>
                    </div>
                    </div>
                    <div className={styles.subDivision}>
                       {
                           supportData.map((dat)=>
                            <div className={styles.box} onClick={()=>{props.history.push(`/settings/Support & Help/${dat.name}/0`)}}>
                                <img src={dat.image} className={styles.image2}/>
                                <div className={styles.name}>
                                    {dat.name}
                                </div>
                            </div>
                           )
                       }
                       
                    </div>
                    <div className={styles.lower}>
                        <div className={styles.social}>
                            <FaFacebook color='#0F89E3' size='29'/>
                                <AiOutlineTwitter color='#138DE5' size='29'/>
                                <AiOutlineInstagram color='#BF3AAC' size='29'/>
                                <AiOutlineYoutube  color='#FF0000' size='29'/>
                        </div>
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
                    <div className={styles.lower3}>
                        <div className={styles.social2}>
                            <div>
                            Copyright  @{new Date().getFullYear()}   RestroX
                            </div>
                          
                       
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}
export default Support