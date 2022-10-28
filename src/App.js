import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';
import Amazon from './components/Amazon';
import Cart from './components/Cart.js';
import './styles/Amazon.css';




const App = () => {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item)=>{
    // console.log(item);
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;

  })
  if(isPresent){
    setWarning(true);
    setTimeout(()=>{
    setWarning(false);

},3000);
return;
  }
    setCart([...cart, item]);
  
  }
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow}/>
      {/* <Amazon setShow={setShow} show={show}/> */}
      {
      warning &&  <div className='warning'>Item is already added to your cart</div>
     }
      {
        show ? <Amazon handleClick={handleClick}/>: <Cart cart={cart} setCart={setCart}/>
      }
      
       
     
    </React.Fragment>
  )
}

export default App