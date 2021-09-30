import React, { useState } from 'react'

import styles from "./Containersecondary.module.css"




const Containersecondary=()=>{
    const [option,setOption]=useState([{'name':'Customers','images':'./images/customers.png'},{'name':'Delivery','images':'./images/delivery.png'},{'name':'Die In','images':'./images/diein.png'},{'name':'Take Away','images':'./images/takeaway.png'},])

    return(
        <div className={styles.container}>
              {option.map((dat,index)=>
                  <div className={styles.card}>
                      <div className={styles.imgcontain}>
                      <img className={styles.images} src={dat.images}></img>
                      </div>
                      <div className={styles.name}>
                      {dat.name}
                          </div>

                  </div>
               )}

           
        </div>
    )
}

export default Containersecondary