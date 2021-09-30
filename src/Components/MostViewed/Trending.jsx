import React, { useState } from "react"
import styles from "./Trending.module.css"

const MostViewed=()=>{
    const [data,setData]=useState([{"name":"Medium Spicy Momo With Tuna","img":"https://image.freepik.com/free-photo/traditional-asian-noodles-bowls-with-steamed-dumplings-black-backdrop_23-2148123607.jpg","price":"200","sales":"312","prev":"+20"},{"name":"Medium Spicy Momo With Tuna","img":"https://image.freepik.com/free-photo/traditional-asian-noodles-bowls-with-steamed-dumplings-black-backdrop_23-2148123607.jpg","price":"200","sales":"312","prev":"+20"}])
    return(
        <div className={styles.container}>
                <div className={styles.header}>
                <div className={styles.title}>
                   Trending Items
                </div>
                <div>
                   <div className={styles.picker}>
                   </div>
                </div>
            </div>
            <div className={styles.list}>
                {
                    data.map((dat,index)=>
                    <div className={styles.line}>
                        <div className={styles.index}>
                            # {index + 1 }
                        </div>
                      
                        <div className={styles.descDiv}>
                            <div className={styles.name}>
                                {dat.name}
                            </div>
                            <div className={styles.price}>
                               Rs. {dat.price}
                            </div>
                        </div>
                      
                        <div className={styles.imageDiv}>
                            <img src={dat.img} className={styles.image}  />
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default MostViewed