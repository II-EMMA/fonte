import NeonLine from "../horizontal-line/HorizontalLine";
import Title from "../texts/Title";
import AnimatedText from "./TeamAnimatedText";
import TeamCards from "./TeamCards";

export default function Team() {
  return (
    <>
      <section
        id="team"
        className="bg-dark-gray max-w-[1500px] mx-auto flex flex-col my-16 lg:px-[150px] md:px-5 px-2"
      >
        <div className="self-start lg:mx-0 mx-10">
          <Title className="-top-1.5 -right-2">Our Team</Title>
        </div>

        <AnimatedText className="max-w-[840px] font-montserrat text-white/50 font-medium text-base mt-10 lg:mx-0 mx-10">
          The Fonte Capital LTD team is the foundation of our success. Every
          employee is a valuable asset to the fund's operations. Our goal is to
          create a working environment and conditions that maximize the
          potential of each employee to achieve maximum results.
        </AnimatedText>

        <TeamCards />

        <div className="self-start mt-20 lg:mx-0 mx-auto">
          <Title className="-top-1.5 -right-2">Supporters and Partners</Title>
        </div>

        <div className="flex sm:gap-x-12 sm:gap-y-0 gap-y-4 sm:flex-row sm:text-start text-center flex-col font-montserrat text-white/50 font-normal text-[28px] mt-12 lg:mx-0 mx-auto">
          <AnimatedText>SeedBox</AnimatedText>
          <AnimatedText>Freedom Finance</AnimatedText>
        </div>
      </section>

      <div className="bg-dark-gray max-w-[1500px] mx-auto">
        <NeonLine className={"py-28 justify-start"} direction="left" />
      </div>
    </>
  );
}
