"use client";
import { MissionIcon } from "@/components/ui/icons";
import VisionCard from "@/components/ui/visionCard";
import { useState } from "react";

const Vision = () => {
  const [activeCard, setActiveCard] = useState(false);
  const content = [
    {
      heading: "Our Mission",
      icon: <MissionIcon fill={activeCard} />,
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
    {
      heading: "Our Vision",
      icon: <MissionIcon fill={activeCard} />,
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
    {
      heading: "Our Mission",
      icon: <MissionIcon fill={activeCard} />,
      details: `Sed ut perspiciatis unde omnis iste natus error sit volupt atem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritats etqu asi architecto beatae vitae
              dicta sunt explicabo.`,
    },
  ];

  // const hoverControl = (activeCheck) => {
  //   setActiveCard(activeCheck);
  // };

  // const hoverLeave = (activeCheck) => {
  //   setActiveCard(activeCheck);
  // };

  return (
    <section className=" py-32">
      <div className="container">
        <div className="grid grid-cols-3 gap-9">
          {content.map((visonContent, index: any) => (
            <VisionCard
              key={index}
              cardContent={visonContent}
              // enterHandle={hoverControl}
              // leaveHandle={hoverLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
