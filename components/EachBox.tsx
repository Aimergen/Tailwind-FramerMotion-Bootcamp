import { Reorder, motion, useMotionValue, useSpring } from "framer-motion";

const EachBox = ({ item }: { item: any }) => {
  const opacity = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSprint = useSpring(x);
  const ySprint = useSpring(y);

  const handleMouseMove = (event: any) => {
    // Evented yamar utga bgaag bugdiin gargaj irne

    const boxEvent = event.currentTarget!.getBoundingClientRect();

    const mouseY = event.clientY;
    const mouseX = event.clientX;

    const mouseYonBox = mouseY - boxEvent.top;
    const mouseXonBox = mouseX - boxEvent.left;

    const boxOpacity = mouseYonBox / boxEvent.height;
    const halfHeight = boxEvent.height / 2;
    const halfWidth = boxEvent.width / 2;

    const ifMouseIsAtTop = mouseYonBox < halfHeight;
    const ifMouseIsAtBottom = mouseYonBox > halfHeight;
    const ifMouseIsAtLeft = mouseXonBox < halfWidth;
    const ifMouseIsAtRight = mouseXonBox > halfWidth;

    if (ifMouseIsAtTop) {
      y.set(-8);
    }
    if (ifMouseIsAtBottom) {
      y.set(8);
    }
    if (ifMouseIsAtLeft) {
      x.set(8);
    }
    if (ifMouseIsAtRight) {
      x.set(-8);
    }

    opacity.set(boxOpacity);
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
    <motion.div
      key={item}
      //   initial={{
      //     opacity: 0
      //   }}
      //   whileInView={{ opacity: 1 }}
      //   transition={{
      //     duration: 3
      //   }}
      //   viewport={{ once: false }}
      style={{
        x: xSprint,
        y: ySprint,
      }}
      onMouseMove={handleMouseMove}
      className=" h-60 text-5xl border border-gray-500 text-center m-5 w-96 p-10 rounded-lg shadow-md"
    >
      <motion.div
        className="flex items-center justify-center"
        variants={splitParentVariant}
        initial="initial"
        whileHover="hover"
      >
        {item.split("").map((eachAlphabet: any) => (
          <motion.span key={eachAlphabet} variants={splitChildrenVariants}>
            {eachAlphabet}
          </motion.span>
        ))}
      </motion.div>

      <p className="text-sm p-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </motion.div>
  );
};

export default EachBox;
