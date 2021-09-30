import React, { useState } from 'react'
import styles from './SortingView.module.css'
import Switch from "react-switch";
import {MdDone} from 'react-icons/md'
const SortingView=(props)=>{
    const enterHandle=()=>{
        let a = document.getElementById('view')
        a.style.display='flex';
        let b=document.getElementById('view2');
        b.style.display='none'
    }
    const leaveHandle=()=>{
        let a = document.getElementById('view')
        a.style.display='none';
        let b=document.getElementById('view2');
        b.style.display='none'
    }
    return(
        <div className={styles.container} onMouseLeave={()=>leaveHandle()}>
            <div className={styles.select}>

            
            <div className={styles.name} onMouseEnter={()=>enterHandle()}>
                View
            </div>
           
            <div className={styles.name}>
                Sort By
            </div>
            </div>
            <div className={styles.left} id='view'>
            <div className={styles.column} onClick={()=>{localStorage.setItem('salary',!props.checked);props.setChecked(!props.checked);}}>
            {props.checked?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div  
                className={styles.switch} /> 
                        Salary
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('position',!props.position);props.setPostition(!props.position);}}>
            {props.position?<MdDone color='green' size='22' className={styles.logo} />:null}
                <div  
                className={styles.switch} /> 
                        Position
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('contact',!props.contact);props.setContact(!props.contact);}}>
            {props.contact?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div 
                className={styles.switch} /> 
                        Contact
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('department',!props.department);props.setDepartment(!props.department);}}>
            {props.department?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div 
                className={styles.switch} /> 
                        Department
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('status',!props.status);props.setStatus(!props.status);}}>
            {props.status?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div  
                className={styles.switch} /> 
                        Status
               </div>
              
        
            </div>
            <div className={styles.left} id='view2'>
            <div className={styles.column} onClick={()=>{localStorage.setItem('salary',!props.checked);props.setChecked(!props.checked);}}>
            {props.checked?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div  
                className={styles.switch} /> 
                        Salary
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('position',!props.position);props.setPostition(!props.position);}}>
            {props.position?<MdDone color='green' size='22' className={styles.logo} />:null}
                <div  
                className={styles.switch} /> 
                        Position
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('contact',!props.contact);props.setContact(!props.contact);}}>
            {props.contact?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div 
                className={styles.switch} /> 
                        Contact
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('department',!props.department);props.setDepartment(!props.department);}}>
            {props.department?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div 
                className={styles.switch} /> 
                        Department
               </div>
               <div className={styles.column} onClick={()=>{localStorage.setItem('status',!props.status);props.setStatus(!props.status);}}>
            {props.status?<MdDone color='green' size='22' className={styles.logo}/>:null}
                <div  
                className={styles.switch} /> 
                        Status
               </div>
              
        
            </div>
           </div>
    )
}

export default SortingView