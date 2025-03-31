import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";

const Navigation = () => {
  return (
    <section className="Navigation">
      <div className="nav-main">
        <h2>Components</h2>
        <ul>
          <li>
            <NavLink className="nav-link" to="heroboschcom">
              HeroBoschCom
            </NavLink>
          </li>
        </ul>
      </div>

      <footer className="nav-footer">
        <NavLink className="backend-link" to="edit">
          <span>edit</span>
          <MdOutlineModeEdit />
        </NavLink>
      </footer>
    </section>
  );
};

export default Navigation;
