"use client";
import VisionCard from "@/components/ui/visionCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Vision = () => {
  const content = [
    {
      heading: "Our Mission",
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
    {
      heading: "Our Vision",
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
    {
      heading: "Our Goal",
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px -100px -250px -100px",
  });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className=" py-32">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
                duration: 0.4,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className="grid grid-cols-3 gap-9"
        >
          {content.map((visonContent, index: any) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              key={index}
            >
              <VisionCard indexed={index} cardContent={visonContent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
