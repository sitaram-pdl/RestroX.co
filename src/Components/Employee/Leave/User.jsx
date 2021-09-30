import React ,{useState,useEffect} from 'react'
import styles from "./Landing.module.css"
import {BiDotsVerticalRounded} from 'react-icons/bi'
import cx from "classnames"

const User=(props)=>{
    const[items,setItems]=useState([{"name":"Swadesh Nepali","type":"Medical Leave","from":"2 Jan 2020","to":"3 Jan 2020","days":"2 days","reason":"To go Hospital","status":"Approved"}])
    const [data,setData]=useState([{"name":"Today Present","amount":"22/89"},{"name":"Planned Leave","amount":"8"},{"name":"Unplanned Leave","amount":"1"},{"name":"Pending Leave","amount":"22"}])
 
    const [category,setCategory]=useState([{'name':'All','count':'1'},{'name':'Reception','count':'1'},{'count':'1','name':'Helper'}])
    const [num,setNum]=useState(0)
    const [name,setName]=useState(null)
  
    return(
        <div className={styles.container}>
            
            <div className={styles.profile}  onClick={()=>props.setName(null)} >
                             <img className={styles.image2} src='https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' />
                            <div className={styles.profName}>
                                 Swadesh Nepali
                            </div>
                            
                        
            </div>
            <div className={styles.division2}>
          
            <div className={styles.search2}>
              
              
               
                        <div className={styles.start}>
                      
                        Leave Type
                        
                        
                    </div>
                    
                
                    <div className={styles.start}>
                      
                      From
                      
                      
                  </div>
                  
                  <div className={styles.start}>
                      
                      To
                      
                      
                  </div>
                  
                  <div className={styles.start}>
                      
                      No of Days
                      
                      
                  </div>
                  <div className={styles.start}>
                      
                      Reason
                      
                  </div> 
                  <div className={styles.code2}>
                   Approved By
                </div>
                  <div className={styles.start}>
                      
                      Status
                      
                  </div> 
                
                <div className={styles.active}>
                    
                </div>
            </div>
            <div className={styles.overflowContainer}>

                {items.map((dat,index)=>
                     <div className={styles.search3}>
                   
                 
                   
                    <div className={styles.start2} >
                        {dat.type}         
                    </div>
                    <div className={styles.start2} >
                        {dat.from}         
                    </div>
                    <div className={styles.start2} >
                        {dat.to}         
                    </div>
                    <div className={styles.start2} >
                        {dat.days}         
                    </div>
                    <div className={styles.start2} >
                        {dat.reason}         
                    </div>
                    <div className={styles.code2}>
                   {dat.name}
                </div>
                    <div className={styles.start2} >
                        {dat.status}         
                    </div>
                   
                   
                    
                     <div className={styles.active}>
                     <BiDotsVerticalRounded />
                     </div>
                 </div>
            )}
           </div>
         
        </div>
        </div>
    )
}

export default User