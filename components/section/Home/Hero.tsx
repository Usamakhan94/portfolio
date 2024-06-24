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
          className=" w-[180px] h-[180px] !bg-no-repeat !bg-cover absolute top-[5%] right-[20%]"
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

      <div className="pointer-events-none bg-[#3C1477] rounded-full absolute -z-10 -top-[5%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[51.875rem] h-[51.875rem] blur-[150px] before:bg-[#4C0E49] before:rounded-full before:absolute before:-z-20 before:top-[40%] before:-right-[30%] before:-translate-x-1/2 before:-translate-y-1/2 before:w-[37.5rem] before:h-[37.5rem] " />
      <div className="absolute w-[1200px] h-[700px] pointer-events-none top-[15%] -z-10 -left-[5%]">
        <Image
          className="object-contain"
          src="/main_bnr.webp"
          alt="Bg Curve"
          fill
        />
      </div>
    </section>
  );
};

export default Hero;
