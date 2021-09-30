import React, { useEffect, useState } from 'react'
import styles from './Employee.module.css'
import EmployeeId from './Employee/EmployeeId'
import EmployeeShift from './EmployeeShift/EmployeeShift'
import cx from 'classnames'
import { BackDrop, EmployeList } from '..'
import Attendance from './Attendance/Attendance'
import MenuBar from './MenuBar/MenuBar'
import Modal from './Modal/Modal'
import Holidays from './Holidays/Landing'
import Leave from './Leave/Landing'
import SalaryReport from './SalaryReport/SalaryReport'
import Payslip from './Payslip/Payslip'
import Payroll from './Payroll/Landing'
import AddPayroll from './AddPayroll/Emergency'
const Employee=(props)=>{
    const [employeeList,setEmployeeList]=useState([{'name':'Staff'},{'name':'Staff Shift'},{'name':'Attendance'}])
    const [tab,setTab]=useState(0)
    const [grid,setGird]=useState(0)
    const [modal,setModal]=useState(false)
    const [payslip,setPayslip]=useState(false)
    const [payroll,setPayroll]=useState(false)
    const switchGrid=(a)=>{
        setGird(a)
    }
    const switchTab=(a)=>{
        setTab(a)
    }
    const clicked=()=>{
        setModal(false)
        setPayroll(false)
    }
    const attend=()=>{
        setModal(true)
    }
    const attend2=()=>{
        setPayroll(true)
    }
    useEffect(()=>{
            if(props.location.state.tab)
           { setTab(props.location.state.tab)}
    },[])
    return(
        <div className={styles.container}>
            <div className={styles.employee}>
                {/* {employeeList.map((dat,index)=>
                    <div className={cx(styles.list,tab==index?styles.red:null)} onClick={()=>setTab(index)}>
                    {dat.name}
                </div>
           
                )} */}
                <MenuBar {...props} routing={switchTab} tab={tab}  theme={props.theme}/>
                 </div>
                 <div className={styles.mainDiv}>
                   {tab==0?<div style={{width:'100%'}}> {grid==0?<EmployeeId switchGrid={switchGrid} {...props}/>:<EmployeList switchGrid={switchGrid} {...props}/>}</div>:null}
                   {tab==1? <EmployeeShift/>:null}
                   {tab==2?(payslip?<Payslip/>:<SalaryReport  setPayslip={setPayslip}/>):null}
                   {tab==3?<Attendance clicked={attend}/>:null}
                   {tab==4? <Holidays {...props}/>:null}
                   {tab==5? <Leave {...props}/>:null}
                   {tab==6? <Payroll clicked={attend2} {...props}/>:null}
                 </div>
                {
                modal? <div className={styles.modal}>
                    <BackDrop clicked={clicked}   />
                    <Modal/>
                 </div>:null
                }
                {
                payroll? <div className={styles.modal}>
                    <BackDrop clicked={clicked} />
                    <AddPayroll/>
                 </div>:null
}
        </div>
    )
}
export default Employee