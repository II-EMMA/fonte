import CTA from "@/assets/images/cta-bg.svg";
import OrangeBtn from "../btns/OrangeBtn";

export default function CTAPage() {
  return (
    <section className="bg-secondary-dark-gray full-bleed-secondary-dark-gray max-w-[1500px] mx-auto flex md:flex-row flex-col-reverse gap-x-12 justify-between lg:px-[150px] md:px-9 items-center">
      <div className="flex flex-col gap-y-2.5 md:w-full sm:w-3/5 w-[70%] md:mt-0 mt-2">
        <input
          type="text"
          placeholder="What should i call you"
          className="w-full py-4.5 pl-5 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
        />
        <div className="w-full flex items-center md:flex-row flex-col md:gap-x-2.5 gap-y-2.5 md:gap-y-0">
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full py-4.5 pl-5 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Your password..."
            className="w-full py-4.5 pl-5 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
          />
        </div>
        <textarea
          placeholder="Your message..."
          className="w-full h-[17 0px] py-4.5 pl-5 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
        />
        <div className="md:self-center md:mt-2.5 mt-5 md:mb-0 mb-7">
          <OrangeBtn>Get a consultation</OrangeBtn>
        </div>
      </div>
      <img
        src={CTA.src}
        alt="CTA background"
        className="md:w-auto md:h-auto sm:w-3/5 w-[70%] h-1/12 flex-1 object-cover"
      />
    </section>
  );
}
