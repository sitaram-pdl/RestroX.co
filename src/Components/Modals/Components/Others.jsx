import React from 'react-icons'

import styles from './Cashin.module.css'
import 'antd/dist/antd.css'
import {AiOutlineClose} from 'react-icons/ai'
const Others =()=>{
    const options =[{'name':'Receiveable','desc':''},{'name':'Payable','desc':''},{'name':'Payable','desc':''},{'name':'Payable','desc':''}]
    return(
        <div className={styles.container}>
        <div className={styles.secondRow}>
        <div className={styles.boxType}>
                {options.map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            {dat.name}
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
        <div className={styles.lowerDiv}>
            <div className={styles.titleLower}>
                Debitors
            </div>
        <div className={styles.boxType}>
                {options.map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/user.jpeg" className={styles.userImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            {dat.name}
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <AiOutlineClose size='1em' color='white'/>
                    </div>
                </div>)}
            </div>

            <div className={styles.titleLower}>
                Debitors
            </div>
        <div className={styles.boxType}>
                {options.map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/user.jpeg" className={styles.userImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            {dat.name}
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <AiOutlineClose size='1em' color='white'/>
                    </div>
                </div>)}
            </div>
       
            <div className={styles.buttons}>
                <div className={styles.cancel}>
                    Cancel
                </div>
               <div className={styles.done}>
                    Done
               </div>
            </div>
             
        </div>

    
        <div>
            
        </div>
    </div>
    )
}

export default Others