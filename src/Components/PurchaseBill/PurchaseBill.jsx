import React, { useState } from 'react'
 import styles from './PurchaseBill.module.css'
import {FaPhoneSquareAlt} from 'react-icons/fa'

import {IoIosAdd} from 'react-icons/io'
import {IoAddOutline} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
 const PurchaseBill=(props)=>{
    const [data,setData]=useState({
        sn:'',
        particular:'',
        amount:'',
        price:'',
        qty:''
    })
    const [imageFile,setFile]=useState([])
    const [image,setImage]=useState({img:''})
   

     const inputHandler=text=>e=>{
         e.preventDefault()
        setData({...data,[text]:e.target.value})
            }
            const handleAdd=()=>{
            setIngredients(ingredients.concat({'sn':data.sn,'qty':data.qty,'particular':data.particular,'amount':data.amount,'price':data.price})) 
            setData({
             sn:'',
            particular:'',
            amount:'',
            price:'',
            qty:''
        })    
        }

        const [ingredients,setIngredients]=useState([])
        const handleFile=e=>{
            e.preventDefault();
      
                  let reader = new FileReader();
               
               
                  let file = e.target.files;
                //   let tempFile=[...imageFile].concat(file[0])
                  setFile(file[0])
               reader.onloadend = () => {
                //   let tempImg=[...image].concat({'img':reader.result});
                  setImage({'img':reader.result});
                }
         if(file[0]){
               reader.readAsDataURL(file[0]);
       } }
       const deleteImage=e=>{
       
         setImage({img:''})
        setFile([])
    
        
     }
     return(
         <div className={styles.container}>
             <div className={styles.left}>
                <div className={styles.title}>
                    Purchase Bill
                </div>
                <div className={styles.bill}>
                    {/* <div className={styles.topBar}>
                        <div className={styles.invoice}>
                            Invoice No: #123213
                        </div>
                        <div>
                            Date: {new Date().toDateString()}
                        </div>

                    </div> */}
                   <div className={styles.topBar2}>
                        <div className={styles.invoice}>
                           <div className={styles.storeName}>
                               RG TRADERS
                            </div>
                            <div>
                               Lekhnath
                            </div>
                            <div>
                              VAT NO: 1234134
                            </div>
                            <div>
                              <FaPhoneSquareAlt/> 9812441590
                            </div>
                        </div>
                        <div>
                        <div className={styles.invoice3}>
                            
                            Invoice<br/> 123213
                        {/* <div>
                              Address: Lekhnath
                            </div>
                            <div>
                              VAT NO: 1234134
                            </div>
                            <div>
                              Contact Number: 9812441590
                            </div> */}
                        </div>
                           
                        </div>

                    </div>
                    <div className={styles.hr}/>
                    <div className={styles.table}>
                        <div className={styles.topTable}>
                            <div className={styles.sn}>
                                S.N
                            </div>
                            <div className={styles.item}>
                                Particular
                            </div>
                            <div className={styles.price}>
                                Unit Price
                            </div>
                            <div className={styles.qty}>
                                QTY
                            </div>
                            <div className={styles.total}>
                                Total Amount
                            </div>
                        </div>
                        {ingredients.map((dat)=>
                                <div className={styles.topTable2}>
                                <div className={styles.sn}>
                                   {dat.sn}
                                </div>
                                <div className={styles.item}>
                                    {dat.particular}
                                </div>
                                <div className={styles.price}>
                                   Rs {dat.price}
                                </div>
                                <div className={styles.qty}>
                                    {dat.qty}
                                </div>
                                <div className={styles.total}>
                                   Rs {dat.amount}
                                </div>
                            </div>   
                        )
                             
                        }
                        <div className={styles.topTable}>
                            <div className={styles.sn}>
                                <input placeholder='ex : 1' onChange={inputHandler('sn')} value={data.sn} type='number' className={styles.input}/>
                            </div>
                            <div className={styles.item}>
                            <input placeholder='ex: Rice' onChange={inputHandler('particular')} value={data.particular} className={styles.input} />
                            </div>
                            <div className={styles.price}>
                            <input placeholder='ex: 200' onChange={inputHandler('price')} type='number'value={data.price} className={styles.input}/>
                            </div>
                            <div className={styles.qty}>
                             <input placeholder='ex: 2' onChange={inputHandler('qty')} type='number' value={data.qty} className={styles.input}/>
                            </div>
                            <div className={styles.total}>
                             <input placeholder='ex: 400' value={data.amount} onChange={inputHandler('amount')} type='number' className={styles.input}/>
                            </div>
                        </div>
                        <div className={styles.addDiv}>
                            <div className={styles.addBtn}>
                                <IoIosAdd size='30' onClick={()=>handleAdd()}/>
                            </div>
                    </div>
                    </div>
                    
                </div>
             </div>
             <div className={styles.right}>
                       {image.img ?
                       <div className={styles.image}  onClick={deleteImage}>
                           <img src={image.img} className={styles.img}/>
                           <div className={styles.overlay} onClick={deleteImage}><MdDelete color="tomato" size={50}/></div>
                      </div>
                           :<div className={styles.image}>
                            <div className={styles.relative}>
                            <input type="file"  onChange={handleFile} className={styles.inputFile}  placeholder="Display"></input>    
                            <div className={styles.absolute}>
                            <div className={styles.addButton} >
                                <IoAddOutline size='40'/>
                            </div>
                            <div className={styles.addPhoto}>
                                Add Real Bill Photo
                            </div>
                            <div className={styles.subText}>
                            {'You can view your real view side by side.to upload bill photo open your restro x app, then bill>Upload  bill photo> upload photo( you can also catorize bills.click add buton above and bill photo will be there.'}
                            </div>
                            </div>
                           </div>
                        </div>}
             </div>
         </div>
     )
 }

 export default PurchaseBill