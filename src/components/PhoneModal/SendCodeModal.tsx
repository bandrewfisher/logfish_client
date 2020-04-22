import React, { useState, useEffect } from 'react';
import Modal from '../base/Modal';
import Button from '../base/Button';
import Input from '../base/Input';
import socket from '../../socket';

export interface PhoneModalProps {
  open: boolean;
  handleClose: () => void;
  handleVerificationSent: (phone: string) => void;
}
const SendCodeModal = ({ open, handleClose, handleVerificationSent }: PhoneModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>('');

  const reset = () => {
    setPhoneNumber('');
    setVerifyLoading(false);
    handleClose();
  };

  const verifyPhoneNumber = () => {
    if (!phoneNumber.match(/^\+\d{11}$/)) {
      setPhoneError('Phone number does not match correct format');
      return;
    }
    socket.emit('ADD-PHONE', phoneNumber);
    setVerifyLoading(true);
  };

  const updatePhoneNumber = (number: string) => {
    setPhoneError('');
    setPhoneNumber(number);
  };

  useEffect(() => {
    socket.on('ADD-PHONE-SUCCESS', () => {
      setVerifyLoading(false);
      handleVerificationSent(phoneNumber);
    });
    socket.on('ADD-PHONE-ERROR', (message: string) => {
      setVerifyLoading(false);
      setPhoneError(message);
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
              Include your country code.
          </p>
          <Input
            className="mb-4"
            value={phoneNumber}
            onChange={({ target: { value } }) => updatePhoneNumber(value)}
            placeholder="+18015551234"
          />
          {phoneError && (<div className="mb-4 text-red-400">{phoneError}</div>)}
        </>
        )}
      actions={(
        <Button
          disabled={phoneNumber.trim() === ''}
          handleClick={verifyPhoneNumber}
          loading={verifyLoading}
        >
            Verify
        </Button>
        )}
    />
  );
};

export default SendCodeModal;
