import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Addnew = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder='storename'/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder='productname'/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder='price'/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder='modal'/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder='img'/>
      </Form.Group>
      <Button variant='success'type='submit' block>Done product</Button>
    </Form>
  );
}

export default Addnew;