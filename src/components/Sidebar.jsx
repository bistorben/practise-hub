import { useState, useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

import "./Sidebar.css";
import Navigation from "./Navigation.jsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // useEffect cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav ref={sidebarRef} className={`Sidebar ${isOpen ? "open" : "closed"}`}>
        <button onClick={toggleSidebar}>
          <GoArrowRight className={`arrow-right ${isOpen ? "rotated" : ""}`} />
        </button>
        <Navigation />
      </nav>
    </>
  );
};

export default Sidebar;
