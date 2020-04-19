import React, { useState, useEffect } from 'react';
import Modal from '../base/Modal';
import Button from '../base/Button';
import socket from '../../socket';

export interface PhoneModalProps {
  open: boolean;
  handleClose: () => void;
  handleVerificationSent: (phone: string) => void;
}
const SendCodeModal = ({ open, handleClose, handleVerificationSent }: PhoneModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);

  const reset = () => {
    setPhoneNumber('');
    setVerifyLoading(false);
    handleClose();
  };

  const verifyPhoneNumber = () => {
    socket.emit('ADD-PHONE', phoneNumber);
    setVerifyLoading(true);
  };

  useEffect(() => {
    socket.on('ADD-PHONE-SUCCESS', () => {
      setVerifyLoading(false);
      handleVerificationSent(phoneNumber);
    });
    socket.on('ADD-PHONE-ERROR', (message: string) => {
      setVerifyLoading(false);
    });
  }, [phoneNumber, handleVerificationSent]);

  return (
    <Modal
      title="Set up mobile logging"
      handleClose={reset}
      open={open}
      content={(
        <>
          <p className="mb-4">
              Input your phone number below to set up mobile logging.
          </p>
          <input
            className="mb-4 px-3 h-10 rounded-md border border-solid border-blue-500"
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
          />
        </>
        )}
      actions={(
        <Button handleClick={verifyPhoneNumber} loading={verifyLoading}>
            Verify
        </Button>
        )}
    />
  );
};

export default SendCodeModal;
