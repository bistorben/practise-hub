import "./HeroBoschCom.css";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";

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
    </section>
  );
};

export default HeroBoschCom;
