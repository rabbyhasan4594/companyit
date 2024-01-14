import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 lg:ps-24 lg:pe-32">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink to={"/"} className=""> <img className='' src="https://www.creativeitinstitute.com/logo.png" alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex gap-10  font-semibold text-lg">
  <NavLink to={"/"} className="">Home</NavLink>
    <NavLink to={"/home"} className="">About us</NavLink>
   <NavLink to={"/home"}  className="">
      Success story</NavLink>
      <NavLink to={"/home"} className="">Freelancing</NavLink>
      <NavLink to={"/home"} className="">Contact</NavLink>
  </div>
  <div className="navbar-end gap-10 hidden lg:flex font-semibold text-lg ">
  
    <NavLink to={"/home"} className="bg-red-500 btn  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-lg"> Browse Course </NavLink>
  </div>
</div>
    </div>
  );
};

export default NavigationBar;