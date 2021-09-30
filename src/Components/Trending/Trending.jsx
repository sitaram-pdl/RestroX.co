import React, { useState } from "react"
import styles from "./Trending.module.css"

const Trending=()=>{
    const [data,setData]=useState([{"name":"Medium Spicy Momo With Tuna","img":"https://t3.ftcdn.net/jpg/02/58/07/32/360_F_258073208_ZxfkhXfK9eD94LahpmyGnWsWpBxFxijM.jpg","price":"200","sales":"312","prev":"-20"},{"name":"Medium Spicy Momo With Tuna","img":"https://img.etimg.com/thumb/msid-70813564,width-650,imgsize-348620,,resizemode-4,quality-100/momos.jpg","price":"200","sales":"312","prev":"+20"}])
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
                        <div className={styles.imageDiv}>
                            <img src={dat.img} className={styles.image}  />
                        </div>
                        <div className={styles.descDiv}>
                            <div className={styles.name}>
                                {dat.name}
                            </div>
                            <div className={styles.price}>
                               Rs. {dat.price}
                            </div>
                        </div>
                        <div className={styles.imageDiv2}>
                           
                        {dat.prev.slice(0,1)=="+"?<img src={"./Icons/Vector.png"} className={styles.image2}  />: <img src={"./Icons/Negative.png"} className={styles.image2}  />}
                        </div>
                        <div className={styles.descDiv2}>
                            <div className={styles.name2}>
                                {dat.sales}
                            </div>
                            <div className={styles.price}>
                              Sales ({dat.prev}%)
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Trending