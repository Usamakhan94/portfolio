"use client";
import VisionCard from "@/components/ui/visionCard";

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
  return (
    <section className=" py-32">
      <div className="container">
        <div className="grid grid-cols-3 gap-9">
          {content.map((visonContent, index: any) => (
            <VisionCard
              key={index}
              indexed={index}
              cardContent={visonContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
