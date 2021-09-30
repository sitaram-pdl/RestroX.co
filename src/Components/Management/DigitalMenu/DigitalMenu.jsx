import React  ,{ useState }from 'react'
import styles from './MenuTypes.module.css'
import cx from 'classnames'
import { CSS_COLOR_NAMES } from '../../../api'
import OnlineMenu from '../OnlineMenu/OnlineMenu'

const Digital=(props)=>{
  

    return(
        <div className={styles.container}>
            <div className={styles.left}>

                    <div className={styles.table}>
              Digital Menu
            </div>
            <div className={styles.hr2} />
         
            <div className={styles.table3}>
                <div className={styles.row}>
                    <div>
                       Menus Types
                    </div>
                    <div className={styles.subText}>
                        Saved Menus
                    </div>
                </div>

                <div>
                  
                </div>
            </div>

            <div className={styles.boxType}>
                {[0, 1, 2, 3, 5].map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            Dine in Menu
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                </div>)}
            </div>
            <div className={styles.table3}>
                <div className={styles.row}>
                    <div>
                      Appearance
                    </div>
                    <div className={styles.subText}>
                        Saved Menus
                    </div>
                </div>
            </div>
            
            <div className={styles.boxType}>
                {[0, 1].map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            Dark
                        </div>
                    </div>
                </div>)}
            </div>
            </div>
           <div className={styles.left}>
            <OnlineMenu/>
           </div>
        </div>
    )
}

export default Digital