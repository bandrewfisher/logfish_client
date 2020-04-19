import React, { useState, useEffect } from 'react';
import Button from '../Button';
import socket from '../../../socket';

export interface ModalProps {
  open: boolean;
  title: string;
  handleClose: () => void;
}

const modalBackgroundStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};

const Modal = ({ title, open, handleClose }: ModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const verifyPhoneNumber = () => {
    socket.emit('ADD-PHONE', phoneNumber);
  };

  useEffect(() => {
    socket.on('ADD-PHONE-ERROR', (message: string) => {
      console.log(message);
    });
  }, []);

  if (!open) return null;
  return (
    <div
      className="fixed z-10 inset-0 flex justify-center items-center"
      style={modalBackgroundStyle}
    >
      <div className="fixed z-20 pt-0 p-6 w-1/3 bg-white rounded-md flex flex-col">
        <button type="button" className="self-end" onClick={handleClose}>
          close
        </button>
        <h2 className="mb-4">{title}</h2>
        <p className="mb-4">
          Input your phone number below to set up mobile logging.
        </p>
        <input
          className="mb-4 px-3 h-10 rounded-md border border-solid border-blue-500"
          value={phoneNumber}
          onChange={({ target: { value } }) => setPhoneNumber(value)}
        />
        <Button handleClick={verifyPhoneNumber}>Verify</Button>
      </div>
    </div>
  );
};

export default Modal;
