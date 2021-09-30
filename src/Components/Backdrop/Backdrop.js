import React from 'react';
import  './Backdrop.css'

const Backdrop =(props)=>
<div className="BackDrop" id="back" onClick={props.clicked}></div>

export default Backdrop;