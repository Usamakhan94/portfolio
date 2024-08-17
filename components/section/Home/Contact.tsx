import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <div className="grid grid-cols-2 items-center   ">
          <div className="flex justify-end">
            <Image
              src="/contact-img.png"
              className="max-h-[39.5rem]"
              width="555"
              height="100"
              alt=""
            />
          </div>
          <div className="bg-card py-20 px-14 rounded-[0.9375rem] rounded-tl-none rounded-bl-none relative before:absolute before:h-full before:w-32 before:rounded-[0.9375rem] before:bg-card before:top-0 before:-left-28 before:-z-10 before:rounded-tr-none before:rounded-br-none">
            <h3 className="text-h3 font-bold">Get in Touch</h3>
            <form action="" className="flex flex-col gap-5">
              <label htmlFor="" className="relative custom_label">
                <input
                  className="w-full bg-input h-16 rounded-[13px] shadow-none outline-none px-4 mt-5"
                  type="text"
                />
                <span className="absolute z-10 font-medium">Name</span>
              </label>
              <label htmlFor="" className="relative custom_label">
                <input
                  className="w-full bg-input h-16 rounded-[13px] shadow-none outline-none px-4 mt-5"
                  type="text"
                />
                <span className="absolute z-10 font-medium">Email</span>
              </label>
              <label htmlFor="" className="relative custom_label">
                <textarea
                  className="w-full bg-input rounded-[13px] h-[9.375rem] resize-none shadow-none outline-none px-4 pt-4 mt-5"
                  name=""
                  id=""
                ></textarea>
                <span className="absolute z-10 font-medium">Message</span>
              </label>
              <button className="h-[4.0625rem] rounded-[13px] text-lg gradient_bg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
