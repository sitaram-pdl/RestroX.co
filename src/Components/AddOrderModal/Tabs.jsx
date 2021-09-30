import React ,{useState}from 'react'
import styles from './Tabs.module.css'
import cx from 'classnames'
import Dropdown from '../react-dropdown'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Tabs=(props)=>{
    const options = [
        { value: 'Most Ordered', label: 'Most Ordered' },
        { value: 'Most Reviewed', label: 'Most Reviewed' }, 
        { value: 'Most Order Type', label: 'Most Order Type' },
        { value: 'Most Delivered', label: 'Most Delivered' },
        
        ]
      const[data,setData]=useState([{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'},{'image':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80','name':'Swadesh Nepali','type':'Owner'}])
    const [category,setCategory]=useState([{'name':'Dine In','count':'1'},{'name':'Delivery','count':'1'},{'count':'1','name':'Take Away'}])
    const [num,setNum]=useState(0)
    const [floor,setFloor] = useState(0)
    return(
        <div className={styles.container}>
            <div className={styles.nameRow}>
            

            <div className={styles.nameBar2}>
           
                    {category.map((data,index)=>
                         <div onClick={()=>props.setNum(index)} className={cx(styles.filter2,index==props.num?styles.tomato2:null)}>
                         {data.name} 
                     </div>
                    )}
                  
                
                   
            </div>  
           
            </div>
            <div className={styles.hr}/>
            <div className={styles.nameRow2}>
            <div className={styles.nameBar}>
           
                    {category.map((data,index)=>
                         <div onClick={()=>setFloor(index)} className={cx(styles.filter,index==floor?styles.tomato:null)}>
                         {data.name} 
                     </div>
                    )}
                  
             
            </div>  

           
            </div>
            <div className={styles.hr}/>
        </div>
    )
}

export default Tabs