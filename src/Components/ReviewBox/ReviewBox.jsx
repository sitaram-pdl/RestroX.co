import React, { useState } from 'react'
import styles from './ReviewBox.module.css'
import {VscPreview} from 'react-icons/vsc'
import {AiFillStar,AiOutlineRight} from 'react-icons/ai'
import cx from 'classnames'
const ReviewBox=(props)=>{
    const [demo,setDemo]=useState([{'name':'Subin Bhandari','time':'20','rating':'4','review':'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam nesciunt accusamus totam autem praesentium minima dolor, unde molestias quas nostrum et laborum ipsa doloribus debitis natus cum voluptatum eos.'},{'name':'Subin Bhandari','time':'20','rating':'4','review':'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam nesciunt accusamus totam autem praesentium minima dolor, unde molestias quas nostrum et laborum ipsa doloribus debitis natus cum voluptatum eos.'},{'name':'Subin Bhandari','time':'20','rating':'4','review':'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam nesciunt accusamus totam autem praesentium minima dolor, unde molestias quas nostrum et laborum ipsa doloribus debitis natus cum voluptatum eos.'},{'name':'Subin Bhandari','time':'20','rating':'4','review':'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam nesciunt accusamus totam autem praesentium minima dolor, unde molestias quas nostrum et laborum ipsa doloribus debitis natus cum voluptatum eos.'}])
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)} >
                <div className={styles.top}>
                    <div>
                        <VscPreview color='#ADB5BD' size='22' />
                    </div>
                    <div className={cx(styles.topText,props.theme?styles.whiteText:null)}>
                        <div>
                            Customer Review
                        </div>
                        <div className={styles.subText}>
                            Messages
                        </div>
                    </div>
                </div>
                <div className={cx(styles.reviews,props.theme?styles.white2:null)}>
                 {demo.slice(0,9).map((dat)=>   <div className={styles.individual}>
                        <div className={styles.reviewTop}>
                            <div className={props.theme?styles.name:styles.name2}>
                                {dat.name}
                            </div>
                            <div className={styles.time}>
                                {dat.time} min ago
                            </div>
                            <div className={styles.rating}>
                                <AiFillStar color='yellow'/>
                                <div>
                                    {dat.rating}/5
                                </div>
                            </div>
                        </div>
                        <div className={styles.message}>
                                {dat.review}                 
                        </div>
                        <div className={styles.line}/>
                    </div>
                    )}
                </div>
                <div className={styles.lowerDiv}>
                    <div>
                        See All Reviews
                    </div>
                    <div className={styles.seperator}>
                        <AiOutlineRight/>
                    </div>
                </div>
        </div>
    )
}

export default ReviewBox