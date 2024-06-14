"use client";
// import Transition from "@/components/ui/transition";
import { MotionConfig, motion, useAnimation, useInView } from "framer-motion";
const Hero = () => {
  //   const staggerVariants = {
  //     hidden: {
  //       y: "100%",
  //     },
  //     visible: {
  //       y: 0,
  //       transition: { when: "afterChildren", delayChildren: 2 },
  //     },
  //   };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: 0 },
  };
  return (
    <section className="pt-[10rem]">
      <div className="container">
        <MotionConfig transition={{ duration: 0.5 }}>
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-h1 flex flex-col font-bold max-w-[70%] m-auto"
          >
            <div className="relative overflow-hidden">
              <motion.span
                variants={item}
                initial="hidden"
                animate="show"
                className=" ml-[1.5em] inline-block"
              >
                Design
              </motion.span>
            </div>
            <div className=" overflow-hidden">
              <motion.span
                className="inline-block"
                variants={item}
                initial="hidden"
                animate="show"
              >
                Develope
              </motion.span>
            </div>
            <div className=" overflow-hidden">
              <motion.span
                variants={item}
                initial="hidden"
                animate="show"
                className=" ml-[1.5em] inline-block"
              >
                Implement.
              </motion.span>
            </div>
          </motion.h1>
        </MotionConfig>
      </div>
    </section>
  );
};

export default Hero;
