"use client";
import { ArrowCircleIcons, StarIcon } from "@/components/ui/icons";
import Pills from "@/components/ui/pill";
import Link from "next/link";
import { motion } from "framer-motion";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sliderData = [
  "Design",
  "Develop",
  "Implement",
  "Design",
  "Develop",
  "Implement",
  "Design",
  "Develop",
  "Implement",
];

const OurGoal = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className=" 2xl:pr-16">
            <Pills>
              <span className="leading-none text-white font-bold text-base">
                About our Company
              </span>
            </Pills>
            <h2 className="2xl:text-h2 xl:text-[4.875rem] text-h3 font-bold leading-[1.2]">
              <Transition>Our Goal to</Transition>
              <Transition>Satisfied Local</Transition>
              <Transition>& Global Clients</Transition>
            </h2>
            <p className="max-w-[33.75rem] py-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemoei m ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sedquia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciuntque porro quisquam est,
              qui dolorem ipsum quia
            </p>
            <div className="flex items-end">
              <Link
                className="rounded-full h-[72px] min-w-[18.75rem] relative group"
                href=""
              >
                <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
                  <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
                  <div className="bg-[#05080B] rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[1.7rem]">
                    <span className=" text-h6 font-medium">Get in Touch</span>
                    <span className="group-hover:rotate-45 transition-all">
                      <ArrowCircleIcons />
                    </span>
                  </div>
                </div>
              </Link>
              <div className=" ml-10 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="68"
                  fill="none"
                  viewBox="0 0 59 57"
                >
                  <motion.path
                    stroke="#fff"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                    strokeWidth="3"
                    d="M37 2.00438C37 2.00438 42.3538 1.87633 45.5 3.00438C48.0535 3.91992 49.4918 4.68076 51.5 6.50438C53.4662 8.28981 54.5055 9.54177 55.5 12.0044C56.1741 13.6736 56.2956 14.7158 56.5 16.5044C56.7217 18.4444 57.0547 19.6322 56.5 21.5044C56.0528 23.0138 55.5154 23.8014 54.5 25.0044C53.2406 26.4965 52.1558 27.4651 50.5 28.5C48.6487 29.657 47.93 29.9798 46 31C44.2227 31.9395 42.8883 32.3145 41 33.0044C40.1499 33.315 39.4331 33.5065 38.7302 33.6381M8 46.0044L18 41.0044L4 44.5044L20.5 55.5044L13.5 48.5044C13.5 48.5044 18.0497 49.3396 21 49.5044C23.1445 49.6241 24.3521 49.5044 26.5 49.5044C27.8668 49.5044 28.6509 49.724 30 49.5044C31.6466 49.2363 32.5514 48.8319 34 48.0044C35.8023 46.9748 36.9867 46.3159 38 44.5044C38.694 43.2638 38.782 42.4091 39 41.0044C39.2695 39.2678 39 36.5044 39 36.5044C39 36.5044 38.9196 35.2298 38.7302 33.6381M38.7302 33.6381C38.5703 32.2941 38.3326 30.7241 38 29.5044C37.6751 28.313 37.4344 27.6604 37 26.5044C36.4769 25.1124 36.1282 24.3479 35.5 23C34.9467 21.8128 34.9819 21.867 34 21C32.793 19.9343 31.6068 19.1048 30 19C27.8215 18.8579 26.2075 18.6441 24.5 20.0044C23.3987 20.8817 22.902 21.6549 22.5 23.0044C22.1098 24.3143 22.2244 25.1656 22.5 26.5044C22.8522 28.215 23.3987 29.1489 24.5 30.5044C26.1054 32.4803 27.5388 33.3531 30 34.0044C32.0764 34.5538 33.3607 34.1957 35.5 34.0044C36.773 33.8905 37.7377 33.824 38.7302 33.6381Z"
                  ></motion.path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative isolate">
            <div className=" absolute -bottom-[18%] -right-[36%] w-[50rem] h-[50rem] bg-background rounded-full p-[2px] bg-clip-padding overflow-hidden before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:from-[30%] before:to-white before:to-[70%] before:absolute before:left-0 before:bottom-0 before:-z-10" />
            <div className="relative isolate pb-24">
              <Image
                src="/our-goal-big.png"
                alt=""
                fill
                className="!static max-w-[560px]"
              />
              <Image
                src="/our-goal-small.png"
                alt=""
                width="350"
                height="350"
                className="absolute max-w-[350px] max-h-[350px] -bottom-6 2xl:-left-44 -left-32"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden relative mt-52 py-2 pointer-events-none">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            660: {
              slidesPerView: 2.25,
              spaceBetween: 15,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 4.8,
              spaceBetween: 50,
            },
          }}
          centeredSlides={true}
          loop={true}
          speed={6000}
          autoplay={{
            delay: -1,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          modules={[Autoplay]}
          freeMode={false}
          // pagination={{
          //   clickable: true,
          // }}
          className="logo_slider"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center relative px-[30px]">
                <span
                  className={`xl:text-h4 sm:text-h5 text-h6 font-bold ${
                    index % 2 === 0 ? "text_stroke" : ""
                  }`}
                >
                  {item}
                </span>
                <div className="absolute -right-[17px] w-[34px] h-[34px]">
                  <StarIcon />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center relative">
                <span
                  className={`xl:text-h4 sm:text-h5 text-h6 font-bold ${
                    index % 2 !== 0 ? "text_stroke" : ""
                  }`}
                >
                  {item}
                </span>
                <div className="absolute -right-[17px] w-[34px] h-[34px]">
                  <StarIcon />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 -z-10">
          <Image src="/top_bnr-shade1.png" alt="" fill className="!static" />
        </div>
        <div className="absolute top-0 right-0 -z-10">
          <Image src="/top_bnr-shade2.png" alt="" fill className="!static" />
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
