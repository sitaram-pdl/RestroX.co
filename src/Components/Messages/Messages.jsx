import React from 'react'
import styles from './Messages.module.css'


import cx from 'classnames'
import { useState } from 'react'
import {AiOutlineLogin,AiOutlineInfoCircle,AiOutlineSearch} from "react-icons/ai"

import {FaRegEdit} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
const Messages=()=>{
    const [msg,setMsg]=useState([{"from":'Subin Bhandari','time': new Date() - 20000,'msg':'K cha hajur'},{"from":'Samir CK','time': new Date() - 20000,'msg':'Thik cha hajur'},{"from":'Subin Bhandari','time': new Date() - 20000,'msg':'Ani K garirako hajar'},{"from":'Subin Bhandari','time': new Date() - 20000,'msg':'*hajur'},{"from":'Samir CK','time': new Date() - 20000,'msg':'Nachi rako hajur'},{"from":'Samir CK','time': new Date() - 20000,'msg':'Ani Timi'}])
    return(
        <div className={styles.container}>
          <div className={styles.dropdown}>
               <div className={styles.messageDrop}>
                    <div className={styles.title}>
                       <div> Chats </div>
                       <div> <FaRegEdit/> </div>
                    </div>
                    <div className={styles.searchDiv2}>
                       <AiOutlineSearch  size='1.5em' color='gray'/>
                        <input  className={styles.input2} placeholder="Search messages" />
                       
                   </div>
                   {[1,2,3,4,5,6,7,8,9].map((dat)=> <div className={styles.message}>
                        <div>
                            <img className={styles.msgImg} src="/images/user.jpeg"/>
                        </div>
                        <div  className={styles.name}>
                            <div >
                                Subin Bhandari
                            </div>
                            <div className={styles.sub}>
                               Hello, Some random message
                            </div>
                        </div>
                        <div className={styles.timeDiv}>
                            {new Date().getHours()}:{new Date().getMinutes()}
                        </div>
                    </div>)}

               </div>
           
           </div> 
            <div className={styles.Box}>
                <div className={styles.topName}>
                <div className={styles.message2}>
                        <div>
                            <img className={styles.msgImg} src="/images/user.jpeg"/>
                        </div>
                        <div  className={styles.name2}>
                            <div >
                                Subin Bhandari
                            </div>
                            <div className={styles.sub}>
                               32 mins
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className={styles.messageDesc}>
                  { msg.map((txt,index)=>
                   <div className={styles.msgArray}>
          {       txt.from!='Samir CK'?  <div className={styles.leftSide}>
                 {(index>0? msg[index-1].from:'')!= txt.from ?<div>
                       <img className={styles.msgImgInner} src="/images/user.jpeg"/>
                   </div>:<div className={styles.imageSpacer}/>}
                   <div>
                   {(index>0? msg[index-1].from:'')!= txt.from ?  <div className={styles.textMsg}>
                   {txt.from}
                       </div>:<div className={styles.spacer}/>}
                   <div  className={styles.messageItm}>
                   {txt.msg}
                   </div>
                   </div>
                   </div>:
                   <div className={styles.rightSide}>
                   
                   <div  className={styles.messageItm2}>
                       {txt.msg}
                   </div>
                   </div>}
               </div>
                  )
                }
                </div>
                <div className={styles.bottomBar}>
                   <div className={styles.messageInput}>
                        <input className={styles.inputLast} placeholder='Write Message'/>
                   </div>
                   <div className={styles.sendBtn} >
                        <FiSend color='#1773EA'/>
                   </div>
                </div>
            </div>
            <div className={styles.rightBar}>
            <div className={styles.rightMsg}>
                        <div>
                            <img className={styles.msgImg2} src="/images/user.jpeg"/>
                        </div>
                        <div  className={styles.name3}>
                            <div >
                                Subin Bhandari
                            </div>
                            <div className={styles.sub}>
                               32 mins
                            </div>
                        </div>
                       {/* <div className={styles.info}>
                         <div>
                            <AiOutlineInfoCircle size='1.8em' style={{paddingRight:'0.5em'}}/>
                         </div>
                         <div>
                            This is my information . Byee. xyz ahaha
                         </div>
                       </div> */}
                       
                    </div>
            </div>
        </div>
    )
}

export default Messages