import React, { useState } from 'react'

import styles from "./Containersec.module.css"




const Containersec=()=>{
    const [option,setOption]=useState([{'name':'Staffs','images':'./images/customers.png'},{'name':'Holiday','images':'./images/delivery.png'},{'name':'Events','images':'./images/diein.png'},{'name':'Tasks','images':'./images/takeaway.png'},])

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

export default Containersec