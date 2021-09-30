import React, { useState } from 'react'
import styles from './Message.module.css'
import cx from 'classnames'
const Message=(props)=>{
    const [demo,setDemo]=useState([{'name':'Subin Bhandari','message':'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor dolores excepturi deleniti deserunt! Culpa itaque praesentium maxime alias, facere consequatur tenetur quos error aliquam, nam asperiores, similique cum officia!','img':'https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg'},{'name':'Binita Nepali','message':'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor dolores excepturi deleniti deserunt! Culpa itaque praesentium maxime alias, facere consequatur tenetur quos error aliquam, nam asperiores, similique cum officia!','img':'https://likewisestage.blob.core.windows.net/images/adbe7230-5587-43e5-96fe-3ce863f25e88/photo.jpg'},{'name':'Anis Acharya','message':'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor dolores excepturi deleniti deserunt! Culpa itaque praesentium maxime alias, facere consequatur tenetur quos error aliquam, nam asperiores, similique cum officia!','img':'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},{'name':'Manish Paudel','message':'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor dolores excepturi deleniti deserunt! Culpa itaque praesentium maxime alias, facere consequatur tenetur quos error aliquam, nam asperiores, similique cum officia!','img':'https://www.microsoft.com/en-us/research/wp-content/uploads/2017/09/avatar_user_36443_1506533427.jpg'}])
    return(
        <div className={cx(styles.container,props.theme?styles.white:null)}>
            <div className={cx(styles.topRow,props.theme?styles.whiteText:null)}>
                Messages
            </div>
            <div className={styles.messageDiv}>
{demo.map((dat)=>  <div className={styles.messages}>
                <div >
                    
                   <img  src={dat.img} className={styles.image}/> 
               </div>
                <div className={styles.right}>
                    <div className={cx(styles.title,props.theme?styles.whiteText:null)}>
                        {dat.name}
                    </div>
                    <div className={styles.actualmsg}>
                        {dat.message}
                             </div>
                </div>
            </div>
            )}

            </div>
        
        </div>
    )
}

export default Message