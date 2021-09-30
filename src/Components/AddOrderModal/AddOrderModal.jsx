import React , { useState } from 'react'
import styles from './AddModal.module.css'
import cx from 'classnames'
import { Right, StoriesHeader, Tables} from '../'
import Tabs from './Tabs'
import Delivery from './Delivery'
import TakeAway from './TakeAway'
const AddModal=(props)=>{
    const [num,setNum]=useState(0)
  const [floor,setFloor] = useState(0)
 const renderHelper=()=>{
        switch(num){
          case 0:
            return ( 
            <div className={styles.storiesDiv2}>
            <Tables theme={props.theme} {...props}/>  
        
            </div>
          )
            case 1: 
            return(
                <Delivery/> )
             case 2: 
                return(
                    <TakeAway/> )
             
        }
  }
       return(
        <div className={styles.container2}>
          
           
        <Tabs num={num} setNum={setNum}/>

       {renderHelper()}
        <div className={styles.rightContainer}>
         
         </div>
        </div>
    )
}

export default AddModal