import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navLinks = ["home", "about", "skills", "portfolio", "contact"];

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={scroll ? "fixed w-full z-50 bg-white/20 backdrop-blur-md" : ""}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        <div className="">
          <Link
            to="/"
            className="bg-white w-10 h-10 font-bold rounded-full text-center text-2xl leading-10 inline-block"
          >
            S
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex list-none">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a href={`#${navLink}`} className="mx-6 capitalize">
                  {navLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href="Abu_Sufian_Resume.pdf" download='Abu_Sufian_Resume.pdf' className="bg-white py-1 px-4 rounded-md font-semibold">
            Resume
          </a>
        </div>
        {/* mobile menu */}
        <div className="lg:hidden bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
          <HiMenuAlt4 className="w-3/4 h-3/4" onClick={() => setToggle(true)} />
        </div>
        <motion.div
          className="bg-black w-16 h-16 fixed rounded-full right-0 top-0 z-50"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          className="text-white fixed top-8 left-0 w-full flex items-center justify-center flex-col h-screen z-50"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => setToggle(false)}
            className="cursor-pointer absolute top-8 right-8 w-6 h-6"
          />
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="list-none mt-4 uppercase opacity-60 hover:opacity-100 transition"
              onClick={() => setToggle(false)}
            >
              <Link to={`#${navLink}`}>{navLink}</Link>
            </li>
          ))}
        </motion.div>
        {/* mobile menu end */}
      </div>
    </div>
  );
};

export default Navbar;
