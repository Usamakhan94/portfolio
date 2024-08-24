"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col relative h-[80%] w-[80%] rounded-[1.25rem] p-12 origin-top  bg-black/70 overflow-hidden border border-white/10"
        style={{
          scale,
          top: `calc(10vh + ${i * 25}px)`,
        }}
      >
        <div className="absolute -bottom-[60%] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem] ">
          <img src="/colored_bg.png" className="w-full" alt="" />
        </div>
        <h2 className="xl:text-[3.375rem] xsm:text-h3 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2] m-auto">
          {title}
        </h2>

        <div className="flex items-center h-full mt-[3.125rem] gap-[3.125rem]">
          <div className="w-[40%] relative top-[10%] text-body first-letter:text-h6">
            <p>{description}</p>

            <span className="flex items-center gap-[0.3125rem]">
              <a
                href="#"
                className="text-sm underline cursor-pointer"
                target="_blank"
              >
                See more
              </a>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-fit rounded-[1.5625rem] ml-auto overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                className="object-cover w-full h-full"
                src="https://loremflickr.com/200/200?dog=1"
                alt="image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
