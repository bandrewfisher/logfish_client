import React from 'react';
import NavItem from './NavItem';

const NavBar = () => (
  <div className="fixed top-0 inset-x-0 bg-transparent h-24 flex justify-between p-6 text-xl">
    <div className="font-bold">logfish</div>
    <div className="flex">
      <NavItem>about</NavItem>
      <NavItem end>support</NavItem>
    </div>
  </div>
);

export default NavBar;
