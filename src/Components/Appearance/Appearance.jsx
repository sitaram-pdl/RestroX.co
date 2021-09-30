import React from 'react'
import styles from './Appearance.module.css'
import Dark from './dark.png'
import White from './white.png'
import cx from 'classnames'
import {HiOutlineLightBulb} from 'react-icons/hi'
const Appearance=(props)=>{
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
            <div className={styles.title}>
                Theme
            </div>
            <div className={styles.box}>
                <div className={cx(styles.first,!props.theme?styles.highlight:styles.back)}  onClick={()=>props.onSwitch(true)}>
                    <img className={styles.image} src={Dark} />

                </div>
                <div className={cx(styles.first,props.theme?styles.highlight:styles.back2)}  onClick={()=>props.onSwitch(false)}>
                <img  className={styles.image} src={White}/>


                    </div>
                
    
            </div>
            <div className={styles.buttons}>
                    <div className={styles.row}>
                        <div className={cx(styles.button,!props.theme?styles.buttonH:null)} onClick={()=>props.onSwitch(true)}>
                         {
                             props.theme?'Dark':<HiOutlineLightBulb size='20'/>
                         }   
                            
                        </div>
                        <div className={cx(styles.button,props.theme?styles.buttonH:null)} onClick={()=>props.onSwitch(false)}>
                        {
                             !props.theme?'Light':<HiOutlineLightBulb size='20'/>
                         } 
                        </div>
                      
                    </div>
            </div>
        </div>
    )
}

export default Appearance