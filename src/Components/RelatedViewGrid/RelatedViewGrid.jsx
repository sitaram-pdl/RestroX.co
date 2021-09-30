import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Grid.module.css'
import cx from 'classnames'

import {FiMinus,FiPlus} from 'react-icons/fi'
const Grid=(props)=>{
    const [item,setItem]=useState([{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200","name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200","name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"}])

    return(
       
       <div>
     <div className={cx(styles.title,props.theme?styles.white:styles.blackText2)}>
       Similar Products
   </div>
       <div className={styles.container}>
           


         {item.map((data)=>  <div>
               <div className={styles.pallete}>
               <div className={cx(styles.background,props.theme?styles.white:styles.black)}>
                   <img src={data.image} className={styles.img}></img>
                   <div className={styles.itemDesc}>
                      <div className={styles.itemName}> {data.name}</div>
                      <div className={styles.ratingRow}>
                    <div className={styles.timeBar}>
                      <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 3.42858V7.50001L10.2143 8.85715M14.2857 7.50001C14.2857 11.2477 11.2477 14.2857 7.50001 14.2857C3.75236 14.2857 0.714294 11.2477 0.714294 7.50001C0.714294 3.75236 3.75236 0.714294 7.50001 0.714294C11.2477 0.714294 14.2857 3.75236 14.2857 7.50001Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                          
                          
                           <div className={styles.time}>{data.time}</div> 
                         </div>  
                           
                           <div className={styles.rating}> 
                           
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25203 0.829806L7.65575 3.79378L10.5303 4.09937C10.8193 4.13967 11.0582 4.34491 11.1416 4.62453C11.225 4.90414 11.1376 5.20672 10.9179 5.39875L8.63215 7.28446L9.34023 10.4522C9.39591 10.7381 9.27992 11.0303 9.04327 11.2001C8.80662 11.37 8.4927 11.3865 8.2396 11.2422L5.58619 9.62981L2.93526 11.2422C2.68216 11.3865 2.36824 11.37 2.13159 11.2001C1.89494 11.0303 1.77895 10.7381 1.83464 10.4522L2.54271 7.28446L0.254511 5.39875C0.034697 5.20638 -0.0524846 4.90334 0.0314998 4.62357C0.115484 4.3438 0.355153 4.13887 0.644573 4.09937L3.51911 3.79378L4.92283 0.829806C5.04989 0.579544 5.30676 0.421875 5.58743 0.421875C5.8681 0.421875 6.12497 0.579544 6.25203 0.829806Z" fill="#FFCC00"/>
                            </svg>


                           
                           <div className={styles.ratingNumber}>{data.rating}
                           </div>
                           </div></div>
                  <div className={styles.lastList}>    <div className={styles.price}>Rs.{data.price} </div>
                      <div className={styles.toggleBar}>
                      <div className={cx(styles.button,props.theme?styles.white:styles.blackText)}>
                                     <FiMinus/>
                                 </div>
                        <div>

                            1
                        </div>

                        <div className={cx(styles.button,props.theme?styles.white:styles.blackText)}>
                                     <FiPlus />
                                 </div>

                     </div>                   
                    </div>
                    </div>   
                </div>
            </div>
        </div>   )}
        </div></div>
    )
}


export default Grid