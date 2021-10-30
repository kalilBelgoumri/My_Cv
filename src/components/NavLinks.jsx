import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <ul className=" text-white flex mr-5">
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
  );
}

export default NavLinks;
