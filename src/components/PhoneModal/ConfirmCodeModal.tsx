import React, { useState, useEffect } from 'react';
import socket from '../../socket';

import Modal from '../base/Modal';
import Button from '../base/Button';

export interface ConfirmCodeModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  phoneNumber: string;
}
const ConfirmCodeModal = ({
  open, handleClose, phoneNumber, handleConfirm,
}: ConfirmCodeModalProps) => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const reset = () => {
    setVerificationCode('');
    setConfirmLoading(false);
    handleClose();
  };

  const confirmCode = () => {
    setConfirmLoading(true);
    socket.emit('CONFIRM-PHONE', phoneNumber, verificationCode);
  };

  useEffect(() => {
    socket.on('CONFIRM-PHONE-SUCCESS', () => {
      setConfirmLoading(false);
      handleConfirm();
    });

    socket.on('CONFIRM-PHONE-ERROR', () => {
      setConfirmLoading(false);
    });
  }, [handleConfirm]);

  return (
    <Modal
      title="Confirm your phone number"
      open={open}
      handleClose={reset}
      content={(
        <>
          <p className="mb-4">
            We have texted a code to your phone. Enter the code
             you received below:
          </p>
          <input
            className="mb-4 px-3 h-10 rounded-md border border-solid border-blue-500"
            value={verificationCode}
            onChange={({ target: { value } }) => setVerificationCode(value)}
          />
        </>
      )}
      actions={
        <Button loading={confirmLoading} handleClick={confirmCode}>Confirm</Button>
      }
    />
  );
};

export default ConfirmCodeModal;
