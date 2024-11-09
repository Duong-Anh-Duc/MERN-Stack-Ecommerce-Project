import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [header, setHeader] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <header
      className="fixed w-full mx-auto top-0 left-0 right-0 
    py-4 z-30 transition-all max-padd-container flexBetween"
    >
      <Link to={"/"} className="bold-24">
        <img src={logo} alt="logoImg" height={177} width={177} />
      </Link>
      <div className="flexBetween gap-x-20">
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col w-64 gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-start -right-[100%] flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
          }`}
        />
        <div>
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
