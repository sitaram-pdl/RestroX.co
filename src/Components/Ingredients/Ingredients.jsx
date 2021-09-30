import React ,{useState} from 'react'

import styles from './Ingredients.module.css'
import cx from 'classnames'
const Ingredients=(props)=>{

    const [ing,setIng]=useState([{'ing':"1 lb  ground chicken    1/3 cup     breadcrumbs, dry 1/3 cup    Milk    1/4 cup    Green onions, chopped       1 tsp         Worcestershire sauce        1/4 tsp      salt        1/4 tsp      pepper        tomato, sliced cucumber, sliced       green onion, sliced lettuce        mayonnais     6 whole wheat pitas or hamburger rolls"}])
    return(<div className={styles.container}>   
        <div className={cx(styles.title,props.theme?styles.white:styles.black)}>
            Ingredients
        </div>
        <div className={styles.modal}>
            {ing.map((data)=>
                
                
                <div>{data.ing.toLocaleUpperCase()}</div>)}
        </div>
    </div>)
}

export default Ingredients