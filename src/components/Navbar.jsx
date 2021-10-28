import { NavLink } from 'react-router-dom';
import React from 'react';
import img from '../assets/Logo.png';

const Navbar = () => {
  return (
    <>
      <div>
        <div className="invisible md:visible logo__Nav absolute left-0 -mt-3 mx-6">
          <img className="h-1/2" src={img} alt="Logo" />
        </div>
        <nav>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
