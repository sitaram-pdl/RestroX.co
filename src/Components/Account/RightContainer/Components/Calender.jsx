import React,{useEffect, useState} from 'react'
import styles from './Calender.module.css'
import {AiOutlinePlus} from 'react-icons/ai'
import Calendar from '../../../react-calendar/src'
import cx from 'classnames'
import '../../../react-calendar/dist/Calendar.css';

const Calender=(props)=>{
    const [value, onChange] = useState(new Date());

    const [trigger, setTrigger] = useState(12);
    useEffect(()=>{
            let c= document.getElementsByClassName('react-calendar');
            let d=c[0].getElementsByTagName("button")
            let e=document.getElementsByClassName("react-calendar__navigation")
            let f=e[0].getElementsByTagName("button")
                if(props.theme){
                    c[0].style.setProperty('color','black','important')
                for(var i=0;i<d.length;i++){
                    d[i].style.setProperty('color', 'black', 'important');
                }
                for(var i=0;i<f.length;i++){
                    f[i].style.setProperty('color', 'black', 'important');
                }
        
                    }
                    else{
                        c[0].style.setProperty('color','white','important')
                        for(var i=0;i<d.length;i++){
                            d[i].style.color='white';
                        }
                        for(var i=0;i<f.length;i++){
                            f[i].style.setProperty('color', 'white', 'important');
                        }
                    }

    },[props.theme,trigger,value])
    
        return(
                    <div className={styles.container}>
                      
                      
                        <div className={styles.timeTask}>
                            <div className={cx(styles.time,props.theme?styles.white2:null)}>
                            <div>
                              
                              Transaction
                            
                            </div> 
                                {/* <div className={styles.today}>
                                {/* {value.toISOString().slice(0,10)}  
                        Today
                                </div> */}
                            </div>
                            
                            <div className={styles.button}>
                                <div>
                                <AiOutlinePlus/>
                                </div>
                                <div className={styles.textTask}>
                                    Add Task
                                </div>
                            </div>
                        </div>
                        <div className={styles.calender} onClick={()=>setTrigger(Math.random())}> 
                        <Calendar
                        onChange={onChange}
                        
                    
                        calendarType='US'
                        />
                        </div>
                        <div>
                          
                        </div>
                    </div>
    )
} 
export default Calender