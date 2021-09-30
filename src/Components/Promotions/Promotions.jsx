import React, { useState } from 'react'
import styles from './Promotions.module.css'
import cx from 'classnames'
const Promotions=(props)=>{
    const [item,setItems]=useState([{'name':'Top Ads','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Buy One Get One','desc':'Give a cashback voucer for your customer','link':'/promotion/buy1get1','image':'/images/One Free.png'},{'name':'Free Delivery','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Cashback Voucher','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Top Items','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Free Delivery','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Free Delivery','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Chef Recomendation','desc':'Make Your product to be first among search results.','image':'/images/ads.png'},{'name':'Create Custom Promotion','desc':'Make Your product to be first among search results.','image':'/images/ads.png'}])
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
            <div className={styles.title}>
                 Promotions
            </div>

            <div className={styles.addSection}>
                    <div className={styles.add}>
                        Add
                    </div>
                </div>
            <div className={styles.mainbox}>
               
                {item.map((dat)=>
                        <div className={cx(styles.box,props.theme?styles.whiteBox:null)} onClick={()=>props.history.push(dat.link)}>
                        <div className={styles.image}>
                            <img src={dat.image} width='70px' height='70px'>
                            
                            </img>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.subTitle}>
                                {dat.name}
                            </div>
                            <div className={styles.desc}>
                            {dat.desc}
                            </div>
                        </div>
                    </div>
                
                )}
            

            </div>
        </div>
    )
}

export default Promotions