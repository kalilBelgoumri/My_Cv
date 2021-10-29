import { NavLink } from 'react-router-dom';
import React from 'react';
import img from '../assets/Logo.png';
import { useState, useEffect } from 'react';
import imgHamburger from '../assets/hamburger.png'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div>
      <div className="md:hidden hamburger__menu flex justify-end items-center">
              <img
                className="cursor-pointer"
                onClick={toggleSmallScreen}
                src={imgHamburger}
                alt="Hamburger"
              />
            </div>
        <div className="invisible md:visible logo__Nav absolute left-0 -mt-3 mx-6">
          <img className="h-1/2" src={img} alt="Logo" />
        </div>
        <nav>
          {toggleMenu && ( 
            <ul className=" text-white flex justify-evenly items-center hidden md:flex">
            <li>
              <NavLink exact to="/">
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/experiences">
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/competencs">
                Competences
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portofolio">
                Portofolio
              </NavLink>
            </li>
          </ul>
        )}
        </nav>
         
      </div>
    </>
  );
};

export default Navbar;
