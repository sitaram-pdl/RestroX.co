import React from 'react'
import styles from './Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Register =(props)=>{
   
    return(
        <div className={styles.container}>
            <div className={styles.image}>
              </div>   
            <div className={styles.rightSide}>
               <div className={styles.top}>
                   
                <div className={styles.logo}>
                    <img src='/images/restroLogo.png' className={styles.restroLogo}/>
                        
                </div>
                <div className={styles.question}>
                    Already a member?
                </div>
                <div className={styles.try} onClick={()=>props.handleLogin()}>
                   Log in
                </div>
                </div>
                <div className={styles.details2}>
                    <div className={styles.title2}>
                        Sign up for RestroX
                    <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           First Name
                        </div>
                        <div>
                            <input placeholder='John'/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                            Last Name
                        </div>
                        <div>
                            <input placeholder='Doe' />
                        </div>
                    </div>
                    </div>
                    <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                          Restaurant Name
                        </div>
                        <div>
                            <input placeholder='Restro x Restaurant Pvt Ltd.'/>
                        </div>
                    </div>
                  
                    </div>
                    <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           Phone Number
                        </div>
                        <div>
                            <input placeholder='+977'/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                           Email
                        </div>
                        <div>
                            <input placeholder='johndoe@gmail.com' />
                        </div>
                    </div>
                    </div>
                    <div  className={styles.singleInput}>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                          Password
                        </div>
                        <div>
                            <input type='password' placeholder='**********'/>
                        </div>
                    </div>
                    <div className={styles.registerInput}>
                        <div className={styles.inputTitle}>
                            Confirm Password
                        </div>
                        <div>
                            <input type='password'  placeholder='**********' />
                        </div>
                    </div>
                    </div>
                        <div className={styles.terms}>
                            <input type='checkbox'/>
                            I agree to Terms & Conditions
                  
                    </div>
                    <div className={styles.login} onClick={()=>props.setSecond(true)}>
                           Sign Up
                    </div>
                    <div className={styles.google}>
                        <FcGoogle className={styles.gog}/>    or sign up with Google
                    </div>
                    </div>
                
                </div>
               
            </div>
        </div>
    )
}

export default Register