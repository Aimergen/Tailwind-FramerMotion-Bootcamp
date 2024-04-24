"use client";

import {
  delay,
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Day3 = () => {
  const [scope, animate] = useAnimate();

  const parentVariable = {
    initial: {},
    animate: {},
  };

  const eachVariables = {
    initial: {
      x: -1000,
    },
    animate: {
      x: 0,
    },
  };

  return (
    <motion.div
      drag="x"
      ref={scope}
      transition={{
        type: "inertia",
        velocity: 100,
      }}
      className="h-screen w-screen grid grid-cols-2 gap-10"
    >
      <div className="bg-gray-300 my-10 rounded-lg ml-5 p-5">
        <motion.span
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          className="text-3xl font-medium"
        >
          Our services:
        </motion.span>
        <motion.ul
          variants={parentVariable}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 1, delay: 1, when: "beforeChildren" }}
          className="p-5 h-min whitespace-nowrap"
        >
          <motion.li
            variants={eachVariables}
            className="list-disc marker:text-green-600 hover:underline"
            onClick={() => {
              animate("#image-1", { opacity: 1, x: 0 }, { delay: 1 });
              animate("#image-2", { opacity: 0, x: 1000 });
              animate("#image-3", { opacity: 0, x: 1000 });
            }}
          >
            Hello world
          </motion.li>
          <motion.li
            variants={eachVariables}
            className={`list-disc hover:underline `}
            onClick={() => {
              animate("#image-2", { opacity: 1, x: 0 }, { delay: 1 });
              animate("#image-1", { opacity: 0, x: 1000 });
              animate("#image-3", { opacity: 0, x: 1000 });
            }}
          >
            Our comunity
          </motion.li>
          <motion.li
            variants={eachVariables}
            className="list-disc hover:underline"
            onClick={() => {
              animate("#image-3", { opacity: 1, x: 0 }, { delay: 1 });
              animate("#image-1", { opacity: 0, x: 1000 });
              animate("#image-2", { opacity: 0, x: 1000 });
            }}
          >
            Contact
          </motion.li>
        </motion.ul>
      </div>
      <div className="bg-slate-300 my-10 rounded-xl mr-5 max-h-screen relative">
        <motion.img
          id="image-1"
          layout
          className="size-full rounded-xl inset-0 absolute opacity-0 translate-x-[1000px] object-cover"
          src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/438980405_754060176857499_3222022777755802911_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=39qIhoqFDlEAb6fXYmQ&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAwrJA1xkTlsC1UPBkj9sRbcgoEiSBvRGgBC4iOc8dEtg&oe=662CB5D4"
        />
        <motion.img
          id="image-2"
          layout
          className="size-full rounded-xl inset-0 absolute opacity-0 translate-x-[1000px] object-cover"
          src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439032757_754060216857495_5430304203174801696_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7xC7_kswTMQAb6tp54G&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD05LNpb6upDx1KSPL1w05LlvBPsdLd1F2NGZQ56E9uYg&oe=662CAA74"
        />
        <motion.img
          id="image-3"
          layout
          className="size-full rounded-xl inset-0 absolute opacity-0 translate-x-[1000px] object-cover"
          src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439018298_754060200190830_3950449197090820872_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Y6Im99Sb6gAb4pEhZy&_nc_ht=scontent.fuln1-2.fna&oh=00_AfB2Yl-xTaGlO9-rAdqpihju-kFE1yoy_8cIKbbDELdl5g&oe=662CB446"
        />
      </div>
    </motion.div>
  );
};

export default Day3;
