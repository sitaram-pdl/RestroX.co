import React from 'react'
import styles from './FixedPayment.module.css'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'
import cx from 'classnames'
const FixedPayment=(props)=>{
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
                <div className={styles.left}>
                    <LeftContainer {...props}/>
                </div>
                <div className={styles.right}>
                    <RightContainer {...props} clicked={props.clicked}/>
                </div>
        </div>
    )
}

export default FixedPayment