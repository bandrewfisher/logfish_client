import React, { ReactNode } from 'react';
import cx from 'classnames';

export interface NavItemProps {
  children: ReactNode;
  end?: boolean;
}
const NavItem = ({ children, end }: NavItemProps) => {
  return (
    <div
      className={cx(
        'font-semibold text-gray-500 hover:text-blue-600 cursor-pointer',
        end ? '' : 'mr-3'
      )}
    >
      {children}
    </div>
  );
};

export default NavItem;
