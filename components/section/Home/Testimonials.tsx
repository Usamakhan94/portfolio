"use client";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className=" xsm:py-36 py-10 relative">
      <div className="absolute -top-[100%] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem]">
        <img src="/colored_bg.png" className="w-full" alt="" />
      </div>
      <div className="container">
        <Transition>
          <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 font-bold">
            Testimonials
          </h2>
        </Transition>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            660: {
              slidesPerView: 2,
              spaceBetween: 20,
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
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    Isabell
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/micheal.png"
                  alt="micheal"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    Michal Smith
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    Isabell
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/micheal.png"
                  alt="micheal"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    Michal Smith
                  </h6>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-white font-semibold sm:text-base text-sm pb-7">
                But I must explain to you how all this mistaken idea of
                denouncin pleasure and praising pain was born and I will give
                you a complete account of the system, ande tual teachings of the
                great explorer of the truth
              </p>
              <div className="flex items-center justify-start gap-5 pt-7 border-t border-white/10">
                <Image
                  className="xsm:w-[5.75rem] w-[3.75rem] xsm:h-[5.75rem] h-[3.75rem] "
                  src="/isabelle.png"
                  alt="isabelle"
                  width={92}
                  height={92}
                />
                <Transition>
                  <h6 className="sm:text-h5 xsm:text-h6 text-base font-bold leading-none">
                    Isabell
                  </h6>
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
