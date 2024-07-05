"use client";
import Pills from "@/components/ui/pill";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 8",
    id: 8,
  },
];

const PortfolioSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cardWidth = 750;
  const cardGap = 16;
  const cardsStart = 350;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${cardsStart}px`, `-${cards.length * cardWidth - cardWidth * 1.69}px`]
  );
  return (
    <section className=" py-32">
      <div ref={targetRef} className="relative h-[300vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="ml-32">
            <Pills>
              <span className="font-bold">Portfolio</span>
            </Pills>
            <h4 className="text-h2 font-bold leading-none">Our Portfolio</h4>
          </div>
          <motion.div style={{ x }} className="flex gap-4 bg-background">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: any }) => {
  return (
    <a className="relative h-screen w-[750px] overflow-hidden bg-card-background">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-h6 font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </a>
  );
};

export default PortfolioSection;
