import React, { useState, useEffect } from 'react';
import socket from '../../socket';

import Modal from '../base/Modal';
import Button from '../base/Button';
import Input from '../base/Input';

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
  const [confirmError, setConfirmError] = useState<string>('');

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

    socket.on('CONFIRM-PHONE-ERROR', (message: string) => {
      setConfirmLoading(false);
      setConfirmError(message);
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
          <Input
            className="mb-4"
            value={verificationCode}
            onChange={({ target: { value } }) => setVerificationCode(value)}
            placeholder="123456"
          />
          {confirmError && <div className="text-red-400 mb-4">{confirmError}</div>}
        </>
      )}
      actions={(
        <Button
          disabled={verificationCode.trim() === ''}
          loading={confirmLoading}
          handleClick={confirmCode}
        >
          Confirm
        </Button>
      )}
    />
  );
};

export default ConfirmCodeModal;
