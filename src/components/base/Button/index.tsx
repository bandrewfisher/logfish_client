import React, { ReactNode } from 'react';
import cx from 'classnames';

export interface ButtonProps {
  children: ReactNode;
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
const Button = ({
  children, handleClick, loading = false, disabled = false, className = '',
}: ButtonProps) => (
  <button
    className={cx('rounded-md p-3', loading
        || disabled ? 'cursor-not-allowed bg-gray-500 text-gray-700'
      : 'text-white bg-blue-500', className)}
    type="button"
    disabled={disabled || loading}
    onClick={(e) => handleClick && handleClick(e)}
  >
    {loading ? 'Loading...' : children}
  </button>
);

export default Button;
