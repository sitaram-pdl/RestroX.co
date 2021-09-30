import React ,{useState,useRef,useEffect} from 'react'
import styles from './Single.module.css'
import {BsThreeDots} from 'react-icons/bs'
import {IoAddSharp} from 'react-icons/io5'
import {BiMessageDetail} from 'react-icons/bi'

import cx from 'classnames'

import {AiFillEye,AiOutlineUsergroupAdd,AiOutlineUserAdd} from "react-icons/ai"
import {HiUserAdd} from 'react-icons/hi'
import {IoNotificationsOutline,IoCheckmarkDone} from "react-icons/io5"

const Single=(props)=>{
    const [item,setItem]=useState([{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"500"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200","name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200","name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Chicken Pasta","image":"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"},{"name":"Ham and Cheese Club Sandwich","image":"https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg","time":"20 Minutes","rating":"4.8","price":"400"},{"name":"Mo:Mo","image":"https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1","time":"10 Minutes","rating":"4.8","price":"200"}])
    const [stories,setStories]=useState([{'image':'/demo.png','value':'30'},{'image':'/demo.png','value':'4'},{'image':'/demo.png','value':'94'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'},{'image':'/demo.png','value':'44'}])
    const [show,setShow]=useState(false)
   
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
        var dots = document.getElementById('dot')
            setCoordinates({x:event.pageX,y:(dots.getBoundingClientRect().top + dots.getBoundingClientRect().height + 15)})
            setShow(true)
    }
    return(
        <div className={styles.container}>

            <div className={styles.firstRow}>
                <div className={cx(styles.todo,props.name=='In Progress'?styles.progress:null,props.name=='Completed'?styles.completed:null)} >
                    {props.name}
                </div>
                <div>
                    25 Tasks
                </div>
                <div className={styles.options22}>
                    <BsThreeDots size='1.2em' onClick={(e)=>clickHandler(e)} id='dot'/>
                    <IoAddSharp size='1.2em' style={{margin:'0 0.4em '}}/>
                </div>
            </div>
            <div className={styles.scrollTask}>
    {    [0,12,3,4,5].map((dat)=>        <div className={styles.box}>
                    <div className={styles.topBox}>
                        <div className={styles.priority}>
                            High
                        </div>
                        <div className={styles.date}>
                            {new Date().toString().slice(0,10)}
                        </div>
                        
                    </div>
                    <div className={styles.desc}>
                        Payment of internet bill
                    </div>
                    <div className={styles.topBox}>
                    <div className={styles.orderImage}>

                        {item.slice(0,5).map((dat)=>
                        <div>
                        <img src={dat.image}  className={styles.image}/>
                        </div>
                        )}
                        </div>
                     
                        <div className={styles.message}>
                            <BiMessageDetail size='1.5em'/>
                        </div>
                    </div>
                </div>
                )}
            </div>
            {  show?  <div className={styles.absoluteDiv} ref={wrapperRef} style={{top:`${coordinates.y}px`,left:`${coordinates.x -  160}px`}} onMouseLeave={()=>showDiv("hide")}>
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

export default Single