import React, { useState } from "react"
import styles from './MenuBar.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import cx from 'classnames'

import { IoIosArrowBack } from 'react-icons/io'
const MenuBar = (props) => {
    const [options, setOptions] = useState([{ 'name': 'General Setting', 'desc': 'General Setting' }, { 'name': 'Notification ', 'desc': 'Notification' }, { 'name': 'Security and Privacy', 'desc': 'Security and Privacy' }, { 'name': 'Export or Imort Data', 'desc': 'Export or Imort Data' }, { 'name': 'Reffer or Offer', 'desc': 'Reffer or Offer' }, { 'name': 'Support & Help', 'desc': 'Support & Help' }, { 'name': 'Contact Us', 'desc': 'Contact Us' }, { 'name': 'About Us', 'desc': 'About Us' }])
    return (
        <div className={cx(styles.container, props.theme ? styles.white : null)}>
            <div className={styles.items}>
                <div className={cx(styles.list2)} >
                    {/* <div className={styles.image} onClick={() => props.history.goBack()}>
                        <IoIosArrowBack />
                    </div> */}
                    <div className={styles.singleRow2}>
                        <div>
                            Settings
                        </div>

                    </div>
                </div>
                {
                    options.map((dat, index) => <div className={cx(styles.list, props.match.params.main == dat.name ? styles.tomato : null)} onClick={() => props.routing(dat.name)}>
                        <div className={styles.image}>
                            <AiOutlineHeart />
                        </div>
                        <div className={styles.singleRow}>
                            <div>
                                {dat.name}
                            </div>
                            <div className={styles.small2}>
                                {dat.desc}
                            </div>
                        </div>
                    </div>
                    )
                }


            </div>
        </div>
    )
}

export default MenuBar