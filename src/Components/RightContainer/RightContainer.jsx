import React, { useState } from "react"
import styles from './RightContainer.module.css'
import Message from './message.png'
import Notification from './notification.png'
import {BiMessageSquareDots} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {LineGraph, NavElements} from '../'
import Dropdown from '../react-dropdown'
import '../react-dropdown/style.css';
import cx from 'classnames'
const RightContainer=(props)=>{
    const [dishes,setDishes]=useState([{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'},{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'},{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'},{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'},{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'},{'name':'Spicy Seasoned Seafood','total':'30','img':'https://envato-shoebox-0.imgix.net/a8e4/9a25-dfa0-40e1-a766-6cc80d321954/DSC_4951.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=92844d3783ff448a0b2064a8a192a114'}])
    const options = [
        { value: 'Most Ordered', label: 'Most Ordered' },
        { value: 'Most Reviewed', label: 'Most Reviewed' }, 
        { value: 'Most Order Type', label: 'Most Order Type' },
        { value: 'Most Delivered', label: 'Most Delivered' },
        
        ]
           
    return(
    <div className={styles.container}>
     
        <div className={cx(styles.mostOrdered,props.theme?styles.whiteBox:null)}>
            <div className={cx(styles.title,props.theme?styles.whiteText:null)}>
              <div> ITEMS</div> 
              <div> <Dropdown options={options} value={'Most Ordered'}  placeholder="Select an option"/></div>
            </div>
            <div className={styles.hr}/>
            <div className={styles.orderHeight}>

            {dishes.slice(0, 6).map((dat)=><div className={styles.dishes}>
                <div>
                    <img className={styles.image2} src={dat.img}/>
                </div>
                <div className={cx(styles.foods,props.theme?styles.whiteText:null)}>
                    <div>
                        {dat.name}
                    </div>
                    <div className={styles.total}>
                        {dat.total} dishes ordered
                    </div>
                </div>  
            </div>
            )}
            </div>
            <div className={styles.button}>
                View All
            </div>
        </div>
        {
        props.where=='Home'?<div className={cx(styles.mostOrdered2,props.theme?styles.whiteBox:null)}>
        <div className={cx(styles.title,props.theme?styles.whiteText:null)}>
              <div> Most Type of Order</div> 
              <div>  Here</div>
            </div>
            <div className={styles.hr}/>
            <LineGraph theme={props.theme}/>
            </div>:
            <div className={cx(styles.mostOrdered2,props.theme?styles.whiteBox:null)}>
            <div className={cx(styles.title,props.theme?styles.whiteText:null)}>
                  <div> Quick Actions</div> 
                  <div>  Here</div>
                </div>
                <div className={styles.hr}/>
                <NavElements theme={props.theme}/>
                </div>
            }
    </div>
    )
}

export default RightContainer