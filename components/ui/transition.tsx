"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Transition = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: "100%",
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        ref={ref}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
