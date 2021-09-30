import React ,{ useState }from 'react'
import styles from './Inventory.module.css'

const Inventory=(props)=>{
    const [options,setOptions]=useState([{'name':'Add Inventory','total':'124','img':'/images/inventory.png'},{'name':'Add Bill','total':'124','img':'/images/bill.jpeg'},{'name':'Bill Gallery','total':'124','img':'/images/bills.jpeg'}])
   
    return(
        <div className={styles.container}>
        <div className={styles.table}>
            Products Management
        </div>
        <div className={styles.hr}/>
        <div className={styles.list}>
            {options.map((dat)=>
            <div className={styles.box} onClick={()=>props.history.push(`/settings/Inventory/${dat.name}`)}>
                <div className={styles.image}>
                    <img className={styles.image2} src={dat.img}/>
                </div>
                <div className={styles.text}>
                    {dat.name}
                </div>
                <div className={styles.text2}>
                    {dat.total} items in menu
                </div>
              
            </div>
            )}
        </div>
    </div>
    )
}

export default Inventory