import AnimatedCounter from "@/components/ui/AnimatedCounter";

const Experience = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-3 max-w-[80%] m-auto">
          <div className="text-center">
            <h4 className="text-h2 font-bold font-inter leading-tight">
              <AnimatedCounter to={7} />+
            </h4>
            <span className="text-base font-semibold">Years of Experience</span>
          </div>
          <div className="text-center relative before:w-[3px] before:h-[60%] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-gradient-to-br before:from-[#007DFF] before:to-[#3C1477] after:w-[3px] after:h-[60%] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:bg-gradient-to-br after:from-[#007DFF] after:to-[#3C1477]">
            <h4 className="text-h2 font-bold font-inter leading-tight">
              <AnimatedCounter to={100} />+
            </h4>
            <span className="text-base font-semibold">Satisfied Clients</span>
          </div>
          <div className="text-center">
            <h4 className="text-h2 font-bold font-inter leading-tight">
              <AnimatedCounter to={254} />
            </h4>
            <span className="text-base font-semibold">Orders in Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
