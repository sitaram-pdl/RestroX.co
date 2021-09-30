import React, { useState } from 'react'
import styles from './ListView.module.css'
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import cx from 'classnames'
const ListView=(props)=>{
    const[items,setItems]=useState([{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]},{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]},{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]},{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]},{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]},{'name':'Breakfast','item':[{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'},{'name':'Spicy Seasoned Food','Price':'200'}]}])
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
       {items.map((dat)=>
          <div className={styles.box}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        {dat.name}
                    </div>
                    <div className={styles.qty}>
                        Qty
                    </div>
                    <div className={styles.price}>
                        Price
                    </div>
                    
                </div>
                <div>
                    {dat.item.map((data)=>
                    <div className={cx(styles.head2,props.theme?styles.white2:null)}>
                    <div className={styles.title2}>
                       {data.name}
                    </div>
                    <div className={styles.qty2}>
                       <div>
                       <AiFillMinusCircle className={styles.button}/>
                         
                      </div>
                       <div className={styles.number}>
                           1
                       </div>
                       <div>
                           <AiFillPlusCircle className={styles.button}/>
                   
                       </div>
                       
                    </div>
                    <div className={styles.price2}>
                        Rs. {data.Price}
                    </div>
                    
                </div>
                )}
                
               </div>
            </div>
            
            )}
        </div>
    )
}

export default ListView