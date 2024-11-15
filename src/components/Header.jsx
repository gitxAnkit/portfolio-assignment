import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md relative flex">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold hover:text-[#ff6347]">
          ANKIT VERMA
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none hover:text-[#ff6347]"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="ixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed inset-0 bg-black z-50 flex-col items-center justify-center space-y-8 md:relative md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:inset-auto md:p-0`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white hover:text-[#ff6347] md:hidden"
        >
          <FaTimes size={24} />
        </button>

        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={toggleMenu}
            className="hover:text-[#ff6347] text-2xl md:text-base"
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
