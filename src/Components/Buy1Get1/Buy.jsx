import React, { useState } from 'react'
import styles from './Buy.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoFilter} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import Switch from "react-switch";
const Buy=(props)=>{
    const[items,setItems]=useState([{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'false'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'}])
    return(
    <div className={styles.container}>
        <div className={styles.title}>
            Buy One Get One
        </div>
        <div className={styles.division}>
            <div className={styles.search}>
                <div className={styles.searchDiv}>
                    <div className={styles.logo}>
                       <AiOutlineSearch size='22'/>         
                    </div>
                    <input placeholder='Search Here' className={styles.input}/>
                </div>
                <div className={styles.rightIcons}>
                    <div className={styles.filter}>
                        <IoFilter/>
                    </div>
                    <div className={styles.dots}>
                        <BiDotsVerticalRounded/>
                    </div>
                </div>
            </div>
            <div className={styles.search2}>
                <div className={styles.id}>
                    ID
                </div>
                <div className={styles.code}>
                    Code
                </div>
                <div className={styles.offers}>
                    Offers
                </div>
                <div className={styles.start}>
                    Start Date
                </div>
                <div className={styles.start}>
                    End Date
                </div>
                <div className={styles.active}>
                    Activate
                </div>
            </div>
            {items.map((dat,index)=>
                     <div className={styles.search3}>
                     <div className={styles.id}>
                         {index+1}
                     </div>
                     <div className={styles.code}>
                         {dat.Code}
                     </div>
                     <div className={styles.offers}>
                         {dat.offers==''?"-":dat.offers}
                     </div>
                     <div className={styles.start}>
                         {dat.start.toDateString()}
                     </div>
                     <div className={styles.start}>
                         
                     {dat.end.toDateString()}
                     </div>
                     <div className={styles.active}>
                     <Switch onChange={null} uncheckedIcon={false} checkedIcon={false} disabled checked={dat.active=='true'?true:false} />
                     </div>
                 </div>
            )}
   
        </div>
    </div>
    )
}
export default Buy
