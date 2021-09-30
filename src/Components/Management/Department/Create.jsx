import React from 'react'
import styles from './Create.module.css'
import {FaEquals} from 'react-icons/fa'
import {BiDotsVerticalRounded} from "react-icons/bi"
import {IoIosArrowDropdown} from "react-icons/io"
import { useState } from 'react'
import axios from 'axios'
const Department=(props)=>{
    const prottype ={
        'name':'',
        'remarks':'',
        'file':'',
        'image':''
    }
    const [error,setError] = useState('')
    const [file,setFile]=useState()
    const [data,setData]=useState(prottype)
    const [loading,setLoading]=useState(false)
    const handleChange=name=>e=>{
        setData({...data,[name]:e.target.value})
        
    }
    const handleFile=e=>{
        let reader = new FileReader();
           
           
        let file = e.target.files;
        if ( /\.(jpe?g|png)$/i.test(file.name) ) return 0


        let tempFile=file[0]

          setFile(tempFile)
        reader.onloadend = () => {
        setData({...data,'image':reader.result})
            
      }
        if(file[0]){
            reader.readAsDataURL(file[0]);
        }
    }

    const handleSend=()=>{
        setLoading(true)
        if(data.name =='')
        {
        setError('Fields Cant be Empty')
        return 0;
        }
        let apiData = new FormData()
       
        if (file) apiData.set('coverPhoto',file,`display.png`);

        apiData.set('departmentName',data.name)
        apiData.set('remarks',data.remarks)

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
        <div className={
            styles.container
        } >
            <div className={styles.title}>
               Create Department  
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.name}>
                       Department Name
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.name} className={styles.input} onChange={handleChange('name')} placeholder='Kitchen'></input>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.name}>
                        Remarks
                    </div>
                    <div className={styles.inputDiv}>
                        <input value={data.remarks} className={styles.input} onChange={handleChange('remarks')} placeholder='Canteen'></input>
                    </div>
                </div>
            </div>
            <div className={styles.upload}>
                <div className={styles.fileBtn}>Upload Photo</div>
                <input  accept='.png,.jpeg' type='file' className={styles.file} onChange={handleFile} />
            </div>
         
       { error? <div className={styles.error}>
                *{error}
         </div>:null}
              {/* <div className={styles.advDiv}>
                  <div className={styles.adv}>
                      Advance Details <div className={styles.icon}><IoIosArrowDropdown/></div>
                  </div>
              </div> */}
              <div className={styles.bottom}>
            <div className={styles.button1}>
                Save Draft
            </div>
           {!loading? <div onClick={()=>handleSend()} className={styles.button} >
               Done
            </div>:<div className={styles.button2} >
               Done
            </div>}
        </div>
        </div>
    )
}

export default Department