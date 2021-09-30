import React, { useState } from 'react'
import styles from './LineGraph.module.css'

const LineGraph=(props)=>{
    const size=9
    const radius= 4.3*window.innerWidth/100;
    const strokeWidth= 0.5
    const circleOneStroke=props.theme?"#E4E4E4":"#353440"
    const [data,setData]=useState([{'name':'Dine','value':'70'},{'name':'Dine','value':'70'},{'name':'Dine','value':'20'},{'name':'Dine','value':'70'}])
    return(<div className={styles.container}>
      <div className={styles.graph}>
          {data.map((dat,index)=>
            <svg className={styles.svg} width={`${size-(index)*2*strokeWidth}vw`} height={`${size-(index)*2*strokeWidth}vw`} style={{top:`${strokeWidth*index}vw`,left:`${strokeWidth*index}vw`,}} className={styles.circle}>
            <circle
                className={styles.svgcirclebg}
                stroke={circleOneStroke}
                cx={`${(size-(index)*2*strokeWidth)/2}vw`}
                cy={`${(size-(index)*2*strokeWidth)/2}vw`}
                r={`${((size-(index)*2*strokeWidth)/2)-(strokeWidth/2)}vw`}
                strokeWidth={`${strokeWidth}vw`}
            />
            <circle
                className={styles.svgcircle}
                stroke={`rgb(${122/(data.length-index)}, ${196/(index+1)}, ${108})`}
                cx={`${(size-(index)*2*strokeWidth)/2}vw`}
                cy={`${(size-(index)*2*strokeWidth)/2}vw`}
                r={`${((size-(index)*2*strokeWidth)/2)-(strokeWidth/2)}vw`}
                 strokeWidth={`${strokeWidth}vw`}
                strokeDasharray={2* Math.PI *parseInt((((size-(index)*2*strokeWidth)/2)-(strokeWidth/2))*window.innerWidth/100)}
                strokeDashoffset={((100 - parseInt(dat.value)) / 100) * 2 * Math.PI*parseInt((((size-(index)*2*strokeWidth)/2)-(strokeWidth/2))*window.innerWidth/100)}
                stroke-linecap="round"
         />
          
           </svg>
          )
               
          }
         

        {/* <svg className={styles.svg} width={size2} height={size2} className={styles.circle2}>
                        <circle
                            className={styles.svgcirclebg}
                            stroke={circleOneStroke2}
                            cx={center2}
                            cy={center2}
                            r={radius2}
                            strokeWidth={strokeWidth2}
                        />
                        <circle
                            className={styles.svgcircle}
                            stroke={circleTwoStroke2}
                            cx={center2}
                            cy={center2}
                            r={radius2}
                            strokeWidth={strokeWidth2}
                            strokeDasharray={2* Math.PI *parseInt(radius2)}
                            strokeDashoffset={((100 - parseInt(50)) / 100) * 2 * Math.PI*parseInt(radius2)}
                        />
                      
                    </svg>
                    <svg className={styles.svg} width={size3} height={size3} className={styles.circle3}>
                        <circle
                            className={styles.svgcirclebg}
                            stroke={circleOneStroke3}
                            cx={center3}
                            cy={center3}
                            r={radius3}
                            strokeWidth={strokeWidth3}
                        />
                        <circle
                            className={styles.svgcircle}
                            stroke={circleTwoStroke3}
                            cx={center3}
                            cy={center3}
                            r={radius3}
                            strokeWidth={strokeWidth3}
                            strokeDasharray={2* Math.PI *parseInt(radius3)}
                            strokeDashoffset={((100 - parseInt(16)) / 100) * 2 * Math.PI*parseInt(radius3)}
                        />
                      
                    </svg>
                    <svg  width={size4} height={size4} className={styles.circle4}>
                        <circle
                            className={styles.svgcirclebg}
                            stroke={circleOneStroke4}
                            cx={center4}
                            cy={center4}
                            r={radius4}
                            strokeWidth={strokeWidth4}
                        />
                       
                    </svg> */}
                    </div>
        
                    <div className={styles.legend}>
                        {data.map(((dat,index)=>
                           <div className={styles.row}>
                           <div className={styles.dot} style={{backgroundColor:`rgb(${122/(data.length-index)}, ${196/(index+1)}, ${108})`}}/>
                           <div className={styles.right}>
                              <div>{dat.name}</div> 
                              <div className={styles.customers}> 20 Customer</div>
                           </div> 
                       </div>
                            ))}
                     
                      
                        <div>

                        </div>
                    </div>

    </div>)
}
export default LineGraph