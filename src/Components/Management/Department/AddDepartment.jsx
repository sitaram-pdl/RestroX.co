import React from 'react'
import styles from './AddDepartment.module.css'
import Department from './Create'

const AddDepartment=()=>{
    return(
        <div className={styles.container}>
            <Department/>
        </div>
    )
}

export default AddDepartment