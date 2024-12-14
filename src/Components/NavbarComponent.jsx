import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import './NavbarComponent.css';

function NavbarComponent() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="nav-bar">
      <div className="left-sec"><h1 className="my-name">Aditya Raj</h1></div>
      <div className="right-sec" ref={navRef}>
        <div><a href="#">About</a></div>
        <div><a href="#">Skills</a></div>
        <div><a href="#">Projects</a></div>
        <div><a href="#">Education</a></div>
        <div><a href="#">Contact</a></div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default NavbarComponent;
