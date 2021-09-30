import React,{useState} from 'react'
import styles from './LeftContainer.module.css'
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import cx from 'classnames'
const LeftContainer=(props)=>{
    const [items,setItems]=useState([{'name':'Dine In'},{'name':'Take Away'},{'name':'Delivery'}])
    
    return(
        <div  className={styles.container}>
            <div className={styles.back}>
                <BiArrowBack/>
                
            </div>
            <div>
                <div className={cx(styles.title2,props.theme?styles.white:null)}>
                    Confirmation
                </div>
                <div className={cx(styles.subTitle,props.theme?styles.white:null)}>
                    Order #3344
                </div>
                
                <div className={styles.hr}/>
                
            <div className={styles.table}>
                    <div className={cx(styles.legend,props.theme?styles.white2:null)}>
                        <div className={styles.item}>
                            Item
                        </div>
                        <div className={styles.qty}>
                            Qty
                        </div>
                        <div className={styles.price}>
                            Price
                        </div>
                    </div>
                    <div className={styles.itemsDiv}>
                   {items.map((dat)=>
                   <div>
                   <div className={cx(styles.legend,props.theme?styles.white2:null)}>
                        <div className={styles.item}>
                            <div className={styles.row}>
                                <div className={styles.image}>
                                    <img className={styles.image} src='https://www.southsidemarket.com/wp-content/uploads/2017/07/HeroFinal-69.jpg'/>
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.descText}>
                                        Spicy Seasoned Food
                                    </div>
                                    <div className={styles.priceDesc}>
                                        Rs. 200
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={cx(styles.qty2,props.theme?styles.qtColor:null)}>
                            3
                        </div>
                        <div className={styles.price2}>
                            Rs 200
                        </div>
                    </div>
                        <div className={styles.lowerDiv}>
                            <div className={cx(styles.textField,props.theme?styles.qtColor:null)}>
                                <input className={cx(styles.input,props.theme?styles.qtText:null)}placeholder='Order Note...'></input>
                            </div>
                            <div className={styles.remove}>
                                <AiOutlineDelete size='16' color='#FF7CA3'/>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className={styles.lowestDiv}>
                <div className={styles.hr}/>
                    <div className={styles.rowDiv}>
                        <div>
                            Discount
                        </div>
                        <div>
                            Rs
                        </div>
                    </div>
                    <div className={styles.rowDiv}>
                        <div>
                            Sub Total
                        </div>
                        <div>
                            Rs
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
        </div>
    )
}
export default LeftContainer