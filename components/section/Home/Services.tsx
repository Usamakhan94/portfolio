"use client";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "@/components/ui/ParallexCards";
import Pills from "@/components/ui/pill";

const Services = () => {
  const projects = [
    {
      title: "UI/UX Desgin",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero qui aut dolores rem, harum reiciendis distinctio aperiam at minus dolorum laborum consequuntur consectetur itaque molestiae similique quibusdam quas praesentium!",
      src: "https://source.unsplash.com/featured/300x202",
      link: "#",
      // color: "#BBACAF",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero qui aut dolores rem, harum reiciendis distinctio aperiam at minus dolorum laborum consequuntur consectetur itaque molestiae similique quibusdam quas praesentium. Cupiditate nisi provident molestiae quia omnis hic fugiat aut, quod, ab ipsum est adipisci vel soluta veritatis ratione !",
      src: "https://source.unsplash.com/featured/300x202",
      link: "#",
      // color: "#977F6D",
    },
    {
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero qui aut dolores rem, harum reiciendis distinctio aperiam at minus dolorum laborum consequuntur consectetur itaque molestiae similique quibusdam quas praesentium. Cupiditate nisi provident molestiae quia omnis hic fugiat aut, quod, ab ipsum est adipisci vel soluta veritatis ratione earum aperiam tempore amet. Et saepe dignissimos perferendis ut modi,!",
      src: "https://source.unsplash.com/featured/300x202",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero qui aut dolores rem, harum reiciendis distinctio aperiam at minus dolorum laborum consequuntur consectetur itaque molestiae similique quibusdam quas praesentium. Cupiditate nisi provident molestiae quia omnis hic fugiat aut, quod, ab ipsum est adipisci vel soluta veritatis ratione earum aperiam tempore amet. Et saepe dignissimos perferendis ut modi,!",
      src: "https://source.unsplash.com/featured/300x202",
      link: "#",
      // color: "#C2491D",
    },
    {
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero qui aut dolores rem, harum reiciendis distinctio aperiam at minus dolorum laborum consequuntur consectetur itaque molestiae similique quibusdam quas praesentium. Cupiditate nisi provident molestiae quia omnis hic fugiat aut, quod, ab ipsum est adipisci vel soluta veritatis ratione earum aperiam tempore amet. Et saepe dignissimos perferendis ut modi,!",
      src: "https://source.unsplash.com/featured/300x202",
      link: "#",
      // color: "#C2491D",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative">
      <div className="container">
        <div className="flex items-center justify-center flex-col mt-20">
          <Pills>
            <span className="leading-none text-white font-bold xsm:text-base text-sm">
              What We Offer
            </span>
          </Pills>
          <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2]">
            Our Services
          </h2>
        </div>
        <div ref={container}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
