import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center border-t border-gray-700 pt-8 pb-16">
        <nav>
          <ul className="flex justify-center space-x-8 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-gray-500 mt-4">
          Copyright &#169; 2024 Ankit Verma. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
