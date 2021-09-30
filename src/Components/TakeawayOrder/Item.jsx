import React from 'react'
import { useState } from 'react'
import styles from './Delivery.module.css'

import {BsThreeDotsVertical,BsChevronCompactDown} from 'react-icons/bs'
import { PropTypes } from 'carbon-components-react'
const Item =(props)=>{
    const[show,setShow] = useState(false)

    return(
        <div className={styles.box} id={`${props.id}`}>
                    <div className={styles.topBox}>
                        <div className={styles.nameDiv}>
                            <div className={styles.name}>
                                Anis Acharya
                            </div>
                            <div>
                                Naya Bazar, 9813213400
                            </div>

                        </div>
                        <div className={styles.option}>
                            <BsChevronCompactDown size='1.5em'  className={styles.optionIcons} onClick={()=>{setShow((da)=>!da);props.setChange(show)}}/>
                            <BsThreeDotsVertical size='1.5em'  className={styles.optionIcons}/>
                        </div>
                    </div>
                   { show?<div className={styles.middleBox} id='desc' >
                       { [1,2,3,4,5,6,7].map((dat)=><div className={styles.boxItm}>
                            <div className={styles.itemLeft}>
                                <div className={styles.itmImage}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg'}/>
                                </div>
                                <div className={styles.itemNameDiv}>
                                    <div className={styles.itmName}>
                                        C. Momo
                                    </div>
                                    <div className={styles.itmPrice}>
                                        Rs 200
                                    </div>
                                </div>
                            </div>
                            <div className={styles.itemRight}>
                             
                                    <div >
                                        Rs 121323
                                    </div>
                                    <div className={styles.itmPrice}>
                                        2
                                    </div>
                                
                            </div>
                        </div>)}
                    </div>:null}
                    <div className={styles.bottomBox}>
                         <div className={styles.option}>
                            <img src='/icons/close.png'   className={styles.optionIcons2}/>
                            <img src='/icons/tick.png'  className={styles.optionIcons2}/>
                        </div>
                        <div className={styles.nameDiv2}>
                            <div className={styles.lowerName}>
                              <div>
                                  Sub 
                              </div>
                              <div>
                                  Qty
                              </div>
                            </div>
                           < div className={styles.lowerName2}>
                              <div>
                              Rs 1200
                             
                              </div>
                              <div>
                                  20
                              </div>
                            </div>
                            

                        </div>
                       
                    </div>
                </div>
    )
}
export default Item