"use client";
import { ScrollIcon } from "@/components/ui/icons";
import Transition from "@/components/ui/transition";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="pt-[10rem] relative isolate">
      <div className="container relative">
        <h1 className="text-h1 flex flex-col font-bold max-w-[70%] m-auto">
          <div className="relative overflow-hidden">
            <Transition>
              <span className=" ml-[1.5em] inline-block">Design</span>
            </Transition>
          </div>
          <div className=" overflow-hidden">
            <Transition>
              <span>Develope</span>
            </Transition>
          </div>
          <div className=" overflow-hidden">
            <Transition>
              <span className=" ml-[1.5em] inline-block">Implement.</span>
            </Transition>
          </div>
        </h1>
        <div className="flex flex-col justify-center items-center my-12">
          <div className=" animate-bounce duration-1000">
            <ScrollIcon />
          </div>
          <h6 className=" text-base font-semibold mt-2">Scroll</h6>
        </div>
        <div
          className=" w-[180px] h-[180px] !bg-no-repeat !bg-cover absolute xl:top-[5%] top-[26%] xl:right-[20%] right-[10%]"
          style={{ background: "url(/inner-logo.png)" }}
        >
          <Image
            src="/outer-logo.png"
            alt=""
            fill
            className="!static animate-spin duration-full"
          />
        </div>
      </div>
      <div className="absolute w-[1200px] h-[700px] pointer-events-none top-[15%] -z-10 -left-[5%]">
        <Image
          className="object-contain"
          src="/main_bnr.webp"
          alt="Bg Curve"
          fill
        />
      </div>
      <div className="absolute top-0 -z-10">
        <img src="/top_bnr-shade1.png" alt="" className="!static" />
      </div>
      <div className="absolute top-0 right-0 -z-10">
        <img src="/top_bnr-shade2.png" alt="" className="!static" />
      </div>
    </section>
  );
};

export default Hero;
