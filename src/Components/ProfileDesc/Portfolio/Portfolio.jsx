import React from 'react'
import styles from './Portfolio.module.css'

const Portfolio=(props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                {props.match.params.id}
            </div>
            <div className={styles.subText}>
                Cashier @{props.match.params.id.substr(0,7)}
            </div>
            <div className={styles.subText2}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestias voluptatibus corrupti mollitia consequuntur cum voluptas unde sunt quibusdam id. Libero accusantium illo earum saepe repellendus magni consectetur ut quisquam!
            </div>
            <div className={styles.subText3}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        Skills
                    </div>
                    <div className={styles.business2}>
                        Tally
                    </div>
                    <div className={styles.business2}>
                        Tally
                    </div>
                    <div className={styles.business2}>
                        Tally
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.title}>
                        Experience
                    </div>
                    <div className={styles.business}>
                        Dunga Restro & Bar
                    </div>
                    <div className={styles.business2}>
                        Frontdesk Manager
                    </div>
                    <div className={styles.business3}>
                        asdfasfgsdiohsd
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Portfolio