"use client";

import {
  delay,
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Scada } from "next/font/google";

const Day1 = () => {
  // const inputDivScale = useMotionValue(1)
  // const inputDivScaleSpring = useSpring(inputDivScale)

  const [scope, animate] = useAnimate();

  const imageVariants = {
    init: {
      opacity: 0,
      scale: 1,
    },
    second: {
      opacity: 0.5,
      transition: {
        duration: 2,
        // delay: 2,
        // delayChildren: 4,
        // when: 'beforeChildren'
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
    third: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    whileTap: {
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const eachImageVariants = {
    init: {
      scale: 0.5,
    },
    second: {
      scale: 1,
    },
    third: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    whileTap: {
      scale: 1.5,
      transition: {
        duration: 2,
      },
    },
  };

  const buttonVariants = {
    init: {
      scale: 1,
    },
    second: {
      scale: 1.2,
      transition: {
        duration: 1,
      },
    },
    third: {
      transition: {
        duration: 1,
      },
    },
  };

  // drag: naash taash hodolgon, timeConstant: durationtai adilhan ,
  return (
    <motion.div
      drag="x"
      // dragTransition={{
      //   max: 100,
      //   min: 100,
      //   timeConstant: 5,
      //   bounceDamping: 7
      // }}
      ref={scope}
      transition={{
        type: "inertia",
        velocity: 100,
      }}
      className="relative from-blue-500 text-center to-blue-700 bg-gradient-to-r flex items-center justify-center h-36 m-10 ring-[20px] ring-blue-200 w-2/3 border-gray-200 rounded-lg px-5 py-3 text-white"
    >
      <div className="flex flex-col gap-3">
        <span
          id="firstSpan"
          className="text-sm font-bold transition-all duration-500 sm:text-lg xl:text-2xl"
        >
          Already working together
        </span>
        <span id="secondSpan" className="text-xs font-thin">
          hello world hello world hello world hello world
        </span>
        <motion.div
          // style={{ scale: inputDivScaleSpring }}

          className="flex flex-row h-10 bg-blue-400 rounded-full border-white border items-center"
        >
          <input
            className="bg-transparent w-full px-4 placeholder:text-white outline-none placeholder:text-sm"
            placeholder="mstars.m@gmail.com"
          />
          <motion.button
            variants={buttonVariants}
            initial="init"
            // animate='second'
            whileHover="second"
            whileTap="whileTap"
            transition={{ type: "spring" }}
            onClick={() => {
              animate("#firstSpan", { opacity: 0 }, { duration: 3 });
              animate("#secondSpan", { rotate: 360 }, { duration: 3 });
            }}
            className="w-10 mr-1.5 bg-white rounded-full size-8 flex items-center justify-center"
          >
            <img src="/arrow-right.svg" alt="icon" className="w-5" />
          </motion.button>
        </motion.div>
      </div>
      {/* ******** ETSEG DEERN huuhuuduun adil styliig bichij boldog `*:`  ************* */}
      <motion.div
        variants={imageVariants}
        // esregeern bairiin solij bolno
        initial="init"
        animate="second"
        whileHover="third"
        whileTap="whileTap"
        // transition={{ duration: 4 }}
        className="absolute group -bottom-9 flex *:rounded-full gap-4 border-black border"
      >
        <motion.img
          variants={eachImageVariants}
          src="https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"
          alt="avatar"
          className="size-11 shadow-xl border-2 border-white bg-white group-hover:border-black peer"
        />
        <motion.img
          variants={eachImageVariants}
          src="https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"
          alt="avatar"
          className="size-11 shadow-xl border-2 border-white bg-white group-hover:border-green-500"
        />
        <motion.img
          variants={eachImageVariants}
          src="https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"
          alt="avatar"
          className="size-11 shadow-xl border-2 border-white bg-white group-hover:border-purple-500 hover:cursor-pointer hover:scale-125 transition-all duration-300"
        />
        <motion.img
          variants={eachImageVariants}
          src="https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"
          alt="avatar"
          className="size-11 shadow-xl border-2 border-white bg-white group-hover:border-red-500"
        />
        <motion.img
          variants={eachImageVariants}
          src="https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"
          alt="avatar"
          className="size-11 shadow-xl border-2 border-white bg-white group-hover:border-yellow-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default Day1;
