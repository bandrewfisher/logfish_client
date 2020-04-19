import React, { useState } from 'react';
import SendCodeModal from './SendCodeModal';
import ConfirmCodeModal from './ConfirmCodeModal';
import SuccessModal from './SuccessModal';

export interface PhoneModalProps {
  open: boolean;
  handleClose: () => void;
}

export type PhoneState = 'enterPhone' | 'verificationSent' | 'codeConfirmed';
const PhoneModal = ({ open, handleClose }: PhoneModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [state, setState] = useState<PhoneState>('enterPhone');

  const reset = () => {
    setState('enterPhone');
    setPhoneNumber('');
    handleClose();
  };

  if (state === 'enterPhone') {
    return (
      <SendCodeModal
        open={open}
        handleClose={reset}
        handleVerificationSent={(phone: string) => {
          setPhoneNumber(phone);
          setState('verificationSent');
        }}
      />
    );
  } if (state === 'verificationSent') {
    return (
      <ConfirmCodeModal
        open={open}
        handleClose={reset}
        phoneNumber={phoneNumber}
        handleConfirm={() => setState('codeConfirmed')}
      />
    );
  }
  return <SuccessModal open={open} handleClose={reset} />;
};

export default PhoneModal;
