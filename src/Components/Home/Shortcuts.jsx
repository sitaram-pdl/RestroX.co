import React from 'react'
import styles from './Shortcuts.module.css'

const Shortcuts=()=>{
    const options =[{'name':'Receiveable','desc':''},{'name':'Payable','desc':''},{'name':'Payable','desc':''},{'name':'Payable','desc':''}]
 
    return(
        <div className={styles.container}>
                <div className={styles.topRow} >
                    <div className={styles.topLeft}>
                        <div className={styles.title}>
                            Quick Actions
                        </div>
                     
                    </div>
                    <div className={styles.topRight}>

                    </div>
                </div>
            

                <div className={styles.orderList}>
                <div className={styles.boxType}>
                {options.concat(options).map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            {dat.name}
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                </div>)}
            </div>
                </div>
        </div>
    )
}

export default Shortcuts
