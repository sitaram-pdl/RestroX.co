import React from 'react'
import styles from './Right.module.css'
import {MdKeyboardBackspace,MdKeyboardArrowRight} from 'react-icons/md'
import { useState } from 'react'
import UserMenu from '../UserMenu/UserMenu'
const Right=()=>{
    const [categories,setCategories]=useState([{'name':'All Foods'},{'name':'All Foods'},{'name':'All Foods'}])
    const [items,setItems]=useState([{'name':'Spicy Seasoned Seafood','id':'AAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'},{'name':'Spicy Seasoned Seafood','id':'AAAAAA','image':'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/05/stew1-1-11.png?fit=750%2C750&ssl=1'}])   
    return(
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.title}>
                        <div>
                            <MdKeyboardBackspace/>
                        </div> 
                         <div className={styles.titleName}>
                            Chicken Pasta
                         </div>   
                    </div>
                    <div className={styles.lowerDiv}>
                        <div className={styles.category}>
                            {
                            categories.map((data)=>
                            <div className={styles.name}>
                                {data.name}
                            </div>
                            )
                            }
                        </div>

                        <div className={styles.table}>
                            <div className={styles.tableBg}>
                                <div className={styles.id}>
                                    Id
                                </div>
                                <div className={styles.items}>
                                    Items
                                </div>
                            </div>
                            {
                                items.map((dat)=>
                                <div className={styles.tableWBg}>
                                <div className={styles.id}>
                                    {dat.id}
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.image}>
                                        <img src={dat.image}  className={styles.image}/>
                                    </div>
                                    <div className={styles.desc}>
                                            {dat.name}
                                    </div>
                                </div>
                                <div className={styles.point}>
                                    <MdKeyboardArrowRight size='22'/>
                                </div>
                            </div>
                                
                                )
                            }
                           
                        </div>
                    </div>
                </div>
                    <div className={styles.rightContainer}>
                        <UserMenu/>
                    </div>

            </div>
        )
}

export default Right