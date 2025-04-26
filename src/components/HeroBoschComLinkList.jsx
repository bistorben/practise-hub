import "./HeroBoschComLinkList.css";
import { RxExternalLink } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroBoschComLinkList = () => {
  // wird später dynamisch
  const links = [
    { label: "About us", href: "", external: false },
    { label: "Our open positions", href: "", external: true },
    { label: "Get in touch", href: "", external: false },
  ];

  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.href} className="link-from-list">
            {link.label}
            {link.external ? (
              <RxExternalLink />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeroBoschComLinkList;
