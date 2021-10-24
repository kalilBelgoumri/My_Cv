import { NavLink } from 'react-router-dom';
import React from 'react';


const  Navbar  = () => {
  return (
    <>
    <div>
      <nav>
        <ul className="flex justify-around color white">
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
}

export default Navbar;
