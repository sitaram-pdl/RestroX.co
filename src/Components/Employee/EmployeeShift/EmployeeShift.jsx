import react, { useState } from 'react'
import styles from './EmployeeShift.module.css'
import {BsPencil} from 'react-icons/bs'
import {HiPlus} from 'react-icons/hi'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const EmployeeShift=()=>{
    const [shift,setShift]=useState([{'startTime':'10 AM','endTime':'4 PM','users':[{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'}]},{'startTime':'10 AM','endTime':'4 PM','users':[{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'},{"name":'Swadesh Nepali',"type":'Waiter'}]}])
    return(
        <div className={styles.container}>
            {shift.map((dat)=><div className={styles.division}>
                <div className={styles.head}>
                    <div>
                        Shift 1 ({dat.startTime} - {dat.endTime})
                    </div>
                    <div className={styles.icons}>
                        <div>
                                <BsPencil size='19' color='white' />
                        </div>
                        <div>
                                 <HiPlus size='19' color='white' />
                        </div>
                    </div>
                </div>
                <div className={styles.boxOfUsers}>
                {dat.users.map((data)=>
                <div className={styles.box}>
                    <div className={styles.label}>
                        <div className={styles.img}  >
                            <img width='62px' height='62px' className={styles.image} src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'>
                            
                            </img>
                        </div>
                        <div className={styles.text}>
                            <div>
                                {data.name}
                            </div>
                            <div className={styles.lastline}>
                                <div className={styles.waiter}>
                                    {data.type}
                                </div>
                                <div>
                                    Details
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.menu}>
                                <BiDotsVerticalRounded/>
                        </div>
                    </div>

                </div>
                )}
                </div>
                
            </div>)}
        </div>
    )
}

export default EmployeeShift