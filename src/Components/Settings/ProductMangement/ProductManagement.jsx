import React, { useState } from 'react'
import styles from './ProductManagement.module.css'
const ProductManagement=(props)=>{
    const [options,setOptions]=useState([{'name':'View Menu','total':'124','img':'/images/menu.jpeg'},{'name':'Review Price','total':'124','img':'/images/menu.jpeg'},{'name':'Add Items','total':'124','img':'/images/burger.png'}])
    return(
    <div className={styles.container}>
        <div className={styles.table}>
            Products Management
        </div>
        <div className={styles.hr}/>
        <div className={styles.list}>
            {options.map((dat)=>
            <div className={styles.box} onClick={()=>props.history.push(`/settings/Product Management/${dat.name}`)}>
                <div className={styles.image}>
                    <img className={styles.image2} src={dat.img}/>
                </div>
                <div className={styles.text}>
                    {dat.name}
                </div>
                <div className={styles.text2}>
                    {dat.total} items in menu
                </div>
                <div className={styles.button}>
                    Edit Dish
                </div>
                
            </div>
            )}
        </div>
    </div>
    )
}

export default ProductManagement