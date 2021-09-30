import React from 'react'
import styles from './Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import  Dropdown  from 'react-dropdown'
import './Custom.css'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
const More =()=>{
    const [file,setFile] = useState()

    const [file2,setFile2] = useState()
    const [data,setData]=useState({'image':'','image2':''})
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
    const handleFile2=e=>{
        let reader = new FileReader();
           
           
        let file = e.target.files;
        
    
        let tempFile=file[0]
    
          setFile2(file=>tempFile)
        reader.onloadend = () => {
        setData({...data,'image2':reader.result})
            
      }
        if(file[0]){
            reader.readAsDataURL(file[0]);
        }
    }
    const handleDelete=(a)=>{
        if(a == '1'){
            setFile2()
            setData({...data,'image2':''})
        }
        else{
                
            setFile()
            setData({...data,'image':''})
     
        }
    }
    return(
        <div className={styles.container} id='drop'>
            
            <div className={styles.side}>
               <div className={styles.top}>
                   
                <div className={styles.logo}>
                    <img src='/images/restroLogo.png' className={styles.restroLogo}/>
                        
                </div>
               
                </div>
                <div className={styles.details2}>
                    <div className={styles.title2}>
                        <div className={styles.loginTitle}>

                        Tell us about your business
                        </div>
                        <div className={styles.subTitle2}>
                        Everyone needs something a little different from RestroX. Let’s get to know what you
                        need so we can tailor things to fit you. You can change your info anytime in Settings.
                       </div>
                    <div  className={styles.singleInput}>
                    <div className={styles.moreInput}>
                        <div className={styles.inputTitle}>
                           Restaurant Logo
                        </div>
                        <div className={styles.fullwidth}>
                        {file2?<div className={styles.border} onClick={()=>handleDelete('1')}>

                                <img src={data.image2} className={styles.imageProfile}/>
                                <div className={styles.close}>

                                <MdDelete  size='2em'/>
                                </div>
                        </div>:<div className={styles.border} >
                                Add Photo
                            <input type='file'  accept='.png,.jpeg' className={styles.fileInput} onChange={handleFile2}/>
                        </div>}
                        </div>
                      
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                        Restaurant Name
                        </div>
                        <div>
                            <input placeholder='Doe' />
                        </div>
                        <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           What type of Restaurant you have?
                        </div>
                        <div>
                            <Dropdown controlClassName={styles.Dropdown}/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           No. of Branches
                        </div>
                        <div>
                        <Dropdown controlClassName={styles.Dropdown}/>
              
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                    <div  className={styles.singleInput}>
                    <div className={styles.moreInput}>
                        <div className={styles.inputTitle}>
                          Your Profile Picture
                        </div>
                        <div className={styles.fullwidth}>
                        {file?<div className={styles.border} onClick={()=>handleDelete('2')}>

                        <img src={data.image} className={styles.imageProfile}/>
                        <div className={styles.close}>

                        <MdDelete  size='2em'/>
                        </div>
                        </div>:<div className={styles.border}>
                                Add Photo
                            <input type='file'  accept='.png,.jpeg' className={styles.fileInput} onChange={handleFile}/>
                        </div>}
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                    
                        <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           What type of Restaurant you have?
                        </div>
                        <div>
                            <Dropdown controlClassName={styles.Dropdown}/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           No. of Branches
                        </div>
                        <div>
                              <Dropdown controlClassName={styles.Dropdown}/>
                        </div>
                    </div>
                    </div>
                    <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           What type of Restaurant you have?
                        </div>
                        <div>
                            <Dropdown controlClassName={styles.Dropdown}/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           No. of Branches
                        </div>
                        <div>
                        <Dropdown controlClassName={styles.Dropdown}/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
         
                     
                    <div className={styles.login}>
                           Finish Up
                    </div>
                  
                    </div>
                
                </div>
               
            </div>
        </div>
    )
}

export default More