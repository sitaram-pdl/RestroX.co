import React ,{useState} from 'react'
import styles from './EmployeeList.module.css'

import {AiOutlineSearch,AiTwotoneMessage} from 'react-icons/ai'
import {IoFilter} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import Switch from "react-switch";
import {VscCallOutgoing} from 'react-icons/vsc'
import cx from "classnames"
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import SortingView from '../SortingView/SortingView'
const EmployeeList=(props)=>{
    const[items,setItems]=useState([{'Code':'Chicken Pasta','offers':'','start':'ASDA','end':new Date(),'active':'tru'},{'Coede':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'false'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':'BCDS','end':new Date(),'active':'true'}])
    const [category,setCategory]=useState([{'name':'All','count':'1'},{'name':'Reception','count':'1'},{'count':'1','name':'Helper'}])
    const [num,setNum]=useState(0)
    const [options,setOptions]=useState(false)
    const [checked,setChecked]=useState(localStorage.getItem('salary')!='true'?true:false)
    const [position,setPostition]=useState(localStorage.getItem('position')!='true'?true:false)
    const [contact,setContact]=useState(localStorage.getItem('contact')!='true'?true:false)

    const [department,setDepartment]=useState(localStorage.getItem('department')!='true'?true:false)
    const [status,setStatus]=useState(localStorage.getItem('status')!='true'?true:false)
   
    return(
        <div className={styles.container} >
             <div className={styles.division}>
            <div className={styles.search}>
               
                <div className={styles.rightIcons}>
                    {category.map((data,index)=>
                         <div onClick={()=>setNum(index)} className={cx(styles.filter,index!=num?styles.tomato:null)}>
                         {data.name} ({data.count})
                     </div>
                    )}
                  
                </div>
                <div className={styles.ultraRight}>
                        <div onClick={()=>props.switchGrid(0)}>
                        <BsFillGrid1X2Fill size='14'/>
                         </div>
                        <div >
                         <FaThList  color='tomato' size='14'/>
                         </div>
                </div>
            </div>
            <div className={styles.search2}>
                <div className={styles.code}>
                    User
                </div>
              
               {position? <div className={styles.start}>
                    Position
                </div>:null}
            {
                checked?
                <div className={styles.start}>
                    Salary
                </div>
                :null}
       { department?<div className={styles.start}>
                    Department
                </div>:null}
                {contact?<div className={styles.start}>
                    Contact
                </div>
                :null
                }
            {status? <div className={styles.start}>
                   Status
                </div>
                :null
                }
                <div className={styles.active} onClick={()=>setOptions(!options)} >
                    <BiDotsVerticalRounded />
                    
                </div>
            </div>
            {items.map((dat,index)=>
                     <div className={styles.search3}>
                   
                     <div className={styles.code}>
                         <div>
                             <img className={styles.image} src='https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg' />
                        </div>
                         <div className={styles.nameLine}>
                             <div className={styles.name}>
                                 Swadesh Nepali
                            </div>
                            <div className={styles.email}>
                                benood@gmail.com
                            </div>
                        </div>
                     </div>
                    
                   {
                        position?<div className={styles.start}>      
                        {dat.start}
                    </div>
                    :null
                   }  
                   
                   {checked?<div className={styles.start}>
                         {dat.start}
                     </div>:null
                    } 
                    {department?<div className={styles.start}>
                         {dat.start}
                     </div>:null}
                     {contact?<div className={styles.start}>
                        <div className={styles.icons}>
                            <VscCallOutgoing size='26'/>
                            <AiTwotoneMessage size='26'/>
                        </div>    
                     
                     </div>
                     :null}
                     {status?<div className={styles.start}>
                         {dat.start}
                     </div>:null}
                     <div className={styles.active}>
                     <BiDotsVerticalRounded />
                     </div>
                 </div>
            )}
                {options?<div className={styles.modal}>
                      <SortingView checked={checked} position={position} status={status} contact={contact} department={department} status={status} setChecked={setChecked} setContact={setContact} setDepartment={setDepartment} setStatus={setStatus} setPostition={setPostition}/>          
                </div>:null}
        </div>
        </div>
    )
}

export default EmployeeList