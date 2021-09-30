import React ,{useEffect, useState} from 'react'
import styles from './Attendance.module.css'

import {AiOutlineSearch,AiTwotoneMessage} from 'react-icons/ai'
import {IoCheckmarkDoneCircle} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'

import {BiFoodMenu} from 'react-icons/bi'
import {BiSelectMultiple} from 'react-icons/bi'
import {HiSortDescending} from 'react-icons/hi'
import {BiEditAlt} from 'react-icons/bi'
import {AiFillStar } from 'react-icons/ai'

import Switch from "react-switch";
import {MdFlight} from 'react-icons/md'
import cx from "classnames"
import Air from "../Attendance/icon.png"
import Dropdown from '../../react-dropdown'


const Attendance=(props)=>{
    const[items,setItems]=useState([{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'false'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'},{'Code':'Chicken Pasta','offers':'','start':new Date(),'end':new Date(),'active':'true'}])
    const [category,setCategory]=useState([{'name':'All','count':'1'},{'name':'Reception','count':'1'},{'count':'1','name':'Helper'}])
    const [num,setNum]=useState(0)
    const [array,setArray]=useState([])
    const[date,setDate]=useState(new Date())
    const [itemsIndex,setItemIndex]=useState(0)
    const [option,setOption]=useState([{'name':'All'},{'name':'Owner'},{'name':'Managers'},{'name':'Cashier'},{'name':'Receptionist'},{'name':'Chief'},{'name':'Waiter'},{'name':'Guard'},])
  
    const [week,setWeek]=useState([{'name':'Sunday'},{'name':'Monday'},{'name':'Tuesday'},{'name':'Wednesday'},{'name':'Thursday'},{'name':'Friday'},{'name':'Saturday'},])
    const options = [
        { value: 'This Week', label: 'This Week' },
        ]  
    const options2 = [
            { value: 'Shift 1', label: 'Shift 1' },
            ]  
    useEffect(()=>{
                let today= new Date()
                let temp =[];
                today=today-86400000*6;
                for(let i =0;i<7;i++){
                    temp.push({'name':today})
                    today=today+86400000;
                }
                setArray(temp);
        },[1])
    return(
        <div className={styles.container}>
             <div className={styles.division}>
            <div className={styles.search}>
            <div className={styles.secondRow}>
                 <div className={styles.menuItems}>
                    {option.map((dat,index)=>
                           <div className={cx(styles.itm,itemsIndex==index?styles.active:0)} onClick={()=>setItemIndex(index)}>
                            {dat.name}
                           </div>
                    )}
                </div>
                 <div className={styles.searchDiv}>
                <input  className={styles.input} placeholder="Search here" />
                <AiOutlineSearch  size='1.5em' color='gray' className={styles.menuicon}/>
                </div>

                <div className={styles.menu}>
               
               <BiSelectMultiple  size='1.5em' color='white'className={styles.menuicon}/>
               This Week
           </div>
           <div className={styles.menu} >
               
               <HiSortDescending size='1.5em' color='white'className={styles.menuicon}/>
               Sort By
           </div>
           <div className={styles.menu1}>
               
               <BiEditAlt  size='1.5em' color='white' className={styles.menuicon}/>
               Shift 1 (07 Am -4 Am)
           </div>
 
            </div>

               
            </div>
            <div className={styles.search2}>
                <div className={styles.code}>
                    User
                </div>
              
                {array.map((day)=>
                        <div className={cx(styles.start,date.toDateString()==new Date(day.name).toDateString()?styles.highlight:null)}>
                        {new Date(day.name).toLocaleString('en-us', {weekday:'long'})}
                        <br/>
                        {new Date(day.name).toDateString().substr(4,6)}
                        
                    </div>
                    
                )}
                
                <div className={styles.active}>
                    
                </div>
            </div>
            <div className={styles.overflowContainer}>

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
                                Cashier
                            </div>
                        </div>
                     </div>
                   {week.map((day)=>
                          <div className={styles.start} onClick={()=>props.clicked(day)}>
                          {day.name=='Sunday'?<IoCheckmarkDoneCircle color='#2e7728' size='26'/>
                            :null}
                             {day.name=='Saturday'?<div className={styles.absent}>A</div>
                            :null}
                             {day.name=='Friday'?<div className={styles.late}>L</div>
                            :null}
                             {day.name=='Wednesday'?
                            <img src={Air} width='26'/>
                            :null}
                            
                   </div>
                 
                   )}
                   
                    
                     <div className={styles.active}>
                     <BiDotsVerticalRounded />
                     </div>
                 </div>
            )}
           </div>
         
        </div>
        </div>
    )
}

export default Attendance