import React ,{useState} from 'react'
import styles from './Review.module.css'
import cx from 'classnames'
import {IoIosStarOutline} from 'react-icons/io'
import {FcGoogle} from 'react-icons/fc'
const Review=()=>{
    const [employeeList,setEmployeeList]=useState([{'name':'All'},{'name':'Unread'},{'name':'Read'}])
    const [tab,setTab]=useState(0)
    const [data,setData]=useState([{'name':'Subin Bhandari'},{'name':'Subin Bhandari','img':'https://4.img-dpreview.com/files/p/TS560x560~forums/59129256/607c1978da4a4db6ab91977802ee4aba'},{'name':'Swadesh Nepali'},{'name':'Binod Banstola'},{'name':'Anis Acharya'}])
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Reviews
            </div>
            <div className={styles.employee}>
                {employeeList.map((dat,index)=>
                    <div className={cx(styles.list,tab==index?styles.red:null)} onClick={()=>setTab(index)}>
                    {dat.name}
                </div>
           
                )}
                 </div>
                 <div className={styles.mainDiv}>
                    {data.map((dat)=>
                    
                     <div className={styles.subDiv}>
                        <div className={styles.topRow}>
                            <div>
                                <img src={dat.img?dat.img:'/images/user.jpeg'} className={styles.image}/>
                            </div>
                            <div className={styles.nameBar}>
                                <div className={styles.name}>
                                    {dat.name}
                                </div>
                                <div className={styles.review}>
                                <IoIosStarOutline color='yellow'/>    4.5 / 5
                                </div>
                            </div>
                            <div className={styles.google}>
                                <FcGoogle size={20}/>
                            </div>
                        </div>
                        <div className={styles.desc}>
                            <div className={styles.desc2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique veritatis exercitationem fuga omnis facilis laborum ut voluptate recusandae quo, quas assumenda, quia, corrupti beatae molestias amet ab culpa? Quos.
                    
                            </div>
                        </div>
                     </div>
                         )}
                
                 </div>
        </div>
    )
}

export default Review