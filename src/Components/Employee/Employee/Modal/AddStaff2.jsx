import  Dropdown  from 'react-dropdown'
import React from 'react'
import DatePicker from 'react-date-picker'
import { useState } from 'react'
import styles from './AddStaff.module.css'
import {AiOutlineFilePdf} from 'react-icons/ai'
import './Custom.css'
import axios from 'axios'
const AddStaffSecond=(props)=>{
    const [options,setOptions] = useState([{'value':'Male'},{'value':'Female'}])
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
const prottype ={
    'position':'',
    'role':'',
    'department':'',
    'salary':'',
    'images':'',
    'due':'',
    'salaryType':''
}
const salaryType =[
    'Daily',
    'Weekly',
    'Monthly',
    'Yearly'
]
const [error,setError] = useState('')
const [file,setFile]=useState([])
const [data,setData]=useState(prottype)
const [loading,setLoading]=useState(false)
const handleChange=name=>e=>{
    setData({...data,[name]:e.target.value})
    
}
const handleFile=e=>{
    let reader = new FileReader();
       
       
    let file = e.target.files;
    

    let tempFile=file[0]

      setFile(file=>file.concat(tempFile))
    reader.onloadend = () => {
    setData({...data,'image':reader.result})
        
  }
    if(file[0]){
        reader.readAsDataURL(file[0]);
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
const handleDrop=name=>e=>{
    setData({...data,[name]:e})
}
const handleDate=name=>e=>{
    setData({...data,[name]:e})
}
const handleSend=()=>{
    setLoading(true)
    if(!validateEmail(props.dataFirst.email))
    {
    setError('Enter Valid Email')
    return 0;
    }
    let apiData = new FormData()


    // if (file) apiData.set('coverPhoto',file,`display.png`);
    apiData.set('firstName',props.dataFirst.firstName)
    apiData.set('lastName',props.dataFirst.lastName)
    apiData.set('displayName',props.dataFirst.displayName)
    apiData.append('contact',props.dataFirst.phone)
    apiData.append('contact',props.dataFirst.phone2)
    apiData.append('address',props.dataFirst.locality)
    apiData.append('address',props.dataFirst.city)
    apiData.append('address',props.dataFirst.country.value)
    apiData.set('gender',props.dataFirst.gender)
    apiData.set('dateOfBirth',props.dataFirst.dob)
    apiData.set('salary',data.salary)
    apiData.set('salaryDueDate',data.due)
    apiData.set('salaryType',data.salaryType.value)
    file.forEach((dat)=>
        apiData.append('agreements',dat)
        )
    
    apiData.set('departmentName',data.department.value)
    apiData.set('remarks',data.remarks)
    apiData.set('agreements',file)
    apiData.set('email',props.dataFirst.email)
    apiData.append('roles',data.role.value)
    apiData.set('employeeType',data.position.value)
 axios(
    {
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_OFFLINE_URL}/registerSingleEmployee`,
        data: apiData,
        headers: {'Content-Type': 'multipart/form-data' }
        }).then(res=>{
           console.log(res)
  
           if(res.status==200){
                setData(prottype)
                setFile([])
           }
           setLoading(false)
    }).catch(err=>{
        console.log(err.response)
        setError(err.response)
        setLoading(false)
    })
}
const deleteFile=(index)=>{

}
const handleDraft=()=>{
    setLoading(true)
    if(!validateEmail(props.dataFirst.email))
    {
    setError('Enter Valid Email')
    return 0;
    }
    let apiData = new FormData()
   
    // if (file) apiData.set('coverPhoto',file,`display.png`);

    apiData.set('departmentName',data.name)
    apiData.set('remarks',data.remarks)
    apiData.set('draft',false)
 axios(
    {
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_OFFLINE_URL}/createDepartment`,
        data: apiData,
        headers: {'Content-Type': 'multipart/form-data' }
        }).then(res=>{
           console.log(res)
  
           if(res.status==200){
                setData(prottype)
                setFile()
           }
           setLoading(false)
    }).catch(err=>{
        console.log(err.response)
        setError(err.response)
        setLoading(false)
    })
}
    return(
        <div className={styles.container} id='second'>
            <div className={styles.title}>
                Add Staff
            </div>   
            <div className={styles.subTitle}>
                Work Portfolio Details
            </div>
            <div className={styles.title2}>
                Bulldog Bar
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                       Postion
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown value={data.position} onChange={handleDrop('position')} controlClassName={styles.control} options={roles}/>
                 
                    </div>
                </div>
                <div className={styles.single}>
                    <div className={styles.name}>
                       Role
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown value={data.role} onChange={handleDrop('role')} controlClassName={styles.control} options={roles}/>
                 
                    </div>
                </div>
                <div className={styles.single}>
                    <div className={styles.name}>
                       Department
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown value={data.department} onChange={handleDrop('department')} controlClassName={styles.control} options={options}/>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <div className={styles.single}>
                    <div className={styles.name}>
                        Salary
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.salary} onChange={handleChange('salary')}  className={styles.input} placeholder='Salary'/>
                    </div>
                </div>
                <div id='select2' className={styles.single}>
                    <div className={styles.name}>
                      Due Date
                    </div>
                    <div className={styles.inputDiv}>
                      <DatePicker value={data.due} onChange={handleDate('due')} />
                    </div>
                </div>
                <div className={styles.single}>
                     <div className={styles.name}>
                        Type
                    </div>
                    <div className={styles.inputDiv}>
                    <Dropdown controlClassName={styles.control} options={salaryType} value={data.salaryType}  onChange={handleDrop('salaryType')} />
                    </div>
                </div> 
            </div>
            <div className={styles.title2}>
               Agreements/Contracts
            </div>
            <div className={styles.rowContract}>
              { file.map((dat,index)=><div className={styles.fileImg} onClick={()=>deleteFile(index)}>
                    <AiOutlineFilePdf size='3em'/>
                    {dat.name}
               </div>)}
               
                <div className={styles.rightOptions}>
                    <div>
                        <input type='file' onChange={handleFile} accept='.pdf' className={styles.file}/>
                    </div>
                 </div>
            </div>
          <div className={styles.button}>
                              <div className={styles.cancel}>
                                   Save as draft
                               </div>
                              
                               <div className={styles.drive} onClick={()=>props.setStep(true)}>
                                  Back
                               </div>
                               <div className={styles.save} onClick={()=>handleSend()}>
                                Add
                               </div>
            </div>
        </div>
    )
}

export default AddStaffSecond