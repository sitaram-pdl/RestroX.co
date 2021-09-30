import  Dropdown  from 'react-dropdown'
import React from 'react'
import DatePicker from 'react-date-picker'
import { useState } from 'react'
import styles from './AddStaff.module.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import './Custom.css'
import AddStaffSecond from './AddStaff2'
import {MdDelete} from 'react-icons/md'
import { Countries } from '../../../../api'
const AddBulk=(props)=>{
    const prottype ={
        'firstName':'',
        'lastName':'',
        'displayName':'',
        'email':'',
        'phone':'',
        'phone2':'',
        'locality':'',
        'city':'',
        'country':'',
        'gender':'',
        'dob':'',
        'idType':'',
        'postion':'',
        'role':''
    }
    const ids= [
        'Citizenship',
        'Driving License',
        'Passport',
        'Other',
    ]
    const roles=[ {value:'waiter','label':'Waiter'},
    'bartender',
    'generalManager',
    'HRManager',
    'accountant',
    'owner',
    'receptionist',
    'chef',
    'cook',
    'storeKeeper'
]
    const [options,setOptions] = useState([{'value':'Male'},{'value':'Female'}])
    const[ step ,setStep] = useState(true)
    const [error,setError] = useState('')
    const [file,setFile]=useState([])
    const [data,setData]=useState([prottype])

    const [loading,setLoading]=useState(false)
    const handleChange=(name,index)=>e=>{
        switch(name){
          
            case 'phone':
                var letters = /^[A-Za-z]+$/;
                if(!e.target.value.match(letters)){
                    let temp= [...data];
                    temp[index][name]= e.target.value
                    setData(temp)
                }
                break;
          
            default:
                let temp= [...data];
                temp[index][name]= e.target.value
                setData(temp)
                break;
             }
             
    }
    const handleAdd=()=>{
            setData(data=>data.concat(prottype))
    }
    const handleDelete=(index)=>{
        if(data.length===1) return 1
            const newData = [...data];
            newData.splice(index,1)
            setData(newData)
    }
   const handleDrop=(name,index)=>e=>{
        let temp= [...data];
        temp[index][name]= e
        setData(temp)
   }
   const deleteAll=()=>{
            setData([prottype])
   }
   const handleDate=name=>e=>{
       setData({...data,[name]:e})
   }
    const handleFile=e=>{ 
    let reader = new FileReader();
       
       
    let file = e.target.files;
    

    let tempFile=file[0]

      setFile(file=>tempFile)
    reader.onloadend = () => {
    setData({...data,'image':reader.result})
        
  }
    if(file[0]){
        reader.readAsDataURL(file[0]);
    }
}
    return(
        <div className={styles.mainContainer}>
      {  step?<div className={styles.container}>
            <div className={styles.title}>
                Add Staffs
            </div>   
            <div className={styles.subTitle}>
                Basic Personal Details
            </div>
            <div className={styles.topBulk}>
                <div className={styles.checkBox}>
                 </div>
                <div className={styles.sn}>
                   S.N.
                </div>
                <div className={styles.firstName}>
                    First Name
                </div>
                <div className={styles.firstName}>
                    Last Name
                </div>
                <div className={styles.firstName}>
                    Email
                </div>
                <div className={styles.firstName}>
                    Phone Number
                </div>
                <div className={styles.firstName}>
                   Position    
                </div>
                <div className={styles.firstName}>
                    Role
                </div>
                <div>
                    Action
                </div>
            </div>
            <div className={styles.maxDiv}>
        {data.map((dat,index)=>  
           <div className={styles.topBulk2}>
                <div className={styles.checkBox}>
                    <input type='checkbox'/>
                </div>
                <div className={styles.sn}>
                   {index + 1}
                </div>
                <div className={styles.firstName}>
                   <input onChange={handleChange('firstName',index)} value={data[index].firstName}/>
                </div>
                <div className={styles.firstName}>
                <input onChange={handleChange('lastName',index)} value={data[index].lastName}/>
             
                </div>
                <div className={styles.firstName}>
                <input onChange={handleChange('email',index)} value={data[index].email}/>
             
                </div>
                <div className={styles.firstName}>
                <input value={data[index].phone} onChange={handleChange('phone',index)}/>
                </div>
                <div className={styles.firstName}>
                     <Dropdown value={data[index].postion} onChange={handleDrop('position',index)} controlClassName={styles.control} options={roles}/>
                </div>
                <div className={styles.firstName}>
                    <Dropdown value={data[index].role} onChange={handleDrop('role',index)} controlClassName={styles.control} options={roles}/>
                </div>
                <div className={styles.actions}>
                    <MdDelete size='2em' className={styles.icon} onClick={()=>handleDelete(index)}/>
                    <BsThreeDotsVertical size='2em' className={styles.icon}/>
                </div>
            </div>
            )}
                </div>
                <div className={styles.button2}>
                              <div className={styles.add} onClick={()=>handleAdd()}>
                                   Add Lines
                               </div>
                               <div className={styles.add} onClick={()=>deleteAll()}>
                                  Delete All
                               </div> 
            </div>
            <div className={styles.button}>
                              <div className={styles.cancel}>
                                   Save as draft
                               </div>
                               <div className={styles.view} onClick={()=>props.menuHandler('View Menu')}>
                                  Quick Add
                               </div>
                               <div className={styles.drive} onClick={()=>props.setBulk(false)}>
                                  Cancel
                               </div>
                               <div className={styles.save} onClick={()=>setStep(false)}>
                                  Next
                               </div>
            </div>
        </div>:<AddStaffSecond setStep={setStep} dataFirst={data} citizenship={file}/>}
        </div> )
}

export default AddBulk