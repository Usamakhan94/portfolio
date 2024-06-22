"use client";
import { ArrowCircleIcons } from "@/components/ui/icons";
import Pills from "@/components/ui/pill";
import Link from "next/link";
import { motion } from "framer-motion";

const OurGoal = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className=" pr-16">
            <Pills>
              <span className="leading-none text-white font-bold text-base">
                About our Company
              </span>
            </Pills>
            <h2 className="text-h2 font-bold leading-[1.2]">
              Our Goal to Satisfied Local & Global Clients
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemoei m ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sedquia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciuntque porro quisquam est,
              qui dolorem ipsum quia
            </p>
            <div className="flex items-end py-4">
              <Link
                className="rounded-full h-[72px] min-w-[18.75rem] relative group"
                href=""
              >
                {/* <div className="absolute w-1/2 h-1/2 bg-[#01BAED] -bottom-1 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-30" /> */}
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
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="55"
                  height="68"
                  viewBox="0 0 55 68"
                >
                  <defs>
                    <pattern
                      id="pattern0_9_27"
                      patternUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABECAYAAAAlba0pAAADtElEQVRoBd2bjVHcMBCFKSEdhBIogRIogRLoADqADkgHpIOUkBIogRKW+y67w97GkiVj2ZY0w9iHT9I+vf03XF0tHCJyLSI/Fk4/1jSAiMiDiPwRkQ/5Gq8APZa0hdIoqMcA6K8C7Zc5EbkVkfcvks73d4XnctyvnQDBlh8vQ9jYCZEHhn3dHpeGCskCMFSyT2cRMauNmSrC2DDAcPXeedxH8N1+Dur42i2QKLhmG561MdQRoCJyb4YmIuOwpuBIqWz0H6S9ahoqvfabUnlQyhoplo33+LzrzyJyZ8jI+LsGE4UPzmRocMOppQ8DH5HZrj+LyI2zOW5/dg3IC6+Vtsf34J93fx8S5uGcClW2H0Pllj6QA/Kpe3X0AESEjpYNCtWh0jAfEgA5XHXgazoArt4YUu9MtxpT2M62Qw8FcID9tnrqus/BK5sJcKXkat/WOIGJnvPN22bNvbIEqNLBYbZlMzgXBHuuAcV3J1oXrIPwHB72zQ/30RRW0ZakvAnBHpMTwgNlzAuN901W+Prege/YaBuKNOf0G7JxEUCYNimVmVlV27z0SgDE+JPCKusOW7nHdSq6TXWSAIjKTYYJ4qNDVhUr3Wuy7epKBehtyOS/ePH4Tdb8y5ffwYzbfkw4GUAC+lwmBbspPv3TIh4Ya05qRVuE/1z8k9EWroD07M6evgZ33zNlyZfmIHIbZFj0eBGaFOsiw9G5xLgIirm/cvtu+kzV0LPlwdXe78tY6uS09znFRAnAM8OptQ/z+2BzOWCwTeq1j+NYcmLBjhDeShts71ziRBtcss8uc3AIjq6qAL6LwDWbagJs+GZDQc3au39XVc/AbZMfboUaezJkeh2ne80hBqfSti7bijXbh56nY2+47jXu349+YpkxlLsG1RyOPQK2H+3bdrnTXvtZYI9eTLI1sfbezdfT6t2zx7uIi/KnuRAtNwgZC0CrUzLtydBNO55jCvkmAGGwWEVF5M3RTzVB3+Y4QCcAImQRwExzCjsGKFX9vuoegruRcdE9S5kIBzFxQLaGXSl6AVp0aKm9Fv9eE+vYljBVmxWqECRgq99tLAYVJ+oJT7UlsEecB3+ydTMxDwb50xIK4bnx3/y4XtPPyoT9l8mcsDXPi3umTQHa4loukdmQeMNqfAlTAo45zN/XwRio3FVttAQkh4EGHB8UgNXuovPx7BlLx4l5M0zZf3rlQMFSH4AMbCZYw1ZfamegVAVx8dG2+lI7D8jfu/IIQMfKHb2gS+41qBO4V/V2n1+dP7AiCGo1AAAAAElFTkSuQmCC"
                        width="55"
                        height="68"
                      />
                    </pattern>
                  </defs>
                  <motion.rect
                    x="0"
                    y="0"
                    width="55"
                    height="68"
                    stroke="url(#pattern0_9_27)"
                    stroke-width="80"
                    fill="none"
                    transform="matrix(-1 0 0 1 55 0)"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      transition: { duration: 1, ease: "easeInOut" },
                    }}
                  ></motion.rect>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="68"
                  viewBox="0 0 55 68"
                >
                  <defs>
                    <pattern
                      id="pattern0_9_27"
                      patternUnits="userSpaceOnUse"
                      width="55"
                      height="68"
                    >
                      <image
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABECAYAAAAlba0pAAADtElEQVRoBd2bjVHcMBCFKSEdhBIogRIogRLoADqADkgHpIOUkBIogRKW+y67w97GkiVj2ZY0w9iHT9I+vf03XF0tHCJyLSI/Fk4/1jSAiMiDiPwRkQ/5Gq8APZa0hdIoqMcA6K8C7Zc5EbkVkfcvks73d4XnctyvnQDBlh8vQ9jYCZEHhn3dHpeGCskCMFSyT2cRMauNmSrC2DDAcPXeedxH8N1+Dur42i2QKLhmG561MdQRoCJyb4YmIuOwpuBIqWz0H6S9ahoqvfabUnlQyhoplo33+LzrzyJyZ8jI+LsGE4UPzmRocMOppQ8DH5HZrj+LyI2zOW5/dg3IC6+Vtsf34J93fx8S5uGcClW2H0Pllj6QA/Kpe3X0AESEjpYNCtWh0jAfEgA5XHXgazoArt4YUu9MtxpT2M62Qw8FcID9tnrqus/BK5sJcKXkat/WOIGJnvPN22bNvbIEqNLBYbZlMzgXBHuuAcV3J1oXrIPwHB72zQ/30RRW0ZakvAnBHpMTwgNlzAuN901W+Prege/YaBuKNOf0G7JxEUCYNimVmVlV27z0SgDE+JPCKusOW7nHdSq6TXWSAIjKTYYJ4qNDVhUr3Wuy7epKBehtyOS/ePH4Tdb8y5ffwYzbfkw4GUAC+lwmBbspPv3TIh4Ya05qRVuE/1z8k9EWroD07M6evgZ33zNlyZfmIHIbZFj0eBGaFOsiw9G5xLgIirm/cvtu+kzV0LPlwdXe78tY6uS09znFRAnAM8OptQ/z+2BzOWCwTeq1j+NYcmLBjhDeShts71ziRBtcss8uc3AIjq6qAL6LwDWbagJs+GZDQc3au39XVc/AbZMfboUaezJkeh2ne80hBqfSti7bijXbh56nY2+47jXu349+YpkxlLsG1RyOPQK2H+3bdrnTXvtZYI9eTLI1sfbezdfT6t2zx7uIi/KnuRAtNwgZC0CrUzLtydBNO55jCvkmAGGwWEVF5M3RTzVB3+Y4QCcAImQRwExzCjsGKFX9vuoegruRcdE9S5kIBzFxQLaGXSl6AVp0aKm9Fv9eE+vYljBVmxWqECRgq99tLAYVJ+oJT7UlsEecB3+ydTMxDwb50xIK4bnx3/y4XtPPyoT9l8mcsDXPi3umTQHa4loukdmQeMNqfAlTAo45zN/XwRio3FVttAQkh4EGHB8UgNXuovPx7BlLx4l5M0zZf3rlQMFSH4AMbCZYw1ZfamegVAVx8dG2+lI7D8jfu/IIQMfKHb2gS+41qBO4V/V2n1+dP7AiCGo1AAAAAElFTkSuQmCC"
                        width="55"
                        height="68"
                      />
                    </pattern>
                  </defs>
                  <rect
                    x="1"
                    y="1"
                    width="53"
                    height="66"
                    stroke="url(#pattern0_9_27)"
                    stroke-width="3"
                    fill="none"
                  />
                </svg>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="166"
                  fill="none"
                  viewBox="0 0 43 166"
                >
                  <motion.path
                    fill="#fff"
                    d="M20 164a1 1 0 002 0h-2zM1.442 144.103a1 1 0 10-.884 1.794l.884-1.794zM20.1 165.436a1 1 0 101.8-.872l-1.8.872zm21.842-19.539a1 1 0 00-.884-1.794l.884 1.794zM20.6 164.564a1 1 0 001.8.872l-1.8-.872zM20 0v164h2V0h-2zM.558 145.897c5.295 2.61 8.939 4.976 11.87 7.92 2.93 2.943 5.2 6.515 7.672 11.619l1.8-.872c-2.519-5.201-4.905-8.994-8.055-12.158-3.15-3.163-7.01-5.645-12.403-8.303l-.884 1.794zm40.5-1.794c-5.392 2.658-9.253 5.14-12.403 8.303-3.15 3.164-5.536 6.957-8.055 12.158l1.8.872c2.472-5.104 4.742-8.676 7.672-11.619 2.931-2.944 6.575-5.31 11.87-7.92l-.884-1.794z"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      transition: { duration: 1, ease: "easeInOut" },
                    }}
                  ></motion.path>
                </motion.svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="86"
                  fill="none"
                  viewBox="0 0 56 86"
                >
                  <path
                    fill="#fff"
                    d="M38.94.607a1.5 1.5 0 10-1.114 2.786L38.94.607zm2.178 42.715l-1.037-1.084-.055.053-.05.059 1.142.972zm-26.534 0l1.421-.479-1.421.479zm14.772-2.496l1.232-.855-1.232.855zM1.01 72.7a1.5 1.5 0 00-.138 2.117l8.905 10.146a1.5 1.5 0 002.254-1.978l-7.915-9.02 9.019-7.915a1.5 1.5 0 00-1.979-2.255L1.011 72.7zM37.826 3.393c5.06 2.025 11.47 6.18 13.744 12.41 2.199 6.02.758 14.71-11.489 26.435l2.075 2.167C54.79 32.308 57.18 22.418 54.389 14.773 51.674 7.337 44.275 2.743 38.94.607l-1.114 2.786zm2.15 38.957c-3.024 3.556-8.537 5.283-13.754 5.18-2.58-.051-4.964-.551-6.8-1.408-1.848-.863-2.99-2.009-3.417-3.279l-2.843.957c.78 2.319 2.706 3.973 4.99 5.04 2.298 1.073 5.114 1.632 8.011 1.69 5.737.112 12.283-1.75 16.098-6.237l-2.285-1.943zm-23.97.493c-1.085-3.22-.812-4.864-.34-5.614.413-.658 1.3-1.092 2.91-.97 1.583.12 3.504.774 5.307 1.797 1.804 1.023 3.343 2.33 4.24 3.624l2.465-1.709c-1.226-1.77-3.158-3.353-5.225-4.525-2.068-1.172-4.418-2.017-6.56-2.179-2.114-.16-4.406.344-5.677 2.365-1.212 1.928-1.13 4.704.036 8.168l2.843-.957zm12.117-1.163c3.391 4.893 5.876 13.227 3.193 19.869C28.737 67.932 20.99 73.562 2.098 72.33l-.196 2.993c19.406 1.265 28.893-4.476 32.195-12.652 3.2-7.918.212-17.333-3.509-22.7l-2.465 1.708z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
