import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const ConfirmModal = (props) => {
  const {
    buttonLabel,
    className,
    id
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete Purchase</ModalHeader>
        <ModalBody>
        Are you sure you want to delete this Purchase?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deletePurchase(id)}>Yes</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

