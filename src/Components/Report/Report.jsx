import React from 'react'
import styles from './Suggestion.module.css'
import Plane from './plane.gif'
const Report=(props)=>{
  const  click=()=>{
            var a = document.getElementById('image')
            a.style.width='100px'
            a.style.height='100px';
            var b = document.getElementById('plane')
            var c = document.getElementById('plane2')
            var x = document.getElementById('planeS') 
            
            var y = document.getElementById('row') 

                b.style.display='flex'
                c.style.display='flex'
                y.style.display='none'
                setTimeout(() => {
                    a.style.rotate='200'
                   a.style.display='none'
                  
                   x.style.opacity='1'
                   x.style.height='400px'

                  }, 1000);
                  setTimeout(()=>{
                    x.style.display='none'
                    
                  },2800)
    }   
    return(
        <div className={styles.container}>
            <div className={styles.title} >
               Send Report
            </div>
            <div className={styles.black} >

                <div className={styles.background} id='image'>
                    <div className={styles.toDiv}>
                        <div className={styles.bold}>
                            To:
                        </div>
                        <div className={styles.inputDiv}>
                            <input value='Restro X Support Team' className={styles.input} type='text'/>
                        </div>
                    </div>
                    <div className={styles.toDiv}>
                        <div className={styles.bold}>
                            Subject:
                        </div>
                        <div className={styles.inputDiv}>
                            <input className={styles.input} type='text'/>
                        </div>
                    </div>
                    <textarea className={styles.description} placeholder='To Identify your issue faster.please describe the issue as detailed as possible'> 

                    </textarea>
                    <div className={styles.right} id='plane'>

                    </div>
                    <div className={styles.left} id='plane2'>

                    </div>
                </div>
                <div className={styles.plane} id='planeS'>
                    <img src={Plane} className={styles.image}/>
                </div>
               
            </div>
            <div className={styles.lastRow} id='row'>
             <div className={styles.button2}>
                   Save Draft
                </div>
                <div className={styles.button} onClick={click}>
                    Send Report
                </div>
              
            </div>
                
        </div>
    )
}

export default Report