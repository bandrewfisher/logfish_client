import React from 'react';
import Modal from '../base/Modal';
import Button from '../base/Button';

export interface TurnOffPhoneModalProps {
  open: boolean;
  handleClose: () => void;
  handleTurnOffPhone: () => void;
}
const TurnOffPhoneModal = ({ open, handleClose, handleTurnOffPhone }: TurnOffPhoneModalProps) => (
  <Modal
    title="Turn off phone logging"
    handleClose={handleClose}
    open={open}
    content="Are you sure you want to disable mobile logging? You will have to verify your phone number again if you do."
    actions={(
      <div className="w-full flex justify-end mt-4">
        <Button className="mr-4" handleClick={handleClose} flat variant="error">Cancel</Button>
        <Button handleClick={() => {
          handleTurnOffPhone();
          handleClose();
        }}
        >
          Yes, turn off
        </Button>
      </div>
)}
  />
);

export default TurnOffPhoneModal;
