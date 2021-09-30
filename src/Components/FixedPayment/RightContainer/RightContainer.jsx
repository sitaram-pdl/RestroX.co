import React, { useState } from 'react'
import styles from './RightContainer.module.css'
import {GiCash} from 'react-icons/gi'
import {MdDone} from 'react-icons/md'
import cx from 'classnames'
const RightContainer=(props)=>{
    const [payment,setPayment]=useState([{'name':'Cash'},{'name':'Card'},{'name':'PayPal'}])
    const [initial,setInitial]=useState(0)
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
                <div className={cx(styles.payment,props.theme?styles.white:null)}>
                    Payment
                </div>
                <div className={styles.available}>
                    3 payment method available
                </div>
                <div className={styles.hr}/>
                <div className={styles.method}>
                    <div className={styles.method}>
                        Payment Method
                    </div>
                    <div className={styles.rowIndex}>
                    <div className={styles.row}>
                       {payment.map((dat,index)=> 
                       <div onClick={()=>setInitial(index)} className={index==initial?styles.paymentMethod:styles.paymentMethod2}>
                            <div><GiCash/></div>
                            <div>{dat.name}</div>
                            {index==initial?<div className={styles.tick}>
                                <MdDone />
                            </div>:null}
                        </div>
                        )}
                    </div>
                    </div>
                    <div className={styles.done}>
                        <div className={styles.orderType}>
                           Order Type
                        </div>
                        <div className={styles.tableNo}>
                            Table no.
                        </div>
                        
                    </div>
                    <div className={styles.done}>
                        <div className={cx(styles.cancel2,props.theme?styles.white:null)}>
                            <div>
                                Dine In
                            </div>
                        </div>
                        <div className={cx(styles.confirm2,props.theme?styles.whiteBox:null)}>
                            <div>
                                5
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.done}>
                        <div className={styles.cancel}>
                            Cancel
                        </div>
                        <div className={styles.confirm} onClick={()=>props.clicked}>
                        Confirm Payment
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
export default RightContainer