import Pills from "@/components/ui/pill";

const OurGoal = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Pills>
              <span className="leading-none text-white font-bold text-base">
                About our Company
              </span>
            </Pills>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
