"use client";

import React, { useEffect, useState } from "react";
import {
  Reorder,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import EachBox from "@/components/EachBox";

const Day4 = () => {
  const [items, setitems] = useState([
    "Mstars",
    "Academy",
    "Selbe",
    "Hello",
    "World",
    "DDISH",
    "Unitel",
  ]);

  return (
    <motion.div className="w-full min-h-screen flex items-center justify-betweenr">
      {/* ******** Cursoroo atgah uildel , mun item -iig zooj boldog****** */}
      {/* <Reorder.Group values={items} onReorder={setitems}>
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            className="cursor-grab active:cursor-grabbing"
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group> */}

      {items.map(item => (
        <EachBox key={item} item={item} />
      ))}
    </motion.div>
  );
};

export default Day4;
