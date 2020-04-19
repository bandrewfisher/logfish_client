import React from 'react';

import Modal from '../base/Modal';
import Button from '../base/Button';

export interface SuccessModalProps {
  open: boolean;
  handleClose: () => void;
}
const SuccessModal = ({ open, handleClose }: SuccessModalProps) => (
  <Modal
    title="Success!"
    content="Your phone number has been verified. You will now recieve logs as text messages."
    handleClose={handleClose}
    actions={<Button handleClick={handleClose}>Close</Button>}
    open={open}
  />
);

export default SuccessModal;
