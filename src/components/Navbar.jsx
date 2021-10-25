import { NavLink } from 'react-router-dom';
import React from 'react';
import img from  '../assets/Hamburger.png'

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
        <div className="md:hidden hamburger__menu cursor-pointer flex">
          <div className="hamburger__fl flex absolute justify-center items-center">
            <img src={img} alt="Hamburger" />
            </div>
          </div>
          <ul className=" text-white md:block flex hidden">
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
