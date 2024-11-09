import React, { useState } from "react";

const Navbar = ({ containerStyles }) => {
  const [isActive, setIsActive] = useState("home");
  return (
    <nav className={`${containerStyles}`}>
      <a
        href="#home"
        onClick={() => isActive("home")}
        className={isActive === "home" ? "active-link" : ""}
      >
        Home
      </a>
      <a
        href="#categories"
        onClick={() => isActive("categories")}
        className={isActive === "categories" ? "active-link" : ""}
      >
        Categories
      </a>
      <a
        href="#shop"
        onClick={() => isActive("shop")}
        className={isActive === "shop" ? "active-link" : ""}
      >
        Shop
      </a>
      <a
        href="#contact"
        onClick={() => isActive("contact")}
        className={isActive === "contact" ? "active-link" : ""}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;