import React, { useState ,useRef,useEffect} from 'react'
import styles from './AddItem.module.css'
import Dropdown from '../../react-dropdown'
import {IoIosAdd} from 'react-icons/io'
import '../../react-dropdown/style.css';
import {MdDelete} from 'react-icons/md'
const AddItem=(props)=>{
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
                Add New Food
            </div>
                <div className={styles.scrollbar}>

                <div className={styles.row}>
               <div className={styles.categoryImage}>
             {image.length<1?  <div className={styles.relative}><img  src='/images/burger.png' className={styles.imagePic}></img></div>
:null}     
                   {image.map((img,index)=><div className={styles.relative}><img  src={img.img} className={styles.imagePic}></img><div className={styles.overlay} onClick={deleteImage(index)}><MdDelete color="tomato" size={30}/></div></div>)}</div>
                    <input type="file"  onChange={handleFile} className={styles.inputFile}  placeholder="Display"></input>    
               </div>
                <div className={styles.rowInput}>
                    <div className={styles.topbar}>

                <div className={styles.title2}>
                    Product Name
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>
                </div>
                </div>
                </div>
                <div className={styles.topbar2}>

                <div className={styles.title2}>
                    Price
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                </div>
                <div className={styles.topbar3}>

                <div className={styles.title2}>
                    Code
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.inputBg}>
                    <input className={styles.input} type='text'/>

                    </div>
                </div>
                </div>
                </div>
                <div className={styles.title5}>
                    Description
                </div>
                <div className={styles.inputDiv2}>
                    <div className={styles.inputBg2}>
                    <textarea className={styles.input2} type='text'/>

                    </div>
                </div>
                <div className={styles.hr2}/>
                 
                    <div className={styles.main}>
                        <div className={styles.left}>
                            <div className={styles.recommend}>
                                <div className={styles.subTitle}>
                                    Category
                                </div>
                                <div className={styles.subTitle2}>
                                Select category that this item belongs
                                </div>
                                <div className={styles.row2}>
                                <div className={styles.boxType}>
                                {[0, 1, 2, 3, 5].map((dat) => 
                                
                                <div className={styles.typesBox}>
                                    <div>
                                        <img src="/images/user.jpeg" className={styles.typesImage} />
                                    </div>
                                    <div className={styles.typesRight}>
                                        <div>
                                            Subin Bhandari
                                        </div>
                                        <div className={styles.items}>
                                            211 Items
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                                <div className={styles.add}>
                                    Add
                                </div>
                </div>
                            </div>
                            <div className={styles.recommend}>
                                <div className={styles.subTitle}>
                                    Menu
                                </div>
                                <div className={styles.subTitle2}>
                                Select category that this item belongs
                                </div>
                                <div className={styles.row2}>
                                <div className={styles.boxType}>
                                {[0, 1, 2, 3, 5].map((dat) => <div className={styles.typesBox}>
                                    <div>    
                                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                                    </div>
                                    <div className={styles.typesRight}>
                                        <div>
                                            Dine in
                                        </div>
                                        <div className={styles.items}>
                                            211 Items
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                                <div className={styles.add} onClick={(e)=>handleOption(e)}>
                                    Add
                                </div>
                </div>
                            </div>
                            
                        </div>

               
                    </div>
                  <div className={styles.question}>
                    Does this dish make changes in inventory?
                  </div>
                    <div className={styles.qtnBtn}>
                                <div className={styles.add}>
                                    Add
                                </div>
                    </div>
                    <div className={styles.questionName}>
                    Does this category have sub-category, items , if yes
                  </div>
                  <div className={styles.qtnBtn}>
                              {['Add Recommendation','Add Related Product','Add Ingredients',3,4].map((dat)=>  <div className={styles.add}>
                                    {dat}
                                </div>)}
                    </div>
{/*  */}         </div>
              
            </div>
  {   view?       <div id='Option' ref={wrapperRef} className={styles.option} style={{bottom:coordinates.y,left:coordinates.x}}>
                                <div className={styles.subTitle}>
                                    Menu
                                </div>
                                <div className={styles.subTitle2}>
                                Select category that this item belongs
                                </div>
                                <div className={styles.row2}>
                                <div className={styles.boxOp}>
                                {[0, 1, 2, 3, 5].map((dat) => <div className={styles.typesBox}>
                                    <div>
                                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                                    </div>
                                    <div className={styles.typesRight}>
                                        <div>
                                            Dine in
                                        </div>
                                        <div className={styles.items}>
                                            211 Items
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                              
                            </div>
            </div>:null}
            <div className={styles.button}>
                              <div className={styles.cancel}>
                                   Save as draft
                               </div>
                               <div className={styles.view} onClick={()=>props.menuHandler('View Menu')}>
                                   View
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
export default AddItem
