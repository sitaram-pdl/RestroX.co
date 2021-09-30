import React, { useState } from 'react'
 import styles from './TaskManager.module.css'
import {RiRecordCircleFill} from 'react-icons/ri'
import cx from 'classnames';
import { tileProps } from 'react-calendar/src/shared/propTypes';
 const TaskManager=(props)=>{
     const[data,setData]=useState([{'name':'Interview for new waiter','desc':'          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, et doloribus quia tempore necessitatibus architecto nam eos. Dolorum ad asperiores, corrupti facere vitae ut repudiandae cumque ipsa. Enim, maxime.'},{'name':'Interview for new waiter','desc':'          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, et doloribus quia tempore necessitatibus architecto nam eos. Dolorum ad asperiores, corrupti facere vitae ut repudiandae cumque ipsa. Enim, maxime.'}])
    const[initial,setInitial]=useState(0);
        
   
     return(
         <div className={styles.container}>
         {data.map((dat,index)=>  <div  className={styles.pallete} onClick={()=>setInitial(index)}> 
                <div className={styles.icons}>  
                    <RiRecordCircleFill className={styles.dot} color='orange'/>
                    <div className={initial==index?styles.line:styles.line2}/>
                </div> 
                <div className={initial==index?styles.message:styles.message2}>
                    <div className={initial==index?styles.division:props.theme?styles.divison1:styles.divison}>
                        <div>
                            {dat.name}
                        </div>
                        <div className={styles.timeStamp}>
                            {new Date().toTimeString().substr(0,5) }
                        </div>

                    </div>
                    <div className={initial==index?styles.division2:props.theme?styles.whiteDiv:styles.divison2}>
                        <div>
                            {dat.desc}
                         </div>
                     </div>
                </div>
            </div>
            )}
         </div>
     )
 }
 export default TaskManager