import { useState } from "react";

const VisionCard = ({ cardContent }: { cardContent: any }) => {
  const [activeCard, setActiveCard] = useState(false);
  return (
    <div
      className="bg-card rounded-[0.9375rem] px-[2.4375rem] py-[3.75rem] group transition-all duration-300 flex flex-col items-center justify-center gap-7 overflow-hidden text-center"
      onMouseEnter={() => setActiveCard(true)}
      onMouseLeave={() => setActiveCard(false)}
    >
      <div className="relative isolate pb-4">
        <div className=" w-[8.3125rem] h-[8.3125rem] rounded-full shadow-multi group-hover:shadow-single transition-all duration-300 rotate-45 absolute left-0 top-0 -z-10" />
        <div className="bg-card-foreground group-hover:bg-card-foregroundHover transition-all duration-300 w-[8.3125rem] h-[8.3125rem] rounded-full translate-x-4 translate-y-4 grid place-items-center">
          {cardContent.icon}
        </div>
      </div>
      <h4 className="text-h4 font-bold leading-none">{cardContent.heading}</h4>
      <p className="font-medium mb-9">{cardContent.details}</p>
    </div>
  );
};

export default VisionCard;
