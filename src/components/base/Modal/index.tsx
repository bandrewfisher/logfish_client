import React, { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  title: string;
  content: ReactNode;
  actions: ReactNode;
  handleClose: () => void;
}

const modalBackgroundStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};

const Modal = ({
  title, open, handleClose, content, actions,
}: ModalProps) => {
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
        {content}
        {actions}
      </div>
    </div>
  );
};

export default Modal;
