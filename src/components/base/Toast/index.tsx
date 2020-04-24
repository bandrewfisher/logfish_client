import React, { useEffect } from 'react';
import cx from 'classnames';
import './toast.css';

export interface ToastProps {
  open: boolean;
  text: string;
  timeout?: number;
  onClose: () => void;
}
const Toast = ({
  open, text, timeout = 1500, onClose,
}: ToastProps) => {
  useEffect(() => {
    setTimeout(onClose, timeout);
  }, [onClose, timeout]);
  return (
    <div className="toast-container fixed flex justify-center bottom-0">
      <div className={cx('toast p-2 rounded-lg bg-gray-800 text-white', `toast-${open ? 'show' : 'hide'}`)}>{text}</div>
    </div>
  );
};

export default Toast;
