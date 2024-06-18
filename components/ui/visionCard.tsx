import { useState } from "react";
import { MissionIcon, VisionIcon, GoalIcon } from "@/components/ui/icons";

const VisionCard = ({
  cardContent,
  indexed,
}: {
  cardContent: any;
  indexed: number;
}) => {
  const [activeCard, setActiveCard] = useState(false);

  let iconRendering;

  switch (indexed) {
    case 0:
      iconRendering = <MissionIcon fill={activeCard} />;
      break;
    case 1:
      iconRendering = <VisionIcon fill={activeCard} />;
      break;
    case 2:
      iconRendering = <GoalIcon fill={activeCard} />;
      break;
  }
  return (
    <div
      className="bg-card rounded-[0.9375rem] px-[2.4375rem] py-[3.75rem] group transition-all duration-300 flex flex-col items-center justify-center gap-7 overflow-hidden text-center cursor-pointer"
      onMouseEnter={() => setActiveCard(true)}
      onMouseLeave={() => setActiveCard(false)}
    >
      <div className="relative isolate pb-4">
        <div className=" w-[8.3125rem] h-[8.3125rem] rounded-full shadow-multi group-hover:shadow-single transition-all duration-300 rotate-45 absolute left-0 top-0 -z-10" />
        <div className="bg-card-foreground group-hover:bg-card-foregroundHover transition-all duration-300 w-[8.3125rem] h-[8.3125rem] rounded-full translate-x-4 translate-y-4 grid place-items-center">
          {iconRendering}
        </div>
      </div>
      <h4 className="text-h4 font-bold leading-none">{cardContent.heading}</h4>
      <p className="font-medium mb-9">{cardContent.details}</p>
    </div>
  );
};

export default VisionCard;
