import React from 'react'
import styles from './OrderTable.module.css'

const OrderTable=()=>{
    return(
        <div className={styles.container}>
                <div className={styles.topRow} >
                    <div className={styles.topLeft}>
                        <div className={styles.title}>
                            Order
                        </div>
                        <div>
                            {new Date().toString().slice(0,10)}
                        </div>
                    </div>
                    <div className={styles.topRight}>

                    </div>
                </div>
                <div className={styles.tableRow}>   

                    <div className={styles.sn}>
                        S.N.
                    </div>
                    <div className={styles.kot}>
                        Kot No.
                    </div>
                    <div className={styles.sn}>
                       Table 
                    </div>
                    <div className={styles.amount}>
                        Amount
                    </div>
                </div>

                <div className={styles.orderList}>
              {[1,2,3,4,5,6].map((dat,index)=>  <div className={styles.tableRow2}>   

                    <div className={styles.sn}>
                        {index + 1}
                    </div>
                    <div className={styles.kot}>
                        osadajsd
                    </div>
                    <div className={styles.sn}>
                    2
                    </div>
                    <div className={styles.amount}>
                     Rs. {parseInt(index * Math.random()*1000)}
                    </div>
                    </div>)}
                </div>
        </div>
    )
}

export default OrderTable
