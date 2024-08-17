import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="relative h-[500px] bg-card rounded-[1.25rem]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh] ">
        <div className="h-[500px] sticky container top-[calc(100vh-500px)]">
          <div className="grid grid-cols-4 pt-10">
            <div>
              <div className="flex items-end justify-start pl-3 mb-4">
                <Image src="/logo.svg" alt="Logo" width="70" height="60" />
                <Image
                  src="/logo-title.svg"
                  alt="Logo"
                  width="101"
                  height="60"
                />
              </div>
              <p className="text-white text-sm">
                {`There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, `}
              </p>
            </div>
          </div>
          <div className=" bg-card-foregrounddark p-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
