import React , { useState }  from 'react'
import styles from './NavElements.module.css'

import cx from 'classnames'
   
const NavElements=(props)=>{
   
    const size= 4
    const strokeWidth= 0.3
    const circleOneStroke=props.theme?"rgba(31, 29, 42, 0.084)":"rgb(34, 51, 55)"
    const circleTwoStroke='tomato'
    const [stories,setStories]=useState([{'image':'/images/demo.png','name':'Add Order','value':'0'},{'image':'/images/Symbian.png','name':'Add Story','value':'40'},{'image':'/images/menu.jpeg','name':'Merge Table','value':'94'},{'image':'/images/burger.png','name':'Prepare Bill','value':'44'},{'image':'/images/bill.jpeg','name':'Add Notes','value':'44'},{'name':'Edit Bill','image':'/images/demo.png','value':'44'},{'image':'/images/Chef.png','name':'Add Task','value':'44'},{'image':'/images/demo.png','value':'44'},{'image':'/images/burger.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'}])
    
    

    return(
        <div className={styles.container}>
                 {stories.slice(0,9).map((dat,index)=><div className={styles.storiesDiv}>
                    <img className={styles.storiesLogo} src={dat.image}></img>
                    <div className={styles.circle}>
                    <svg className={styles.svg} width={`${size}vw`} height={`${size}vw`}>
                        <circle
                            className={styles.svgcirclebg}
                            stroke={circleOneStroke}
                            cx={`${size/2}vw`}
                            cy={`${size/2}vw`}
                            r={`${(size/2)-(strokeWidth/2)}vw`}
                            strokeWidth={`${strokeWidth}vw`}
                        />
                        {/* <circle
                            className={styles.svgcircle}
                            stroke={circleTwoStroke}
                            cx={`${size/2}vw`}
                            cy={`${size/2}vw`}
                            r={`${(size/2)-(strokeWidth/2)}vw`}
                            strokeWidth={`${strokeWidth}vw`}
                            strokeDasharray={2* Math.PI *parseInt((((size/2)-(strokeWidth/2))*window.innerWidth)/100)}
                            strokeDashoffset={((100 - parseInt(dat.value)) / 100) * 2 * Math.PI*parseInt((((size/2)-(strokeWidth/2))*window.innerWidth)/100)}
                        /> */}
                      
                    </svg>
                   
                        </div>
                        <div className={cx(styles.name,props.theme?styles.white:null)}>
                            {dat.name}
                        </div>
                </div>)}
        </div>
    )
}

export default NavElements