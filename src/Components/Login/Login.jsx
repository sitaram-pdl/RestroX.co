import React from 'react'
import styles from './Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Login =(props)=>{
    const scrollHandle=()=>{
            var divs=document.getElementById('pictureRestro');
            console.log(divs.style)

            divs.style.scrollSnapAlign ='end'

            props.handleScroll()
    }
  
    return(
        <div className={styles.container}>
            <div className={styles.image} id='pictureRestro'>
                <img src='/images/people.png' className={styles.left}/>
            </div>   
            <div className={styles.rightSide}>
               <div className={styles.top}>
                   
                <div className={styles.logo}>
                    <img src='/images/restroLogo.png' className={styles.restroLogo}/>
                        
                </div>
                <div className={styles.question}>
                    New to RestroX?
                </div>
                <div className={styles.try}>
                    Try Demo
                </div>
                </div>
                <div className={styles.details}>
                      <img src='/images/restroXLogo2.png' className={styles.restroXLogo}/>
                    <div className={styles.title}>
                        Welcome to RestroX
                        <div className={styles.subTitle}>
                        Welcome Back
                    </div>
                    <div className={styles.loginTitle}>
                        Login to your account
                    </div>
                    <div className={styles.inputDivision}>
                        <div className={styles.inputTitle}>
                            Email
                        </div>
                        <div>
                            <input/>
                        </div>
                    </div>
                    <div className={styles.inputDivision}>
                        <div className={styles.inputTitle}>
                            Password
                        </div>
                        <div>
                            <input type='password'/>
                        </div>
                    </div>
                    <div className={styles.forgetDivi}>
                        <div className={styles.remember}>
                            <input type='radio'/>
                            Remember me
                        </div>
                        <div className={styles.forgot}>
                                Forgot Password?
                        </div>
                    </div>
                    <div className={styles.login}>
                            Log In
                    </div>
                    <div className={styles.google}>
                        <FcGoogle className={styles.gog}/>    or sign-in with Google
                    </div>
                    </div>
                    <div className={styles.register}>
                        Don't have an account? <Link onClick={()=>scrollHandle()}> Join Free Today</Link>
                    </div>
                    <div className={styles.register2}>
                        it takes less than a minute
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Login