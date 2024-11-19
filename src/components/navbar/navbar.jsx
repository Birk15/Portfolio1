import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Verfolge das aktive Element

  const menuItems = ["Home", "About Me", "Services", "Portfolio", "Contact"];
  return (
    <div id="navbar" className="navbar">
      <img src={logo} alt="" />
      <motion.div className="nav-menu" style={{ position: "relative" }}>
        {/* Hintergrund für aktive Menü-Items */}
        <motion.div
          className="background"
          layout
          initial={false}
          animate={{
            left: activeIndex * 130, // Passe die Breite und Position an
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            width: "110px",
            height: "50px",
            backgroundColor: "#32323d",
            borderRadius: 15,
            zIndex: -1,
          }}
        />
        {/* Menüelemente */}
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item} // Ziel-ID
            smooth={true} // Sanftes Scrollen
            duration={500} // Animationsdauer des Scrollens
            onClick={() => setActiveIndex(index)} // Framer Motion Animation auslösen
            style={{
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              cursor: "pointer",
              position: "relative",
              zIndex: 1,
              width: 110,
            }}
          >
            {item}
          </Link>
        ))}
      </motion.div>
      <div className="nav-connect">Connect with me</div>

      <div className="up" onClick={() => scroll.scrollToTop()}>
        GO UP
      </div>
    </div>
  );
};

export default Navbar;
