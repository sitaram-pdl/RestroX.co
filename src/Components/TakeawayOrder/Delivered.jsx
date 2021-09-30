import React ,{useEffect} from 'react'
import { useState } from 'react'
import styles from './Delivery.module.css'
import Item from './Item'
import ProcessingItem from './ProcessingItem'
const Delivered=()=>{
    const[change,setChange]=useState()
   const [minHeight, setMinHeight] =useState(0)
    useEffect(()=>{
        var grid = document.getElementById('masonry');
        var first = document.getElementById('id0');
      
        if(!minHeight){
            
            grid.style.gridAutoRows = `${first.getBoundingClientRect().height }px`;
            setMinHeight(first.getBoundingClientRect().height)
            
                
            }
        // rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        // rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        [1,23,6,45,6].forEach((dat,index)=>
            {
                

                var box = document.getElementById(`id${index}`)
                var rowSpan = Math.ceil((box.getBoundingClientRect().height ) / (minHeight));
             
                if(box.querySelector('#desc')){
                    box.style.gridRowEnd = 'span '+ (3)
           
                }
                else{
                    box.style.gridRowEnd = 'span '+ (1)
           
                }
            }            
        )
    },[change])

    return(
        <div className={styles.pendingContainer2} >
            <div className={styles.topRow}>
                <div className={styles.title}>
                    Ready for Take Away
                </div>
                <div className={styles.subText}>
                    24 Orders ready
                </div>
            </div>
            <div className={styles.lowerDiv3} id="masonry">
               {[1,23,6,45,6].map((dat,index)=><ProcessingItem id={`id${index}`} setChange={setChange} />)}
            </div>
        </div>
    )
}

export default Delivered