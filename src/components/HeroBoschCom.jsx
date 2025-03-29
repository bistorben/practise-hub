import "./HeroBoschCom.css";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
        <a
          className="hero-img-big"
          href="https://www.likeabosch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={heroImage} alt="hero image" />
        </a>

        <div className="hero-link-list">
          <a className="link-img-wrapper">
            <img src={heroLinkImage} id="hero-link-img" alt="link image" />
            <h2>
              <span>Bosch Tech Compass </span>
              <span className="h2-link">
                2025 <MdOutlineKeyboardArrowRight />
              </span>
            </h2>
          </a>

          <ul>
            <li>
              <a href="">
                About us
                <MdOutlineKeyboardArrowRight />
              </a>
            </li>
            <li>
              <a href="">
                Our open positions <RxExternalLink />
              </a>
            </li>
            <li>
              <a href="">
                Get in touch <MdOutlineKeyboardArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroBoschCom;
