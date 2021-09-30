import React from 'react'
import Notes from './Components/Notes'
import Single from './Components/Single'
import styles from './Task.module.css'
const Task =(props)=>{

    return(
        <div className={styles.container}>
                <div className={styles.left} >
                    <div>
                        <div className={styles.title}>
                            Tasks
                        </div>
                        <div className={styles.subtitle}>
                            A board to keep track of personal tasks
                        </div>
                    </div>
                    <div className={styles.tasks}>
                        <Single name='TO DO' {...props} />
                        <Single name='In Progress' {...props} />

                        <Single name='Completed' {...props} />
                    </div>
                </div>
                <div className={styles.right}>
                <div>
                        <div className={styles.title}>
                           Notes
                        </div>
                        <div className={styles.subtitle}>
                            A board to keep track of personal tasks
                        </div>
                    </div>
                    <Notes {...props}/>
                </div>
          
        </div>
    )
}

export default Task