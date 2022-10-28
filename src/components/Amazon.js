import bootstrap from 'bootstrap'
import React from 'react'
import list from '../Data'
import '../styles/Amazon.css'
import Cards from './Cards'
import Cart from './Cart'
import {Modal,Button} from 'react-bootstrap';
import AddNew from './AddNew'

const Amazon = ({handleClick},props) => {
  return (
   <section>
   
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>
          Add New Item
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <AddNew />

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>props.setShow(false)} variant="secondary">
            Close Button
        </Button>
    </Modal.Footer>
      </Modal>
      
    {
        list.map((item)=>(
            <Cards item={item} key={item.id} handleClick={handleClick}/>

          
        ))
       
    }
   </section>
 
  )
}

export default Amazon