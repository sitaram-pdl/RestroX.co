import React, { useState ,useRef,useEffect} from 'react'
import styles from './AddItem.module.css'
import {IoIosAdd} from 'react-icons/io'
import Dropdown from 'react-dropdown'
import {MdDelete} from 'react-icons/md'

import {IoAddOutline} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
import './Custom.css'
import cx from 'classnames'
const PurchaseInvoice=(props)=>{
    const [preview,setPreview] = useState(false)
     const [data,setData]=useState({
        items:'',
        value:''
    })
    const [coordinates,setCoordinates] = useState({
        x:0,
        y:0
    })
    const wrapperRef = useRef(null);
    const [view,setView]= useState(false)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setView(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    const options = [
        { value: 'Most Ordered', label: 'Most Ordered' },
        { value: 'Most Reviewed', label: 'Most Reviewed' }, 
        { value: 'Most Order Type', label: 'Most Order Type' },
        { value: 'Most Delivered', label: 'Most Delivered' },
        
        ]
      
        const [toppings,setToppings]=useState([])

        const [varients,setVarients]=useState([])
        const [inventory,setInventory]=useState([])
        const [item,setItem]=useState(0)
      const tab=['Item','Description']
        const handleOption=(e)=>{
            setView(true)
            
           setCoordinates({
                x:e.pageX,
                y:( window.innerHeight - e.pageY + 30)
          
            })
        }
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
             <div className={styles.table}>
             <div className={styles.title}>
                Purchase Invoice
            </div>
                <div className={styles.billSeperator}>
                <div className={styles.scrollbar}>

                {/* <div className={styles.row}>
               <div className={styles.categoryImage}>
             {image.length<1?  <div className={styles.relative}><img  src='/images/burger.png' className={styles.imagePic}></img></div>
:null}     
                   {image.map((img,index)=><div className={styles.relative}><img  src={img.img} className={styles.imagePic}></img><div className={styles.overlay} onClick={deleteImage(index)}><MdDelete color="tomato" size={30}/></div></div>)}</div>
                    <input type="file"  onChange={handleFile} className={styles.inputFile}  placeholder="Display"></input>    
               </div> */}
               <div className={styles.topRow}>

                <div className={styles.left}>
                <div className={styles.rowInput}>
                    <div className={styles.topbar}>

                <div className={styles.title2}>
                   Supplier Name
                </div>
                <div className={styles.inputDiv}>
                       <Dropdown options={options}/>
                </div>
                </div>
                <div className={styles.topbar}>

                <div className={styles.title2}>
                    Purchase Email
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>
                </div>
                </div>
                </div>
                </div>
                <div className={styles.rowInput}>
                    <div className={styles.topbar}>

                <div className={styles.title2}>
                    Contact
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>
                </div>
                </div>
                </div>
                <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Invoice Date
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                </div>
                <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Due Date
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className={styles.middle}>
                <div className={styles.topbar5}>

                        <div className={styles.title2}>
                        Billing Location
                        </div>
                        <div className={styles.inputDiv}>
                                <div className={styles.inputBg}>
                                <input className={styles.input5} type='text'/>

                                </div>
                            </div>
                        </div>
                </div>
                <div className={styles.right}>
                <div className={styles.topbar}>

                        <div className={styles.title2}>
                        Invoice No.
                        </div>
                        <div className={styles.inputDiv}>
                                <div className={styles.inputBg}>
                                <input className={styles.input} type='text'/>

                                </div>
                            </div>
                        </div>
                        <div className={styles.rowInput2}>
                        <div className={styles.topbar}>

                            <div className={styles.title2}>
                             Real Invoice
                            </div>
                            <div className={styles.inputDiv}>
                                    <div className={styles.inputBg}>
                                    <input className={styles.input} type='text'/>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.topbar}>

                          
                            <div className={styles.inputDiv}>
                                    <div className={styles.inputBg}>
                                    <input className={styles.input} type='text'/>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.topbar}>

                          
                        <div className={styles.inputDiv}>
                                <div className={styles.inputBg}>
                                <input className={styles.input} type='text'/>

                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
                <div className={styles.rowInput}>

                {tab.map((dat,index)=><div onClick={()=>setItem(index)} className={cx(styles.title5,index===item?styles.active:null)}>
                    {dat}
                </div>
                )}
                </div>
            
             { item==0?<div className={styles.table1}>
                 <div className={styles.tableCenter}>
                    <div className={styles.sn}>
                        S.No
                    </div>

                    <div className={styles.product}>
                        Product /Services
                    </div>

                    <div className={styles.product}>
                        Qty
                    </div>
                    { preview?null:  <div className={styles.product}>
                        Description
                    </div>}

                   
                   
                    <div className={styles.product}>
                        Rate
                    </div>
                    <div className={styles.product}>
                       Amount
                    </div>
                    <div className={styles.sn}>
                    
                </div>


             </div>
            {[0,1,2,3].map((dat,index)=> <div  style={{}}className={cx(styles.tableCenter,(index % 2 == 0)?styles.none:null)}>
                    <div className={styles.sn}>
                        {index + 1}
                    </div>

                    <div className={styles.product}>
                        ASdas
                    </div>

                    <div className={styles.product}>
                        {parseInt(index *Math.random()*22)}
                    </div>
                 { preview?null:  <div className={styles.product}>
                        Description
                    </div>}
                   

                    

                    <div className={styles.product}>
                        {parseInt(index *Math.random()*22)}
                    </div>

                    <div className={styles.product}>
                        Rs 100
                    </div>
                    <div className={styles.sn}>
                        <MdDelete color='gray' size={'1.8em'}/>
                </div>


             </div>)}
             </div>:  <div className={styles.inputDiv2}>
                    <div className={styles.inputBg2}>
                    <textarea className={styles.input2} type='text'/>

                    </div>
                </div>}
              
                <div className={styles.hr2}/>
                <div className={styles.mainRow}>
                    <div className={styles.leftButton}>
                <div className={styles.rowInput}>

                  <div className={cx(styles.title5,styles.active2)}>
                    Add Lines
                    </div>
                    <div className={cx(styles.title5,styles.active2)}>
                        Clear All Lines
                    </div>
                    <div className={cx(styles.title5,styles.active2)}>
                        Add Sub Total
                    </div>

{/*  */}         </div>
                <div className={styles.topbar5}>

                <div className={styles.title2}>
                    Message on Remarks
                </div>
                <div className={styles.inputDiv}>
                        <div className={styles.inputBg}>
                        <input className={styles.input5} type='text'/>

                        </div>
                    </div>
                </div>
                <div className={styles.topbar5}>

                <div className={styles.title2}>
                    Message on Footer
                </div>
                <div className={styles.inputDiv}>
                        <div className={styles.inputBg}>
                        <input className={styles.input5} type='text'/>

                        </div>
                    </div>
                </div>
                </div>
                <div className={styles.leftButton}>

                    <div className={styles.total}>
                        <div className={styles.totalName}>
                            Sub Total
                        </div>
                        <div className={styles.price}>
                            Rs 1000
                        </div>
                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalName}>
                           Discount Percent <div className={styles.percent}> 10%</div>
                        </div>
                        <div className={styles.price}>
                            Rs 1000
                        </div>
                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalName}>
                           Total <div className={styles.percent}> 10%</div>
                        </div>
                        <div className={styles.price}>
                            Rs 1000
                        </div>
                    </div>

                </div>
               </div>
              </div>
             {preview  ? <div className={styles.billImage}>
                {image.img ?
                       <div className={styles.image}  onClick={deleteImage}>
                           <img src={image.img} className={styles.img}/>
                           <div className={styles.overlay} onClick={deleteImage}>
                               <MdDelete color="tomato" size={50}/>
                               
                               </div>
                      </div>
                           :<div className={styles.image}>
                            <div className={styles.relative}>
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
                            <input type="file"  onChange={handleFile} className={styles.inputFile}  placeholder="Display"></input>    
                          
                           </div>
                        </div>}
                    </div>:null}
                </div>
            </div>
            <div className={styles.button}>
                              <div className={styles.cancel}>
                                  Cancel
                               </div>
                              <div className={styles.cancel}>
                                  Attach
                               </div>
                               <div className={styles.cancel} onClick={()=>props.menuHandler('View Menu')}>
                                  Print
                               </div>
                               <div className={styles.cancel} onClick={()=>props.menuHandler('View Menu')}>
                                 Make Recurring
                               </div>
                               <div className={styles.cancel} onClick={()=>setPreview(a=>!a)}>
                                  Preview
                               </div>
                               <div className={styles.drive}>
                                   Save 
                               </div>
                               <div className={styles.save}>
                                   Save and Send
                               </div>
                              
                         
            </div>
        </div>
    )
}
export default PurchaseInvoice
