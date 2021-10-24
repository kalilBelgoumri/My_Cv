import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex flex-1">
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
  );
}

export default Navbar;
