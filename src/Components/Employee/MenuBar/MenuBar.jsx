import React, { useState } from "react"
import styles from './MenuBar.module.css'
import {AiOutlineHeart} from 'react-icons/ai'

import {IoIosArrowBack} from 'react-icons/io'
import cx from 'classnames'
const MenuBar=(props)=>{
    const [options,setOptions]=useState([{'name':'Staff Profile','desc':'Manage Your Product,Pricing'},{'name':'Staff Shifts','desc':'Manage Your Product,Pricing'},{'name':'Salary Report','desc':'Promote your Business'},{'name':'Attendance','desc':'Manage Your Product,Pricing'},{'name':'Holidays','desc':'Manage Staffs  Holidays'},{'name':'Leave','desc':'Manage Staffs Leave'},{'name':'Payroll Items','desc':'Promote your Business'}])
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
            <div className={styles.items}>
            <div className={cx(styles.list2)} >
                  <div className={styles.image} onClick={()=>props.history.goBack()}>
                      <IoIosArrowBack/>
                  </div>
                  <div className={styles.singleRow2}>
                      <div>
                         Staffs
                      </div>
                   
                  </div>
              </div>
              <div className={styles.menuItemsColumn}>
             {
                  options.map((dat,index)=><div className={cx(styles.list,props.tab===index?styles.tomato:null)} onClick={()=>props.routing(index)}>
                  <div className={styles.image}>
                      <AiOutlineHeart/>
                  </div>
                  <div className={styles.singleRow}>
                      <div>
                         {dat.name}
                      </div>
                      <div className={styles.small2}>
                          {dat.desc}
                      </div>
                  </div>
              </div>
              )
             }
               </div>
        
            </div>
        </div>
    )
}

export default MenuBar