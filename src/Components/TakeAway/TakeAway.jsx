import { PropTypes } from "carbon-components-react"
import React, { useEffect, useState } from "react"
import styles from './TakeAway.module.css'
import {AiOutlineRight} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
const TakeAway=(props)=>{
  

        return(
        <div className={styles.container}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.secondRow}>
                <div className={styles.circle}>
                    15
                </div>
                <div className={styles.text}>
                    New Orders
                </div>
                <div className={styles.dot}>

                </div>
                <div className={styles.text}>
                    Manage Orders
                </div>
                <div className={styles.arrow}>
                    <AiOutlineRight/>
                </div>
            </div>
            <div className={styles.thirdRow}>
                <div className={styles.box }>
                    <div className={styles.number}>
                        15
                    </div>
                    <div className={styles.descNumber}>
                        On Pending
                    </div>
                </div>
                <div className={styles.box }>
                    <div className={styles.number}>
                        15
                    </div>
                    <div className={styles.descNumber}>
                        Served
                    </div>
                </div>
                <div className={styles.box }>
                    <div className={styles.number}>
                        15
                    </div>
                    <div className={styles.descNumber}>
                        Canceled
                    </div>
                </div>
            </div>
        { props.show ?  <div className={styles.alternative}>
                <div className={styles.line}>
                    <div className={styles.title3}>
                        Foodhunter
                    </div>
                    <div className={styles.lineBar}>
                    <Progress  
                     symbolClassName={styles.symbol}
                      percent={88}   />
                    </div>
                    <div className={styles.stats}>
                        250
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.title3}>
                        Self
                    </div>
                    <div className={styles.lineBar}>
                    <Progress  
                     symbolClassName={styles.symbol}
                      percent={88}   />
                    </div>
                    <div className={styles.stats}>
                        250
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.title3}>
                        Foodmood
                    </div>
                    <div className={styles.lineBar}>
                    <Progress  
                     symbolClassName={styles.symbol}
                      percent={88}   />
                    </div>
                    <div className={styles.stats}>
                        250
                    </div>
                </div>
            </div>:null}
            <div className={styles.lastRow}>
                <div>
                    Show More <BiChevronDown/>
                </div>
                <div>View Details <AiOutlineRight/></div>
            </div>
        </div>
    )
}

export default TakeAway