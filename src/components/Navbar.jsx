import { Link } from "@mui/material";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="">
          <li>
            <Link exact to="/">
              Acceuil
            </Link>
          </li>
          <li>
            <Link exact to="/experiences">
              Experiences
            </Link>
          </li>
          <li>
            <Link exact to="/competencs">
              Competences
            </Link>
          </li>
          <li>
            <Link exact to="/portofolio">
              Portofolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
