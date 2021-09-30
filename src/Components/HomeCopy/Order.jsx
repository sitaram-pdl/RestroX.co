import React, { useState } from 'react'
import styles from './Home.module.css'
import Demo from './demo.png'
import cx from 'classnames'
import { Right, StoriesHeader, Tables} from '../'
import Tabs from '../Tabs/Tabs'
import Summary from './Summary'
import OrderTable from './OrderTable'
import Shortcuts from './Shortcuts'
import Delivery from '../Delivery/Delivery'
import Takeaway from '../TakeawayOrder/Delivery'
const Order=(props)=>{
  const [num,setNum]=useState(0)
  const [floor,setFloor] = useState(0)
 const renderHelper=()=>{
        switch(num){
          case 0:
            return ( <div className={styles.secondRow}>
            <div className={styles.storiesDiv2}>
            <Tables theme={props.theme} {...props}/>  
        
            </div>
            <div className={styles.rightDiv}>
            <OrderTable/>
  
            <Shortcuts/>
            </div>
          </div>)
            
          case 1:
            return <Delivery/>

            case 2:
            return (<Takeaway/> )
          
        }
  }
       return(
        <div className={styles.container2}>
          <div className={styles.overview2}>
                Orders
            </div>
           <div className={styles.top}> 
            <div className={styles.storiesDiv2}>
            <StoriesHeader {...props}/>

            </div>
           <div className={styles.rightDiv}>
           <Summary/>
         
           </div>
           
   
        </div>
        <div>
        <Tabs num={num} setNum={setNum}/>

        </div>
       {renderHelper()}
        <div className={styles.rightContainer}>
         
         </div>
        </div>
    )
}
export default Order