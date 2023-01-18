import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const navLinks = ["home", "about", "skills", "portfolio", "contact"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 15);
    });
  }, []);

  return (
    <div
      className={scroll ? "fixed w-full z-50 bg-white/20 backdrop-blur-md" : ""}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
        <div className="">
          <Link
            to="/"
            className="bg-white w-10 h-10 font-bold rounded-full text-center text-2xl leading-10 inline-block"
          >
            S
          </Link>
        </div>
        <div>
          <ul className="flex list-none">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={`#${navLink}`} className="mx-6 capitalize">
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-white py-1 px-4 rounded-md font-semibold">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
