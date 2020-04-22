import React from 'react';
import cx from 'classnames';

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => unknown;
  className?: string;
  placeholder?: string;
  rules?: ((value: string) => string | null)[];
}
export interface InputValidator {
  isInputValid: () => boolean;
}
const Input = ({
  value, onChange, className = '', placeholder = '', rules = [],
}: InputProps) => (
  <div>
    <input
      className={cx('w-full block px-3 h-10 rounded-md border border-solid border-blue-500', className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);
export default Input;
