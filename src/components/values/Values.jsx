import NeonLine from "../horizontal-line/HorizontalLine";
import Title from "../texts/Title";
import ValueCard from "./ValueCard";

export default function Values() {
  return (
    <>
      <section className="bg-dark-gray max-w-[1500px] mx-auto 2xl:px-[150px] py-20 flex flex-col">
        <div className="self-start 2xl:px-0 xl:px-[150px] lg:px-[100px] px-10 xl:mx-0">
          <Title className="-top-1.5 -right-4.5">Values</Title>
        </div>
        <div className="grid lg:grid-cols-2 2xl:gap-20 xl:gap-16 lg:gap-x-0 lg:gap-y-8 gap-y-24 my-20 xl:px-[150px] lg:px-14 px-5 2xl:px-0">
          <ValueCard />
        </div>
      </section>
      <div className="bg-dark-gray max-w-[1500px] mx-auto">
        <NeonLine className={"pb-14 justify-end"} direction="right" />
      </div>
    </>
  );
}
