import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet />
    </>
  );
}

export default App;
