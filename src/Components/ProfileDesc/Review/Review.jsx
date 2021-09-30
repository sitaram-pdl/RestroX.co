import React, { useState } from 'react'
import styles from './Review.module.css'
import Star5 from './5star.PNG'
import {FaQuoteRight,FaQuoteLeft,FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
const Review=()=>{
    const size='80px'
    const circleOneStroke='#ffffff'
 const circleTwoStroke='#71af0c'
    const center="40px"
    const radius= 36
    const strokeWidth= '8px'
    const circumference=(2 * Math.PI * radius)
    const progress =4
    const [data,setData]=useState([{'name':'Punctual','rating':'2.2'},{'name':'Hygeine','rating':'2'},{'name':'Discipline','rating':'5'},{'name':'Friendly','rating':'2'},{'name':'Helpful','rating':'1'}])
    const [review,setReview]=useState([{'name':'Swadesh Nepali','image':'https://s12.favim.com/orig/160320/black-and-white-celebrities-guys-handsome-Favim.com-4096642.jpg','review':'Very Good Staff','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati'},{'name':'Subinbhandari','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati','image':'https://i.pinimg.com/originals/b3/e8/71/b3e871dca11a1afadfab669387b690ee.jpg','review':'Honest & Disciplined'},{'image':'https://i.pinimg.com/originals/a6/36/2d/a6362d20f2411db44cc946ce14c8672a.png','name':'Jake Gyllenhaal','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati','review':'Not so Helpful'},{'name':'Leonardo DCaprio','image':'https://s12.favim.com/orig/160320/black-and-white-celebrities-guys-handsome-Favim.com-4096642.jpg','review':'Very Good Staff','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati'},{'name':'David Beckham','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati','image':'https://i.pinimg.com/originals/b3/e8/71/b3e871dca11a1afadfab669387b690ee.jpg','review':'Honest & Disciplined'},{'image':'https://media.giphy.com/media/nntN4XMNwTzZ6/giphy.gif','name':'Adeh Pandey','long':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae alias quod hic ipsa delectus eum quos ea nisi sunt? Quibusdam, eaque! Eius, id sit reprehenderit doloribus dolorem eum obcaecati','review':'Not so Helpful'}])
  
    return(
        <div className={styles.container}>
            <div className={styles.topRow}>
                <div className={styles.badges}>
                    <img src={Star5} className={styles.image}/>
                    <div className={styles.absolute}>
                    4.5 / 5
                </div>
                </div>
                <div className={styles.badges}>
                <img src={Star5} className={styles.image}/>
                <div className={styles.absolute}>
                    3.5 / 5
                </div>
                </div>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.badges}>
                    <div className={styles.text3}>
                    Team Rating
                </div>
                </div>
                <div className={styles.badges}>
                 <div className={styles.text3}>
                    Customer Rating
                </div>
                </div>
            </div>
            <div className={styles.row}>
                {data.map((dat)=>
                     <div className={styles.column}>
                     <svg className={styles.svg} width={size} height={size}>
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
                             strokeDasharray={circumference}
                             strokeDashoffset={((100 - parseFloat(dat.rating)*100/5) / 100) * circumference}
                         />
                         <text className={styles.svgcircletext} x={center}  y={center}>
                             {parseFloat(dat.rating)}/5
                         </text>
                     </svg>
                     <div>
                        {dat.name}
                     </div>
                     </div>
                )}
             
            </div>
            <div className={styles.hr}/>
            <div className={styles.reviews}>
                {review.map((dat)=>
                     <div className={styles.box}>
                     <div className={styles.title}>
                         <div className={styles.img}> 
                            <img src={dat.image} className={styles.profileImage}/>
                        </div>{dat.name}
                      </div>
                      <div className={styles.titleDesc}>
                         {dat.review} 
                      </div>
                      <div className={styles.titleReview}>
                         {dat.long} 
                      </div>
                      <div className={styles.titleDate}>
                         {new Date().toDateString().substr(0,19)}
                      </div>
                      <div className={styles.hr2}/>
                      <div className={styles.reactions}>
                         <div className={styles.love}>
                             <AiOutlineHeart/> <div className={styles.text}>12</div>
                         </div>
                         <div className={styles.comment}>
                             <FaRegComment/>  <div className={styles.text2}>2</div>
                         </div>
                         <div className={styles.reply}>
                             Reply
                         </div>
                      </div>
                 </div>
               )}
               
            </div>
        </div>
    )
}

export default Review