import "./HeroBoschCom.css";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import heroImage from "../assets/HeroBoschCom/bosch_hero_big.webp";
import heroLinkImage from "../assets/HeroBoschCom/bosch_hero_small.webp";

const HeroBoschCom = () => {
  return (
    <section className="HeroBoschCom">
      <a
        href="https://www.likeabosch.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          <span>THE MORE YOU BOSCH, THE MORE YOU FEEL LIKE A </span>
          <span className="bosch-link">
            BOSCH <RxExternalLink className="external-icon" />
          </span>
        </h1>
      </a>
      <div className="hero-img-wrapper">
        <div className="hero-img-big">
          <img src={heroImage} alt="hero image" />
        </div>

        <div className="hero-link-list">
          <img src={heroLinkImage} alt="link image" />
          <ul>
            <li>
              <a href="">test123</a>
            </li>
            <li>
              <a href="">test123</a>
            </li>
            <li>
              <a href="">test123</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroBoschCom;
