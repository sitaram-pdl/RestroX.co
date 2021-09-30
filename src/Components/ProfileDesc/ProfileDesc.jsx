import React, { useState } from 'react'
import styles from './ProfileDesc.module.css'
import cx from 'classnames'
import Portfolio from './Portfolio/Portfolio'
import { BackDrop, RightTask } from '..'
import {AiOutlineInstagram,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
import Attendance from './Attendance/Attendance'
import Review from './Review/Review'
import Basic from './Basic/Basic'
import Modal from '../Employee/Modal/Modal'
import Details from './Modal/Modal'
import Emergency from './Emergency/Emergency'
import Family from './Family/Emergency'
import Salary from './Salary/Salary'
import SalaryModal from './SalaryModal/Modal'
import Education from './Education/Emergency'

 const ProfileDesc=(props)=>{
     const [categories,setCategories] = useState([{'name':'Portfolio'},{'name':'Attendance'},{'name':'Salary'},{'name':'About'},{'name':'Review'}])
     const [count,setCount]=useState(0)
     const [modal,setModal]=useState(false)
     const [name,setName]= useState("")
     const clicked=(a)=>{
        setModal(!modal)
        
        setName(a)
    }
     return(
         <div className={styles.container}>
             <div className={styles.leftContainer}>
                    <div className={styles.nameBar}>
                        <div onClick={()=>props.history.push('/employee')} className={styles.name}>
                            Employee 
                        </div>
                        <div className={styles.name}>
                            / 
                        </div>
                        <div className={styles.id}>
                            {props.match.params.id}    
                        </div>
                        
                    </div>
                    <div className={styles.topDiv}>
                        <div className={styles.left}>
                            <div className={styles.image2}>
                                <img className={styles.image} src='https://i.pinimg.com/originals/c7/25/8b/c7258ba5f1701624597d9fb958029fc8.jpg'/>
                            </div>     
                            <div>
                                {props.match.params.id}
                            </div>
                            <div className={styles.cashier}>
                                Cashier @{props.match.params.id.substr(0,7)}
                            </div>
                            <div className={styles.icons}>
                                <div className={styles.icon}>
                                    <AiOutlineInstagram color='#BF3AAC' size='20'/>
                                </div>

                                <div className={styles.icon}>
                                    <FaFacebook color='#0F89E3' size='20'/>
                                </div>
                                <div className={styles.icon}>
                                    <FaTwitter color='#138DE5' size='20'/>
                                </div>
                            </div>
                           
                            <div className={styles.call}>
                                <div className={styles.button}>
                                    Call
                                </div>
                                <div className={styles.button}>
                                    Message
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                Basic Information
                            </div> 
                            <div className={styles.desc}>
                                <div className={styles.individual}>
                                    <div>
                                        Gender
                                    </div>
                                    <div className={styles.subText}>
                                        Male
                                    </div>
                                </div>
                                <div className={styles.individual}>
                                    <div>
                                        Birthday
                                    </div>
                                    <div className={styles.subText}>
                                        {new Date().toDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.desc}>
                                <div className={styles.individual}>
                                    <div>
                                        Email
                                    </div>
                                    <div className={styles.subText}>
                                        swadesh@blacktech.com.np
                                    </div>
                                </div>
                                <div className={styles.individual}>
                                    <div>
                                        Birthday
                                    </div>
                                    <div className={styles.subText}>
                                        {new Date().toDateString()}
                                    </div>
                                    
                                </div>
                                <div className={styles.individual}>
                                    <div>
                                        Birthday
                                    </div>
                                    <div className={styles.subText}>
                                        {new Date().toDateString()}
                                    </div>
                                    
                                </div>
                            </div>
                        
                            <div className={styles.desc}>
                                <div className={styles.individual}>
                                    <div>
                                        Email
                                    </div>
                                    <div className={styles.subText}>
                                        swadesh@blacktech.com.np
                                    </div>
                                </div>
                                <div className={styles.individual}>
                                    <div>
                                        Birthday
                                    </div>
                                    <div className={styles.subText}>
                                        {new Date().toDateString()}
                                    </div>
                                    
                                </div>
                                <div className={styles.individual}>
                                    <div>
                                        Birthday
                                    </div>
                                    <div className={styles.subText}>
                                        {new Date().toDateString()}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskNotes}>
                            
                        </div>
                    </div>
                    <div className={styles.lowerDiv}>
                        <div className={styles.row}>
                               {
                                   categories.map((dat,index)=>
                                   <div onClick={()=>setCount(index)} className={cx(styles.portfolio,count!=index?styles.white:null)}>
                                  {dat.name}
                               </div>
                               
                                   )
                               } 
                        </div>
                        {count===0?<Basic  clicked={clicked} {...props}/>:null}
                        {count===1?<Attendance {...props}/>:null}
                        {count===2?<Salary clicked={clicked} {...props}/>:null}
                        {count===3?<Portfolio {...props}/>:null}
                        
                        {count===4?<Review {...props}/>:null}
                    </div>
             </div>

             {modal? <div className={styles.modal}>
                    <BackDrop clicked={clicked} />
                    {name==="Personal Info"? <Details/>:null}
                    {name==="Emergency"? <Emergency/>:null}
                    {name==="Family"? <Family/>:null}
                    {name==="salary"? <SalaryModal/>:null}
                    {name==="Education"? <Education/>:null}
                    {name==="Experience"? <Education/>:null}
                             
                 </div>:null
}
         </div>
     )
 }

 export default ProfileDesc