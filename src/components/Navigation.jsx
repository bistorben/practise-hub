import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <h2>Components</h2>
        <ul>
          <NavLink to="heroboschcom">HeroBoschCom</NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
