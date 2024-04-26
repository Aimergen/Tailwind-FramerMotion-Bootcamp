"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";

const texts = ["MStars Hub", "Bootcamp", "Framer Motion", "Tailwind css"];
const menutexts = ["Home", "Service", "About", "Contact"];

// {} curly brucet
// () parentesis
// [] square bracket

const Navbar = () => {
  const [isMenuOpen, setIstMenuOpen] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const newIndex = (activeTextIndex + 1) % texts.length;
      setActiveTextIndex(newIndex);
    }, 5000);
    return () => clearInterval(textInterval);
  }, [activeTextIndex]);

  const textParentVariants = { initial: {}, animate: {}, exit: {} };
  const textChildrenVariants = {
    initial: { y: 30 },
    animate: { y: 0 },
    exit: { y: -30 },
  };

  const splitParentVariant = {
    initial: {
      x: 0,
    },
    hover: {
      x: 20,
      transition: {
        type: "spring",
        staggerChildren: 0.1,
      },
    },
  };
  const splitChildrenVariants = {
    initial: {
      x: 0,
    },
    hover: {
      x: -20,
    },
  };

  return (
    <nav className="mx-auto bg-green-100 w-full p-5 shadow-md fixed top-0 z-40">
      <div className="flex items-center justify-between z-50">
        <h2>LOGO</h2>
        <ul className="flex items-center justify-between gap-5 relative z-20 text-primary">
          <AnimatePresence>
            <motion.li
              key={"parent" + activeTextIndex}
              variants={textParentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                type: "spring",
              }}
              className="flex whitespace-nowrap overflow-hidden absolute left-0"
            >
              {texts[activeTextIndex].split("").map((eachAlphabet, index) => (
                <motion.span
                  key={"children" + activeTextIndex + eachAlphabet + index}
                  variants={textChildrenVariants}
                  className="inline-flex"
                >
                  {eachAlphabet === " " ? (
                    <span className="w-1 inline-flex"></span>
                  ) : (
                    eachAlphabet
                  )}
                </motion.span>
              ))}
            </motion.li>
          </AnimatePresence>
        </ul>
        <button
          className="flex flex-col gap-1 z-50"
          onClick={() => setIstMenuOpen(prev => !prev)}
        >
          <motion.img
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 4.25 : 0 }}
            alt="burger"
            src="/y.svg"
            className="w-7"
          />
          <motion.img
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? -4.25 : 0 }}
            alt="burger"
            src="/y.svg"
            className="w-7"
          />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key={"menu"}
              initial={{ y: -1000 }}
              animate={{
                y: 0,
              }}
              exit={{
                y: 1000,
              }}
              transition={{
                duration: 1.5,
                type: "spring",
              }}
              className="absolute inset-0 w-screen h-screen bg-menu flex flex-col justify-center p-20 text-6xl gap-3 *:border-b-2 *:border-black *:pb-5 z-60"
            >
              {menutexts.map(menutext => (
                <motion.div
                  key="hello"
                  className="flex"
                  variants={splitParentVariant}
                  initial="initial"
                  whileHover="hover"
                >
                  {menutext.split("").map((eachAlphabet: any) => (
                    <motion.span
                      key={eachAlphabet}
                      variants={splitChildrenVariants}
                    >
                      {eachAlphabet}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
