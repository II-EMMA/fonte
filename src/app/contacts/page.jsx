import OrangeBtn from "@/components/btns/OrangeBtn";
import Title from "@/components/texts/Title";

export default function page() {
  return (
    <section className="overflow-x-hidden max-w-[1500px] mx-auto flex flex-col gap-y-24 2xl:px-[300px] xl:px-[175px] lg:px-20 px-10 lg:pt-[220px] pt-[170px] pb-[100px]">
      <div className="flex gap-14 lg:flex-row flex-col items-start">
        <div className="flex flex-col gap-y-[70px]">
          <div className="self-start text-white  -mb-8">
            <Title className="-top-1 -right-4.5">Contacts</Title>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-y-0.5 flex-col font-montserrat text-xl">
              <h4 className="font-semibold text-white">Ask us any question</h4>
              <p className="font-normal text-white/50">+7 701 776 24 20</p>
            </div>
            <div className="flex gap-y-0.5 flex-col font-montserrat text-xl">
              <h4 className="font-semibold text-white">Email</h4>
              <p className="font-normal text-white/50">client@fonte.kz</p>
            </div>
            <div className="flex gap-y-0.5 flex-col font-montserrat text-xl">
              <h4 className="font-semibold text-white">Legal address</h4>
              <p className="font-normal text-white/50 ">
                050040/A15E3H4, Al-Farabi Avenue, 77/7, 10th floor, Almaty,
                Kazakhstan Z05T3D0, Mangilik El Avenue, 55/20, Offices 345-346,
                Astana, Kazakhstan
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 w-full">
          <input
            type="text"
            placeholder="What should i call you"
            className="w-full py-4.5 pl-4 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-secondary-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full py-4.5 pl-4 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-secondary-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Your Phone..."
            className="w-full py-4.5 pl-4 placeholder:text-white text-white placeholder:font-montserrat font-montserrat placeholder:text-base text-base placeholder:font-medium font-medium placeholder:text-[12px] text-[12px] bg-secondary-dark-gray outline-none border-premium-orange-focus border border-transparent bg-premium-orange-focus text-shadow-amber-50 transition-all duration-300"
          />

          <div className="flex-1 mt-2.5">
            <OrangeBtn>Get a consultation</OrangeBtn>
          </div>
        </div>
      </div>
      <div className="self-center flex gap-[50px] xl:flex-row flex-col items-start w-full">
        <div className="flex flex-col gap-y-[15px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320668.45270979754!2d71.50148345000001!3d51.1043588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb19228!2z2KLYs9iq2KfZhtin2Iwg2YPYp9iy2KfYrtiz2KrYp9mG!5e0!3m2!1sar!2seg!4v1763490286345!5m2!1sar!2seg"
            style={{ border: 0, height: "300px" }} // ✅ React style object
            allowFullScreen // ✅ camelCase
            loading="lazy"
            className="flex-1 w-full min-h-[300px] shrink-0 mix-blend-luminosity hover:mix-blend-normal duration-300 transition-all focus:mix-blend-normal"
            referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
          ></iframe>
          <p className="font-montserrat font-medium text-base text-white capitalize">
            Astana
          </p>
        </div>

        <div className="flex flex-col gap-y-[15px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186085.0994370431!2d76.9525157!3d43.2183046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z2KfZhNmF2KfYqtmK2Iwg2YPYp9iy2KfYrtiz2KrYp9mG!5e0!3m2!1sar!2seg!4v1763490460323!5m2!1sar!2seg"
            style={{ border: 0, height: "300px" }} // ✅ React style object
            allowFullScreen
            loading="lazy"
            className="flex-1 w-full min-h-[300px] shrink-0 mix-blend-luminosity hover:mix-blend-normal duration-300 transition-all focus:mix-blend-normal"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="font-montserrat font-medium text-base text-white">
            Almaty
          </p>
        </div>
      </div>
    </section>
  );
}
