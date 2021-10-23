import { Switch } from "@mui/material";
import { Route } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Switch>
              <Route exact to="/">
                Acceuil
              </Route>
            </Switch>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
