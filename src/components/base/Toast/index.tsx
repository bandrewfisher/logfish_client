import React, { useRef } from 'react';
import cx from 'classnames';
import './toast.css';

export interface ToastProps {
  open: boolean;
  text: string;
}
const Toast = ({ open, text }: ToastProps) => {
  const toast = useRef<HTMLDivElement>(null);
  return (
    <div ref={toast} className="toast-container fixed flex justify-center bottom-0">
      <div className={cx('toast p-2 rounded-lg bg-gray-800 text-white', `toast-${open ? 'show' : 'hide'}`)}>{text}</div>
    </div>
  );
};

export default Toast;
