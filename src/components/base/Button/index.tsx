import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md p-3 bg-blue-500 text-white"
      type="button"
      onClick={e => handleClick && handleClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
