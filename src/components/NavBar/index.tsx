import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const NavBar = () => (
  <div className="fixed top-0 inset-x-0 bg-white h-24 flex justify-between p-6 text-xl">
    <div className="font-bold">
      <Link to="/">
        logfish
      </Link>
    </div>
    <div className="flex">
      <NavItem to="/about">about</NavItem>
      {/* <NavItem end>support</NavItem> */}
    </div>
  </div>
);

export default NavBar;
