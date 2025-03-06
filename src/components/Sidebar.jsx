import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <nav className={`Sidebar ${isOpen ? "open" : "closed"}`}>
        <button onClick={toggleSidebar}>on/off</button>
      </nav>
    </>
  );
};

export default Sidebar;
