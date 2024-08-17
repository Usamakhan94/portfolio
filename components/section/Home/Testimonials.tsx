"use client";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className=" py-36 relative">
      <div className="absolute -top-[100%] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem]">
        <img src="/colored_bg.png" className="w-full" alt="" />
      </div>
      <div className="container">
        <Transition>
          <h2 className="text-h2 font-bold">Testimonials</h2>
        </Transition>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="TestimonailsSwiper !py-5"
        >
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold text-base pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="text-h5 font-bold leading-none">Isabell</h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold text-base pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  src="/micheal.png"
                  alt="micheal"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="text-h5 font-bold leading-none">
                    Michal Smith
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold text-base pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="text-h5 font-bold leading-none">Isabell</h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold text-base pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  src="/micheal.png"
                  alt="micheal"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="text-h5 font-bold leading-none">
                    Michal Smith
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold text-base pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="text-h5 font-bold leading-none">Isabell</h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
