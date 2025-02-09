import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">kavitaChauthani</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Detail</NavLink>
              </li>
              <li>
                <NavLink to="/report">Report</NavLink>
              </li>
              <li>
                <NavLink to="/CreditAccount">CreditReport</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
