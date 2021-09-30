import React,{useState} from 'react'
import styles from './EmployeeId.module.css'

import {AiOutlineMessage,AiOutlineSearch} from 'react-icons/ai'
import {VscCallOutgoing} from 'react-icons/vsc'
import cx from 'classnames'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import {BiMessage} from 'react-icons/bi'
import AddStaff from './Modal/AddStaff'
import AddBulk from './Modal/AddBulk'
const EmployeeId=(props)=>{
    const[data,setData]=useState([{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'}])
    const [category,setCategory]=useState([{'name':'All','count':'1'},{'name':'Reception','count':'1'},{'count':'1','name':'Helper'}])
    const [num,setNum]=useState(0)
    const [bulk,setBulk]= useState(false)
    const [view,setView]=useState(false)
    return(
        <div className={styles.container}>
            <div className={styles.search}>
                <div className={styles.rightIcons}>
                    {category.map((data,index)=>
                         <div key={index} onClick={()=>setNum(index)} className={cx(styles.filter,index!=num?styles.tomato:null)}>
                         {data.name} ({data.count})
                     </div>
                    )}
                  
                </div>
                <div className={styles.ultraRight2}>
                        <div >
                        <AiOutlineSearch  size='24'/>
                         </div>
                         <div className={styles.button} onClick={()=>setBulk(true)} >
                            Add Bulk staff
                         </div>
                        <div className={styles.button} onClick={()=>setView(true)} >
                            Add staff
                         </div>
                </div>
                <div className={styles.ultraRight}>
                        <div>
                        <BsFillGrid1X2Fill color='tomato' size='14'/>
                         </div>
                        <div onClick={()=>props.switchGrid(1)}>
                         <FaThList size='14'/>
                         </div>
                </div>
            </div>
            <div  className={styles.profileOverflow}>

                 <div className={styles.menu}>
                  {data.map((dat)=>  <div key={dat} onClick={()=>props.history.push(`/profile/${dat.name}`)} className={cx(styles.menuBox,props.theme?styles.white:null)}>
                        <img width='150px' className={styles.image} src={dat.image}>
                        </img>
                        <div className={styles.text}>
                            {dat.name}
                        </div>
                        <div className={styles.price}>
                            {dat.type}
                        </div>
                        <div className={styles.plusRow}>
                            <div className={props.theme?styles.number2:styles.number}>
                                <VscCallOutgoing size='28'/>
                            </div>
                           
                            <div className={props.theme?styles.number2:styles.number}>
                                <BiMessage size='28'/>  
                           </div>
                        </div>
                        <div className={styles.buttonClass}>
                        <div className={styles.prof}>
                            See Profile
                        </div>
                        <div className={styles.rainbow}/>
                        </div>
                    </div>
                    )}
            </div>
            </div>
             { view?    <div className={styles.modal}>
                <div  className={styles.background} onClick={()=>setView(false)}/>
                <AddStaff setView={setView} />
            </div> :null}
            { bulk?    <div className={styles.modal}>
                <div  className={styles.background} onClick={()=>setBulk(false)}/>
                <AddBulk setBulk={setBulk} />
            </div> :null}
        </div>
    )
}
export default EmployeeId