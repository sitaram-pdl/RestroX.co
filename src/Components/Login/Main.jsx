import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'
import More from './More'
const Main =()=>{
    const [second,setSecond] = useState(false)
    const handleScroll=()=>{
        var divs=document.getElementById('ScrollDiv');
        divs.scrollBy({
            top:0,
            left:-250,
            behavior:'smooth'
        })
    }
    const handleLogin=()=>{
        var divs=document.getElementById('ScrollDiv');
        divs.scrollBy({
            top:0,
            left:+250,
            behavior:'smooth'
        })
    }
    return(
        <div className={styles.mainContainer} onScroll={e=>e.preventDefault()} id='ScrollDiv'>
           {
                second? <More/>: 
            <div className={styles.scroll}>
                
            <Register setSecond={setSecond} handleLogin={handleLogin}/>
            <Login handleScroll={handleScroll}/>
           
            </div>}
        </div>
    )
}

export default Main