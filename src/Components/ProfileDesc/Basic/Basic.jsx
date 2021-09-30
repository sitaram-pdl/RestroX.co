import React ,{useState}from "react"
import styles from "./Basic.module.css"
import {BsPencil} from "react-icons/bs"

import {RiRecordCircleFill} from 'react-icons/ri'
const Basic=(props)=>{
    const[data,setData]=useState([{'name':'GCES','desc':'BSc Software engineering','desc2':'2016-2020'},{'name':'GCES','desc':'BSc Software engineering','desc2':'2016-2020'}])
    const[initial,setInitial]=useState(0);
        
   
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                    Personal Info
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked("Personal Info")}>
                    <BsPencil/>
                  </div>
                </div>

                  <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Passport No.
                        </div>
                        <div className={styles.subtitle}>
                          EWA SLAKG
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                                Passport Expiry Date.
                            </div>
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                           Nationality
                        </div>
                        <div className={styles.subtitle}>
                          Nepali
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                                Religion
                            </div>
                        <div className={styles.subtitle}>
                            Hindu
                        </div>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Maritial Status
                        </div>
                        <div className={styles.subtitle}>
                         Married
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                               Employement Of Spouse
                            </div>
                        <div className={styles.subtitle}>
                            No
                        </div>
                  </div>
                  
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            No of Children
                        </div>
                        <div className={styles.subtitle}>
                         2
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                               PAN No.
                            </div>
                        <div className={styles.subtitle}>
                            213213412
                        </div>
                  </div>
                  
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                   Emergency Contact
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked("Emergency")}>
                    <BsPencil/>
                  </div>
                </div>
                    <div className={styles.mainText2}>
                        Primary
                    </div>
                  <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Name
                        </div>
                        <div className={styles.subtitle}>
                          Swadesh Nepali
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                                Relationship
                            </div>
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                           Email
                        </div>
                        <div className={styles.subtitle}>
                          subinbhandari2@gmail.com
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                               Phone
                            </div>
                        <div className={styles.subtitle}>
                            1232130
                        </div>
                  </div>
                </div>
                <div className={styles.mainText2}>
                       Secondary
                    </div>
                  <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Name
                        </div>
                        <div className={styles.subtitle}>
                          Swadesh Nepali
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                                Relationship
                            </div>
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                           Email
                        </div>
                        <div className={styles.subtitle}>
                          subinbhandari2@gmail.com
                        </div>
                    </div>
                  <div className={styles.right}>
                    <div className={styles.title}>
                               Phone
                            </div>
                        <div className={styles.subtitle}>
                            1232130
                        </div>
                  </div>
                </div>
             
            </div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                  Bank Information
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked()}>
                    <BsPencil/>
                  </div>
                </div>
                   
                  <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                           Bank Name
                        </div>
                       
                    </div>
                  <div className={styles.right}>
                     <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                          Account No.
                        </div>
                      
                    </div>
                  <div className={styles.right}>
                   
                        <div className={styles.subtitle}>
                            1232130
                        </div>
                  </div>
                </div>
               
                  <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Account Name
                        </div>
                       
                    </div>
                  <div className={styles.right}>
                   
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>
              
             
            </div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                 Family Information
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked("Family")}>
                    <BsPencil/>
                  </div>
                </div>
                <div className={styles.top2}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            Name
                        </div>
                        <div className={styles.subtitle}>
                          Swadesh Nepali
                        </div>
                    </div>
                  <div className={styles.right2}>
                    <div className={styles.title}>
                                Relationship
                            </div>
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                  <div className={styles.right2}>
                    <div className={styles.title}>
                               Phone
                            </div>
                        <div className={styles.subtitle}>
                            Feb 20, 2020
                        </div>
                  </div>
                </div>  
                  
             
            </div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                 Education Information
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked("Education")}>
                    <BsPencil/>
                  </div>
                </div>
                <div >

                {data.map((dat,index)=>  <div  className={styles.pallete} onClick={()=>setInitial(index)}> 
                <div className={styles.icons}>  
                    <RiRecordCircleFill className={styles.dot} color='orange'/>
                    <div className={initial==index?styles.line:styles.line2}/>
                </div> 
                <div className={styles.message}>
                    <div className={styles.division}>
                        <div>
                            {dat.name}
                        </div>
                      <div className={styles.sub2}>
                          {dat.desc}
                        </div>
                        <div className={styles.sub2}>
                          {dat.desc2}
                        </div>
                    </div>
                   
                </div>
            </div>
            )}

                </div>  
                  </div>
                  <div className={styles.box}>
                <div className={styles.top}>
                    <div>
                Experience
                    </div>
                  <div className={styles.icon} onClick={()=>props.clicked("Experience")}>
                    <BsPencil/>
                  </div>
                </div>
                <div >

                {data.map((dat,index)=>  <div  className={styles.pallete} onClick={()=>setInitial(index)}> 
                <div className={styles.icons}>  
                    <RiRecordCircleFill className={styles.dot} color='orange'/>
                    <div className={initial==index?styles.line:styles.line2}/>
                </div> 
                <div className={styles.message}>
                    <div className={styles.division}>
                        <div>
                            {dat.name}
                        </div>
                      <div className={styles.sub2}>
                          {dat.desc}
                        </div>
                        <div className={styles.sub2}>
                          {dat.desc2}
                        </div>
                    </div>
                   
                </div>
            </div>
            )}

                </div>  
                  </div>
        </div>
    )
}

export default Basic