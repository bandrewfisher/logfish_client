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
      <div className="fixed z-20 pt-0 p-6 w-1/3 bg-white rounded-md flex flex-col text-gray-700 text-lg">
        <div className="flex justify-between align-middle">
          <h2 className="font-semibold mt-6 mb-3">{title}</h2>
          <button type="button" className="-mr-3 -mt-3 text-2xl font-bold" onClick={handleClose}>
            ×
          </button>
        </div>
        {content}
        {actions}
      </div>
    </div>
  );
};

export default Modal;
