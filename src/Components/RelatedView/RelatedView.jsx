import React,{useState} from 'react'
import styles from './RelatedView.module.css'
import cx from 'classnames'
const RelatedView=(props)=>{
    const [item,setItem]=useState([{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"}])

    return(
        <div className={styles.container}>
           {props.name? <div className={cx(styles.title,props.theme?styles.white:styles.black)}>
               Similar Foods
            </div>
                :
                <div className={cx(styles.title,props.theme?styles.white:styles.black)}>
                Would you Like to Add More Food?
            </div>
                }
            <div className={styles.slider}>
                <div className={styles.innerRow}> 
                  {item.map((dat)=> 
                   <div className={styles.individual}>  
                        <div>
                            <img className={styles.image} src={dat.image}/>

                        </div>
                        <div className={cx(styles.name,props.theme?styles.white:styles.black)}>
                            {dat.name}
                        </div>
                   </div>
                        )}
                </div>
            </div>
        </div>
    )
}
export default RelatedView
