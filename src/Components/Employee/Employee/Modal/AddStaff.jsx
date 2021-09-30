import  Dropdown  from 'react-dropdown'
import React from 'react'
import DatePicker from 'react-date-picker'
import { useState } from 'react'
import styles from './AddStaff.module.css'
import {AiOutlineFilePdf} from 'react-icons/ai'
import './Custom.css'
import AddStaffSecond from './AddStaff2'
import { Countries } from '../../../../api'
const AddStaff=(props)=>{
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

    }
    const ids= [
        'Citizenship',
        'Driving License',
        'Passport',
        'Other',
        
    ]
    const [options,setOptions] = useState([{'value':'Male'},{'value':'Female'}])
    const[ step ,setStep] = useState(true)
    const [error,setError] = useState('')
    const [file,setFile]=useState([])
    const [data,setData]=useState(prottype)

    const [loading,setLoading]=useState(false)
    const handleChange=name=>e=>{
        switch(name){
            case 'firstName' :
                setData({...data,[name]:e.target.value,'displayName':e.target.value.concat(' ' + data.lastName)})
                break;
            case 'lastName':
                setData({...data,[name]:e.target.value,'displayName':data.firstName.concat(' ' + e.target.value)})
                break;
            case 'phone':
                var letters = /^[A-Za-z]+$/;
                if(!e.target.value.match(letters)){
                    setData({...data,[name]:e.target.value})
           
                }
                break;
            case 'phone2':
                var letters = /^[A-Za-z]+$/;
                if(!e.target.value.match(letters)){
                    setData({...data,[name]:e.target.value})
               }
                break;
            default:
                setData({...data,[name]:e.target.value})
                break;
             }  
    }
   const handleDrop=name=>e=>{
       setData({...data,[name]:e})
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
                     Add Staff
            </div>   
            <div className={styles.subTitle}>
                     Basic Personal Details
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                        First Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.firstName} onChange={handleChange('firstName')}  className={styles.input}/>
                    </div>
                </div>
                <div className={styles.single}>
                    <div className={styles.name}>
                       Last Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.lastName} onChange={handleChange('lastName')}  className={styles.input}/>
                    </div>
                </div>
                <div className={styles.single}>
                    <div className={styles.name}>
                        Display Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.displayName} onChange={handleChange('displayName')} className={styles.input}/>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                        Contact
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.email} onChange={handleChange('email')}  className={styles.input} placeholder='Email'/>
                    </div>
                </div>
                <div className={styles.single}>
                   
                    <div className={styles.inputDiv}>
                        <input value={data.phone} onChange={handleChange('phone')} className={styles.input} placeholder='+977 | Phone'/>
                    </div>
                </div>
                <div className={styles.single}>
                    
                    <div className={styles.inputDiv}>
                        <input value={data.phone2} onChange={handleChange('phone2')} className={styles.input} placeholder='+977 |  Secondary Contact'/>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                      Address
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.locality} onChange={handleChange('locality')} className={styles.input} placeholder='Location'/>
                    </div>
                </div>
                <div className={styles.single}>
                   
                    <div className={styles.inputDiv}>
                        <input value={data.city} onChange={handleChange('city')} className={styles.input} placeholder='City'/>
                    </div>
                </div>
                <div className={styles.single}>
                    
                    <div className={styles.inputDiv}>
                    <Dropdown value={data.country} onChange={handleDrop('country')} controlClassName={styles.control} options={Countries}/>
                 </div>
                </div>
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                     Gender
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown value={data.gender} onChange={handleDrop('gender')} controlClassName={styles.control} options={options}/>
                     </div>
                </div>
                <div className={styles.single}>
                <div className={styles.name}>
                     Data of Birth
                    </div>
                    <div id='select' className={styles.inputDiv}>
                       <DatePicker value={data.dob} onChange={handleDate('dob')} />
                    </div>
                </div>
             
            </div>
            <div className={styles.title3}>
              ID Verifiaction
            </div>
            <div className={styles.rowContract2}>
            <div className={styles.single}>
                 
                    <div className={styles.inputDiv}>
                    <Dropdown  controlClassName={styles.control} options={ids}/>
                     </div>
                </div>
                <div className={styles.rightOptions}>
                    <div>
                        <input type='file' onChange={handleFile} accept='.pdf,.jpeg,.png' className={styles.file}/>
                    </div>
               
                         
                </div>
            </div>
            <div className={styles.button}>
                              <div className={styles.cancel}>
                                   Save as draft
                               </div>
                               <div className={styles.view} onClick={()=>props.menuHandler('View Menu')}>
                                  Quick Add
                               </div>
                               <div className={styles.drive} onClick={()=>props.setView(false)}>
                                   Cancel
                               </div>
                               <div className={styles.save} onClick={()=>setStep(false)}>
                                  Next
                               </div>
            </div>
        </div>:<AddStaffSecond setStep={setStep} dataFirst={data} citizenship={file}/>}
        </div> )
}

export default AddStaff