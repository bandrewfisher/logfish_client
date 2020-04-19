import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  loading?: boolean;
}
const Button = ({ children, handleClick, loading = false }: ButtonProps) => {
  return (
    <button
      className="rounded-md p-3 bg-blue-500 text-white"
      type="button"
      disabled={loading}
      onClick={e => handleClick && handleClick(e)}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
