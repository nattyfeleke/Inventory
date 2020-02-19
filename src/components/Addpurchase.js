import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button outline color="secondary"onClick={toggle}>Add a new Purchase</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Add a new Purchase</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="sno">S/No</Label>
        <Input type="text" name="sno" id="sno" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="tag">Tag No</Label>
        <Input type="text" name="tag" id="tag" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="serial">Serial No</Label>
        <Input type="text" name="serial" id="serial" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="pno">PO No</Label>
        <Input type="text" name="pno" id="pno" placeholder="with a placeholder" />
      </FormGroup>   
      <FormGroup>
        <Label for="grn">GRN No</Label>
        <Input type="text" name="grn" id="grn" placeholder="with a placeholder" />
      </FormGroup> 
      <FormGroup>
        <Label for="date">Date</Label>
        <DatePicker
        />
      </FormGroup>
    </Form>
         </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;

