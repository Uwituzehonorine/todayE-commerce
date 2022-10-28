import React from 'react'
import '../styles/Navbar.css';
import { useState } from 'react';
import Model from '../components/Model';
import {Modal,Button} from 'react-bootstrap';

const Navbar = ({size},props,setShow) => {
  const handleShow = ()=>(setShow)=>props.setShow(true);
  const handleClose = ()=>props.setShow(false);
  // const [modelState, setmodelState] = useState(false)
  // function openModel(){
  //   setmodelState(!modelState)
  // const handleShow = ()=>props.setShow(true);
  // const handleClose = ()=>props.setShow(false);
  return (
    
    <nav>
      
     <  div className='nav_box' >
        <span className='shop' onClick={()=>setShow(true)}>Order your food in here for you</span>
        <div className='cart' onClick={()=>setShow(false)}>
            <span>
                <i className='fas fa-cart-plus'></i>
            </span>
            <span>{size}</span>
        </div>
       

     </div>
     <div>
     
      
      <Button className='btn-add' onClick={handleShow }>
        Add new on list</Button>
      
       
      
     </div>

    </nav>
  );
  }


export default Navbar