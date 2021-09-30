import React, { useState ,useRef,useEffect} from 'react'
import styles from './AddItem.module.css'
import {IoIosAdd} from 'react-icons/io'
import Dropdown from 'react-dropdown'
import {MdDelete} from 'react-icons/md'
import './Custom.css'
import cx from 'classnames'
const PurchaseRequest=(props)=>{
    const [imageFile,setFile]=useState([])
    const [image,setImage]=useState([])
    const [imageFile2,setFile2]=useState([])
    const [image2,setImage2]=useState([])
    const [imageFile3,setFile3]=useState([])
    const [image3,setImage3]=useState([])
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
        const [ingredients,setIngredients]=useState([])

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
    const handleFile=e=>{
        e.preventDefault();
  
              let reader = new FileReader();
           
           
              let file = e.target.files;
              let tempFile=[...imageFile].concat(file[0])
              setFile(tempFile)
           reader.onloadend = () => {
              let tempImg=[...image].concat({'img':reader.result});
              setImage(tempImg);
            }
     if(file[0]){
           reader.readAsDataURL(file[0]);
   } }
   const handleFile2=e=>{
    e.preventDefault();

          let reader = new FileReader();
       
       
          let file = e.target.files;
          let tempFile=[...imageFile2].concat(file[0])
          setFile2(tempFile)
       reader.onloadend = () => {
          let tempImg=[...image2].concat({'img':reader.result});
          setImage2(tempImg);
        }
 if(file[0]){
       reader.readAsDataURL(file[0]);
} }
const handleFile3=e=>{
    e.preventDefault();

          let reader = new FileReader();
       
       
          let file = e.target.files;
          let tempFile=[...imageFile3].concat(file[0])
          setFile3(tempFile)
       reader.onloadend = () => {
          let tempImg=[...image3].concat({'img':reader.result});
          setImage3(tempImg);
        }
 if(file[0]){
       reader.readAsDataURL(file[0]);
} }
   const deleteImage=index=>e=>{
    let newArray=[...image]
    let newFile=[...imageFile]
    
    newArray.splice(index,1)
    newFile.splice(index,1)
     setImage(newArray)
    setFile(newFile)

    
 }
 const deleteImage2=index=>e=>{
    let newArray=[...image2]
    let newFile=[...imageFile2]
    
    newArray.splice(index,1)
    newFile.splice(index,1)
     setImage2(newArray)
    setFile2(newFile)

    
 }
 const deleteImage3=index=>e=>{
    let newArray=[...image3]
    let newFile=[...imageFile3]
    
    newArray.splice(index,1)
    newFile.splice(index,1)
     setImage3(newArray)
    setFile3(newFile)

    
 }
       const _onChange=()=>{

        }
        const inputHandler=text=>e=>{
                setData({...data,[text]:e.target.value})
        }
        const handleAdd=()=>{
            
           setIngredients(ingredients.concat({'items':data.items,'qty':data.value})) 
        }
    return(
        <div className={styles.container}>
             <div className={styles.table}>
             <div className={styles.title}>
                Purchase Request
            </div>
            <div className={styles.subtitle}>
                This purchase report will be acted upon approval
            </div>
                <div className={styles.scrollbar}>

                {/* <div className={styles.row}>
               <div className={styles.categoryImage}>
             {image.length<1?  <div className={styles.relative}><img  src='/images/burger.png' className={styles.imagePic}></img></div>
:null}     
                   {image.map((img,index)=><div className={styles.relative}><img  src={img.img} className={styles.imagePic}></img><div className={styles.overlay} onClick={deleteImage(index)}><MdDelete color="tomato" size={30}/></div></div>)}</div>
                    <input type="file"  onChange={handleFile} className={styles.inputFile}  placeholder="Display"></input>    
               </div> */}
                <div className={styles.rowInput}>
                    <div className={styles.topbar}>

                <div className={styles.title2}>
                    Purchase Requested by
                </div>
                <div className={styles.inputDiv}>
                       <Dropdown options={options}/>
                </div>
                </div>
           
                </div>
                <div className={styles.rowInput}>
                    <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Purchase Date
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>
                </div>
                </div>
                </div>
                <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Requested Date
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                </div>
                <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Purchase Request Number
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

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

                    <div className={styles.sn}>
                        Qty
                    </div>
                    <div className={styles.product} >
                        Category
                    </div>
                    <div className={styles.product}>
                        Description
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

                    <div className={styles.sn}>
                        {parseInt(index *Math.random()*22)}
                    </div>
                    <div className={styles.product} >
                        <Dropdown options={options} className={styles.root} controlClassName={styles.control}/>
                    </div>
                    <div className={styles.product}>
                        Description
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
                <div className={styles.rowInput}>

              
                <div className={cx(styles.title5,styles.active2)}>
                   Add Lines
                </div>
                <div className={cx(styles.title5,styles.active2)}>
                    Clear All Lines
                </div>
               
{/*  */}         </div>
              </div>
            </div>
 
            <div className={styles.button}>
                              <div className={styles.cancel}>
                                  Make Purchase Order
                               </div>
                               <div className={styles.cancel} onClick={()=>props.menuHandler('View Menu')}>
                                  Print
                               </div>

                               <div className={styles.cancel} onClick={()=>props.menuHandler('View Menu')}>
                                  Preview
                               </div>
                               <div className={styles.drive}>
                                   Cancel
                               </div>
                               <div className={styles.save}>
                                   Save Items
                               </div>
                              
                         
            </div>
        </div>
    )
}
export default PurchaseRequest
