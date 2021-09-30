import React,{useRef,useEffect} from 'react'
import styles from './Profile.module.css'

import {BiMessageSquareDots} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {IoAddCircleOutline} from 'react-icons/io5'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { Message, ReviewBox } from '..'
import cx from 'classnames'
import { useState } from 'react'
import {AiOutlineLogin,AiOutlineSearch} from "react-icons/ai"
import {Bills} from '../../api'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BsFillBookmarkFill} from 'react-icons/bs'
import StoriesHeader from '../StoriesHeader/StoriesHeader'
import {FaRegEdit} from 'react-icons/fa'
import Header from './Header.jsx'
const Profile=(props)=>{
    const [view,setView]=useState({
        message:false,
        notification:false,
        settings:false
    })
    const [data,setData]=useState()
    const [logout,setLogout] = useState(false)
    const wrapperRef = useRef(null);
    const [status,setStatus] = useState('Activity')
    const [showHeader,setShowHeader]=useState(false)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setView(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    useEffect(()=>{

        const fetchData=async()=>{
            setData(await Bills())   
       }
       fetchData();

    },[])

    return(
        <div className={styles.container}  ref={wrapperRef}>
             <div className={styles.profile}>
                 {showHeader?
                     <div className={styles.headerDiv}> 
                     <Header {...props}/>
                 </div>:null
                 }
                 <div>
                 <IoAddCircleOutline size='2em' className={styles.addButton} onClick={()=>setShowHeader((prev)=>!prev)}/>
                 </div>
            <div className={styles.searchDiv}>
                <input  className={styles.input} placeholder="Search here" />
                <AiOutlineSearch  size='1.5em' color='gray'/>
            </div>
            <div>
            <img src={"/images/moon.png"} className={styles.moon}/>
            </div>
            <BiMessageSquareDots size='1.5em' color='gray' className={styles.icons} onClick={()=>setView({message:true})}/>
            <IoIosNotificationsOutline size='1.5em' color='gray' className={styles.icons} onClick={()=>setView({notification:true})}/>
            <img src={'https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg'} className={styles.image}/>
            <div className={cx(styles.text,props.theme?styles.white:null)}>
               <div className={styles.person}>
                Samir Ck   
                </div>
                <div>
                   Receptionist
                </div>
                 
            </div>
           < RiArrowDropDownLine size='2em' color='gray' className={styles.icons} onClick={()=>setView({settings:true})}/>

         
        </div>
       {view.message? <div className={styles.dropdown}>
               <div className={styles.messageDrop}>
                    <div className={styles.title}>
                       <div> Chats </div>
                       <div> <FaRegEdit/> </div>
                    </div>
                    <div className={styles.searchDiv2}>
                       <AiOutlineSearch  size='1.5em' color='gray'/>
                        <input  className={styles.input2} placeholder="Search messages" />
                       
                   </div>
                   {[1,2,3,4,5].map((dat)=> <div className={styles.message}>
                        <div>
                            <img className={styles.msgImg} src="/images/user.jpeg"/>
                        </div>
                        <div  className={styles.name}>
                            <div >
                                Subin Bhandari
                            </div>
                            <div className={styles.sub}>
                                Hello, Kcha hajurrrr
                            </div>
                        </div>
                        <div className={styles.timeDiv}>
                            {new Date().getHours()}:{new Date().getMinutes()}
                        </div>
                    </div>)}

               </div>
                <div className={styles.seeMore}>
                        See More
                </div>
           </div>:null}
           {view.notification? <div className={styles.dropdown} >
           <div className={styles.titleOption}>
                      <div className={status=='Activity'?styles.titleButton:styles.btnBlur} onClick={()=>setStatus('Activity')}>
                          Activity
                     </div>
                     <div className={status!='Activity'?styles.titleButton:styles.btnBlur} onClick={()=>setStatus('asdsad')}>
                        Updates
                    </div>
                    </div>
              { status=='Activity'?<div className={styles.messageDrop}>
                    
                    <div className={styles.dateTitle}>
                        Today's
                    </div>
                    <div className={styles.message}>
                        <div>
                            <img className={styles.msgImg} src="/images/user.jpeg"/>
                        </div>
                        <div  className={styles.name}>
                            <div >
                                Subin Bhandari and 4 others recently reviewed your food
                            </div>
                           
                        </div>
                    </div>
                    
               </div>:
               <div className={styles.messageDrop}>
                    
              
               {Object.keys(data.arra).map((dat,index)=>
               data.arra[dat].map((itm,itmIndex)=>
               <div className={styles.postDivision}>
                  <div className={styles.message}>
                   <div>
                       <img className={styles.msgImg} src={itm.owner.picture}/>
                   </div>
                   <div  className={styles.name}>
                       <div >
                           {itm.owner.firstName} {itm.owner.lastName} 
                       </div>
                      <div className={styles.subEmail}>
                     {itm.owner.email }
                     </div>
                   </div>
                  </div>
                    <div className={styles.postImage}>
                    <img className={styles.postImg} src={itm.image}/>
                    </div>
                    <div className={styles.postTitle}>
                    {itm.id}
                    </div>
                    <div className={styles.postDesc}>
                    {itm.text}
                    </div>
                    <div className={styles.insights}>
                    <div className={styles.insightsInside}>
                        <AiOutlineHeart size='1.3em' className={styles.likeIcon}/> {itm.likes * 15}
                    </div>
                    <div className={styles.insightsInside}>
                        <FaRegComment size='1.3em' className={styles.likeIcon}/> {itm.likes * 2}
                    </div>
                    <div className={styles.insightsInside3}>
                        <BsFillBookmarkFill size='1.3em' className={styles.likeIcon}/> 
                    </div>
                    </div>
               </div>
               )
               
               )
               }
          </div>
               }
                <div className={styles.seeMore}>
                        See More
                </div>
           </div>:null}
           {view.settings? <div className={styles.dropdown2} >
                <div className={styles.image2}>

                <img src="/images/pana.png" width="70%"/>    
                </div>    
                <div className={styles.lower}>
               <div>
                        <img src="/images/user.jpeg" className={styles.image3}/>
                    </div>
                  
{
                logout?    <div className={styles.row}>

                            <div className={styles.confirm}>
                                Are you sure you want to sign out from your account now?
                            </div>
                            <div className={styles.confirm2}>
                                If you dont press any button you will be logged out automatically in 40 seconds
                            </div>
                            <div className={styles.column2}>
                        <div className={styles.button} onClick={()=>setLogout(false)}>
                           Cancel
                        </div>
                        <div className={styles.button}>
                            Sign out
                        </div>
                    </div>
                    </div>:
                      <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                      <div>
                      Samir Ck
                  </div>
                  <div className={styles.email}>
                      samir@restor-x.com 
                  </div>
                    <div className={styles.column}>
                        <div className={styles.button}>
                            Profile
                        </div>
                        <div className={styles.button} onClick={()=>setLogout(true)}>
                            Sign out
                        </div>
                    </div>
                    </div>}
                </div>
                
               
           </div>:null}
        </div>
    )
}
export default Profile