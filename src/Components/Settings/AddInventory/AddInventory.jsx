import React ,{useState} from 'react'
import styles from './AddInventory.module.css'

import Dropdown from '../../react-dropdown'
import {IoIosAdd} from 'react-icons/io'
import '../../react-dropdown/style.css';
import {MdDelete} from 'react-icons/md'
const AddInventory=()=>{
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
                Add Inventory
            </div>
            <div className={styles.hr}/>
              
               
               
                
                <div className={styles.title2}>
                    Product Name
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                <div className={styles.title2}>
                   Category
                </div>
                 <div className={styles.inputDiv}>
                 <div className={styles.inputBg}>
                 <input className={styles.input3} type="text" list="data" onChange={()=>_onChange} />

                    </div>
                
                 <datalist id="data" className={styles.datalist}>
                        {options.map((item, key) =>
                        <option key={key} value={item.value} className={styles.options}/>
                        )}
                    </datalist>
                </div>
               
                <div className={styles.hr2}/>
  
                    <div className={styles.main}>
                        <div className={styles.leftFull}>
                        <div className={styles.title2}>
                   Purchase Details
                </div>
                <div className={styles.inputDiv5}>
                    <div className={styles.inputBg5}>
                           {/* <div className={styles.ingredients}>
                               List Your Ingredients
                           </div> */}
                         
                    <div className={styles.main}>
                        <div className={styles.left}>
                            <div className={styles.name}>
                               Price Per Items
                            </div>
                            
                        </div>

                        <div className={styles.right}>
                            <div className={styles.name}>
                                Product Quantity
                            </div>
                        </div>
                    </div>
                    <div className={styles.ingredientsDiv}>
                    {ingredients.map((data)=>
                             <div className={styles.main}>
                             <div className={styles.left}>
                                 <div className={styles.name2}>
                                     {data.items}
                                 </div>
                                 
                             </div>
     
                             <div className={styles.right}>
                                 <div className={styles.name2}>
                                     {data.qty}
                                 </div>
                             </div>
                             </div>
                        
                   )
                   }
                    </div>
                   
                    <div className={styles.main}>
                        <div className={styles.left}>
                                <div className={styles.inputDiv}>
                            <div className={styles.inputBg4}>
                            <input className={styles.input4} type='text' onChange={inputHandler('items')}/>

                                </div>
                            </div>
                            
                        </div>

                        <div className={styles.right}>
                        <div className={styles.inputDiv}>
                            <div className={styles.inputBg4}>
                            <input className={styles.input4} type='text' onChange={inputHandler('value')}/>

                                </div>
                            </div>
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

                        
                    </div>
                   
{/*  */}
            </div>
            <div className={styles.button}>
                               <div className={styles.save}>
                                   Save Items
                               </div>
                               <div className={styles.drive}>
                                   Save to Drive
                               </div>
                               <div className={styles.cancel}>
                                   Cancel
                               </div>
            </div>
        </div>
    )
}
export default AddInventory