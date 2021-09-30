import React,{useState,useRef,useEffect} from 'react'
import styles from './StoriesHeader.module.css'
import Demo from '../Home/demo.png'
import cx from 'classnames'

import {AiFillEye,AiOutlineUsergroupAdd,AiOutlineUserAdd} from "react-icons/ai"
import {HiUserAdd} from 'react-icons/hi'
import {IoNotificationsOutline,IoCheckmarkDone} from "react-icons/io5"

const StoriesHeader=(props)=>{
    const [stories,setStories]=useState([{'image':'/demo.png','value':'30'},{'image':'/demo.png','value':'4'},{'image':'/demo.png','value':'94'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'}])
   const [show,setShow]=useState(false)
    const size= "60px"
    const center = "30px"
    const radius= "28.5"
    const strokeWidth= "3px"
    const circleOneStroke=props.theme?"rgba(31, 29, 42, 0.084)":"gray"
    const circleTwoStroke='tomato'
    const wrapperRef=useRef(null)
    const [coordinates,setCoordinates]=useState({
        x:'',
        y:''
    })
    const showDiv=(add)=>{
        const a = document.getElementById('sideDrop')
      
        if(add){
            a.style.display="none"; 
        }
        else{
            a.style.display="flex"; 
        }
    }
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
              
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                 setShow(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    const clickHandler=(event)=>{
            setCoordinates({x:event.pageX,y:event.pageY})
            setShow(true)
    }
    return(
        <div className={styles.storiesContainer}> 
            <div className={styles.stories}>
                <div className={styles.singleRow}>
                {stories.map((dat)=><div className={styles.storiesDiv} >
                    <img className={styles.storiesLogo} src={Demo} ></img>
                    <div className={styles.circle}>
                    <svg className={styles.svg} width={size} height={size} onClick={(e)=>clickHandler(e)}>
                        <circle
                            className={styles.svgcirclebg}
                            stroke={circleOneStroke}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={strokeWidth}
                        />
                        <circle
                            className={styles.svgcircle}
                            stroke={circleTwoStroke}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={strokeWidth}
                            strokeDasharray={2* Math.PI *parseInt(radius)}
                            strokeDashoffset={((100 - parseInt(dat.value)) / 100) * 2 * Math.PI*parseInt(radius)}
                        />
                      
                    </svg>
                        </div>
                        <div className={cx(styles.name,props.theme?styles.white:null)}>
                            {dat.image.substr(1,4)}
                        </div>
                </div>)}
                </div>
            </div>
        {  show?  <div className={styles.absoluteDiv} ref={wrapperRef} style={{top:`${coordinates.y}px`,left:`${coordinates.x}px`}} onMouseLeave={()=>showDiv("hide")}>
            <div className={styles.absoluteDropdown} >
                       
                        <div className={styles.options}>
                           <AiFillEye/> <div className={styles.food}>View</div>
                        </div>
                        <div className={styles.options}>
                           <AiOutlineUsergroupAdd/> <div className={styles.foodDrop} onMouseEnter={()=>showDiv()}>Assign to Staff</div>
                        </div>
                        <div className={styles.options}>
                           <IoCheckmarkDone/> <div className={styles.food}>Mark as Done</div>
                        </div>
            </div>
            <div className={styles.absoluteDropdown2} id="sideDrop">
                       <div className={styles.topRow}>
                           
                           <div>
                           <HiUserAdd style={{marginRight:"0.4em"}}/> 
                             Assign Task to
                           </div>
                           <img className={styles.imageTop} src="/images/user.jpeg"/>
                       </div>
                      {stories.map((dat)=>
                            <div className={styles.options2}>
                          <div className={styles.optional}>  <img className={styles.imageTop2} src="/images/user.jpeg"/> <div className={styles.food}>Anis Acharya</div></div> 
                          <div className={styles.tasks}>
                              24 Task remaining
                            </div>
                            </div>
                      )} 
                     
           </div>
             </div>:null}
        </div>
    )
}

export default StoriesHeader