import React, { useState } from 'react'
import { useEffect } from 'react'
import { Bills } from '../../../api'
import styles from './BillGallery.module.css'
import cx from 'classnames'
import { BackDrop } from '../..'
import {GrFormClose} from 'react-icons/gr'
import {saveAs} from 'file-saver'
const BillGallery=()=>{
    const [data,setData]=useState({arra:{},dateList:[]})
    useEffect(()=>{
       const fetchData=async()=>{
             setData(await Bills())   
        }
        fetchData();
        window.addEventListener('click',globalClick)
        return () => window.removeEventListener('click',globalClick);
    },[])

    const globalClick=()=>{
        var fixed= document.getElementById('fixed');
        if(fixed){
            fixed.style.display='none'
        }
        
    }
    const [pagex,setPageX] = useState({x:'',y:''})
    const {arra,dateList}=data;
    const [employeeList,setEmployeeList]=useState([{'name':'All'},{'name':'Album'},{'name':'Draft'}])
    const [tab,setTab]=useState(0)
    const [image,setImage]=useState('')
    const [modal,setModal]=useState(false)
    const [right,setRight]=useState(true)
    const [rightImage,setRightImage]=useState('')
    const clickHandle=()=>{
        setModal(false)
    }
    const rightClick=text=>e=>{
        console.log(e)
        e.preventDefault()
        console.log(text)
        setRightImage(text)
        setPageX({x:e.pageX ,y : e.pageY })
       var fixed= document.getElementById('fixed');
       if(fixed){
        fixed.style.display='flex'
       }
       
    }
    const download = e => {
        
        
        };
        const print = e => {
            window.print()
            };
    return(
        <div className={styles.container}>
            <div className={styles.row}>
            <div className={styles.title}>
                Bill Gallary
            </div>
            <div className={styles.button}>
                Upload Bills
            </div>
       
            </div>
            <div className={styles.employee}>
                {employeeList.map((dat,index)=>
                    <div className={cx(styles.list,tab==index?styles.red:null)} onClick={()=>setTab(index)}>
                    {dat.name}
                </div>
           
                )}
                 </div>
               
                     <div className={styles.mainDiv}>
                     {
                         
                        dateList.map((date)=>
                           <div >
                            <div className={styles.date}>
                                {date}
                            </div>
                           <div className={styles.rowImage} >
                          {
                            arra[date].map((bill)=>
                              <div className={styles.imgDiv} >
                            <img src={bill.image} onContextMenu={rightClick(bill.image)} id={bill.image} className={styles.image} onClick={()=>{setImage(bill.image);setModal(true)}}/>
                             </div>   
                            
                        )}
                        </div>
                        </div>
                    
                    )
                    }
                    </div>
               {modal?  <div className={styles.fixed}>
                    <BackDrop clicked={clickHandle}/>
                    <div className={styles.modal}>
                    <img src={image} className={styles.bigImage}/>
                    <div className={styles.close} onClick={clickHandle} >
                        <GrFormClose size='21'/>
                    </div>
                    </div>

                </div>
                :
                null}
                {right?  <div className={styles.rightClick} id='fixed' style={{top:pagex.y+'px',left:pagex.x+'px'}}>
                    <div className={styles.download} onClick={download}>
                     Download 
                    </div>
                    <div className={styles.hr}/>
                    <div className={styles.download} onClick={print}>
                        Print
                    </div>
                    <div className={styles.hr}/>
                  

                </div>
                :
                null}

            </div>
    )
}

export default BillGallery