import React , { useState } from 'react'
import styles from '../PhysicalMenu/PhysicalMenu.module.css'
import cx from 'classnames'
const QR=(props)=>{
    const [options, setOptions] = useState([{'name':'View Menu', 'total': '124', 'img': '/images/menu.jpeg'},{ 'name': 'All Dishes', 'total': '124', 'img': '/images/menu.jpeg' }, { 'name': 'Review Price', 'total': '124', 'img': '/images/menu.jpeg' }, { 'name': 'Add Items', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'Digital Menu', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'Promotion', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'QR Code ', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'Physical Menu', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'Real Time Menu', 'total': '124', 'img': '/images/burger.png' }, { 'name': 'Category', 'total': '124', 'img': '/images/burger.png' }])
  
    return(
        <div className={styles.container}>
                       <div className={styles.table}>
                Physical Menu
            </div>
            <div className={styles.list}>
                {options.slice(0,5).map((dat) =>
                    <div className={styles.box} onClick={() => props.history.push(`/management/Menu Management/${dat.name}/0`)}>
                        <div className={styles.images}>
                            <img className={styles.image2} src={dat.img} />
                        </div>
                        <div className={styles.text}>
                            {dat.name}
                        </div>
                        <div className={styles.text2}>
                            {dat.total} items in menu
                        </div>

                    </div>
                )}
            </div>
            <div className={styles.selections}>
                  {['Explore','Store'].map((dat,index)=>  <div className={cx(styles.one,index==0?styles.active:null)}>
                        {dat}
                    </div>
                    )}
            </div>
            <div className={styles.list}>
                {options.slice(0,5).map((dat) =>
                       <div className={styles.pic}>
                            <img className={styles.picImage} src={dat.img} />
                        </div>
                       
                )}
            </div>
        </div>
    )
}

export default QR