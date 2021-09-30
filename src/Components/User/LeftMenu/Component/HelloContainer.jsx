import {React ,useState}from "react"

import styles from "./HelloContainer.module.css"
import Hello from '../../Images/hellocontainimg.svg'



const HelloContainer=()=>{

    const [option,setOption]=useState([{'name':'Manish poudel', 'newaplication':'16'},])
    const [option1,setOption1]=useState([{'name':'Customers'},{'name':'Delivery'},{'name':'Die In'},{'name':'Take Away'},])

    return(
  

   
        <div className={styles.container}>
            <div className={styles.rightContainer}>
          {option.map((dat,index)=>
          <div>
                           <div className={styles.hello} >
                               Hello {' '}
                            {dat.name.split(' ').slice(0, -1).join(' ')} !
                           </div>
                           <div className={styles.small1}>
                           You have 16 new applications. It is a lot of work for today! So let’s start
                               </div>
                           </div>
                        
                    )}
                 
              <div  className={styles.reviewit}>
                  Review it!
              </div>
        
        </div>
        <div className={styles.leftContainer}>
        <img className={styles.image} src={Hello}>
                            </img>
            </div>
            
        </div>
       
       
    )
}

export default HelloContainer