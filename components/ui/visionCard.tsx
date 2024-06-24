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
      className={`rounded-[0.9375rem] px-[2.4375rem] py-[3.75rem] group transition-all duration-700 flex flex-col items-center justify-center gap-7 text-center cursor-pointer relative overflow-hidden before:absolute before:top-[1px] before:-z-10 before:left-[1px] before:rounded-[0.9375rem] ${
        indexed === 1
          ? "about_cards"
          : indexed === 2
          ? "bg-card-foregrounddark"
          : "bg-card"
      }`}
      onMouseEnter={() => setActiveCard((prev) => !prev)}
      onMouseLeave={() => setActiveCard(false)}
    >
      <div className="relative isolate pb-4">
        <div
          className={`w-[8.4375rem] h-[8.4375rem] rounded-full transition-all duration-300 rotate-45 absolute -left-[1px] -top-[1px] -z-10 ${
            indexed === 1
              ? "shadow-single group-hover:shadow-multi"
              : "shadow-multi group-hover:shadow-single"
          }`}
        />
        <div
          className={`group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 w-[8.3125rem] h-[8.3125rem] rounded-full translate-x-4 translate-y-4 grid place-items-center ${
            indexed === 2
              ? "bg-card"
              : indexed === 1
              ? "bg-white"
              : "bg-card-foreground"
          }`}
        >
          {iconRendering}
        </div>
      </div>
      <h4 className="text-h4 font-bold leading-none">{cardContent.heading}</h4>
      <p
        className={`font-medium mb-9 transition-all duration-300 ${
          indexed === 1 ? "text-white" : ""
        }`}
      >
        {cardContent.details}
      </p>
    </div>
  );
};

export default VisionCard;
