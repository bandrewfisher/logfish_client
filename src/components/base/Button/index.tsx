import React, { ReactNode } from 'react';
import cx from 'classnames';

export type ButtonVariant = 'primary' | 'error';
export interface ButtonProps {
  children: ReactNode;
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  flat?: boolean;
  variant?: ButtonVariant;
}
const Button = ({
  children, handleClick, loading = false, disabled = false, className = '',
  flat = false, variant = 'primary',
}: ButtonProps) => {
  const color = variant === 'primary' ? 'blue' : 'red';
  // eslint-disable-next-line no-nested-ternary
  const bgColor = flat ? 'bg-white'
    : (disabled || loading ? 'cursor-not-allowed bg-gray-500 text-gray-700' : `bg-${color}-500`);
  const textColor = flat ? `text-${color}-500` : 'text-white';
  return (
    <button
      className={cx(`rounded-md p-3 ${bgColor} ${textColor} text-lg`, className)}
      type="button"
      disabled={disabled || loading}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
