"use client";
import { ScrollIcon } from "@/components/ui/icons";
// import Transition from "@/components/ui/transition";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
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
    <section className="pt-[10rem] relative isolate">
      <div className="container relative">
        <MotionConfig transition={{ duration: 0.5, delay: 0.125 }}>
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
        <div className="flex flex-col justify-center items-center my-10">
          <div className=" animate-bounce duration-1000">
            <ScrollIcon />
          </div>
          <h6 className=" text-base font-semibold mt-2">Scroll</h6>
        </div>
        <div
          className=" w-[180px] h-[180px] !bg-no-repeat !bg-cover absolute top-[5%] right-[20%]"
          style={{ background: "url(/inner-logo.png)" }}
        >
          <Image
            src="/outer-logo.png"
            alt=""
            fill
            className="!static animate-spin duration-full"
          />
        </div>
      </div>
      <div className="pointer-events-none bg-[#3C1477] rounded-full absolute -z-10 -top-[5%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[51.875rem] h-[51.875rem] blur-[150px] before:bg-[#4C0E49] before:rounded-full before:absolute before:-z-20 before:top-[40%] before:-right-[30%] before:-translate-x-1/2 before:-translate-y-1/2 before:w-[37.5rem] before:h-[37.5rem] after:bg-[#0AA4F8] after:rounded-full after:absolute after:-z-20 after:top-[60%] after:-right-[55%] after:w-[25rem] after:h-[25rem]" />
      <div className="absolute w-[1200px] h-[700px] pointer-events-none top-[15%] -z-10 -left-[5%]">
        <Image
          className="object-contain"
          src="/main_bnr.webp"
          alt="Bg Curve"
          fill
        />
      </div>
    </section>
  );
};

export default Hero;
