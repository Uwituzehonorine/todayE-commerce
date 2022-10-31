import React from 'react'
import '../styles/Navbar.css';
import { useState } from 'react';
import Model from '../components/Model';
import { Modal, Button } from 'react-bootstrap';

const Navbar = ({ size }, props, setShow) => {
  const handleShow = () => (setShow) => props.setShow(true);
  const handleClose = () => props.setShow(false);
  // const [modelState, setmodelState] = useState(false)
  // function openModel(){
  //   setmodelState(!modelState)
  // const handleShow = ()=>props.setShow(true);
  // const handleClose = ()=>props.setShow(false);
  const [item,setItem] = useState({price:"",name:""});

  const [items,setItems] = useState([
  {
      name: "ibiraha",
      price: "2000Rs"
    },
    {
      name: "ibiraha",
      price: "2000Rs"
    }

]);
const changeItem = (e)=>{

}

  return (

    <nav>

      <  div className='nav_box' >
        <span className='shop' onClick={() => setShow(true)}>Order your food in here for you</span>
        <div className='cart' onClick={() => setShow(false)}>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
        </div>


      </div>
      <div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col col-6'>
              <div className='mb-3'>
                <label for="exampleFormControlInput1" className='form-label'>Name</label>
                <input onChange={changeItem} name='name' type="Name" className='form-control' id='exampleFormControl' placeholder='name'></input>
              </div>
              <div className='mb-3'>
                <label for="exampleFormControlInput1" className='form-label' >price</label>
                <input onChange={changeItem} name='price' type="number" className='form-control' id='exampleFormControl' placeholder='price'/>
              </div>
              <div className='mb4'>
                <button className='btn btn-warning'>Add new list</button>
              </div>
              <ul className='list-group'>

                {
                  items.map(function (item) {
                    return (
                      <li className='list-group-item'>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                      </li>
                    )


                  })
                }


              </ul>
              <div>
                product tobe added {JSON.stringify(item)}
              </div>
            </div>
          </div>
        </div>


        {/* <Button className='btn-add' onClick={handleShow}>
          Add new on list</Button> */}



      </div>

    </nav>
  );
}


export default Navbar