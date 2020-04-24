import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

export interface NavItemProps {
  children: ReactNode;
  end?: boolean;
  to: string;
}
const NavItem = ({ children, end = false, to }: NavItemProps) => {
  const location = useLocation();
  return (
    <div
      className={cx(
        'font-semibold',
        location.pathname === to ? 'text-blue-600' : 'text-gray-600',
        end ? '' : 'mr-3',
      )}
    >
      <Link className="hover:text-blue-600" to={to}>
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
