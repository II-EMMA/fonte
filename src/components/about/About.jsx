"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeBtn from "../btns/OrangeBtn";
import Title from "../texts/Title";
import AboutSectionImage from "@/assets/images/about-section.svg";
import { FaFileLines } from "react-icons/fa6";
import NeonLine from "../horizontal-line/HorizontalLine";

gsap.registerPlugin(ScrollTrigger);

const scripts = [
  "Our team successfully operates across several investment markets. The wide range of instruments available in these markets allows us to successfully preserve and grow our clients' capital.",
  "Both professional investors and private individuals who are just beginning to explore new opportunities can enter into a partnership with Fonte. Our jurisdiction is the Astana International Financial Centre (AIFC). Favorable tax conditions and regulatory policies provide the necessary freedoms and advantages for achieving investment goals.",
  "In partnership with Fonte Capital LTD, investors have the opportunity to take advantage of not only proven strategies but also collaborate to develop personalized investment solutions.",
];

export default function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs one by one
      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate button
      gsap.from(".about-btn", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-btn",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image from the left
      gsap.from(".about-image", {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount/route change
  }, []);

  return (
    <>
      <section
        id="about-us"
        className="bg-dark-gray max-w-[1500px] mx-auto flex flex-col gap-y-8 py-[75px] 2xl:px-[150px] xl:px-[120px] lg:px-[45px] "
      >
        <div className="self-start lg:ml-0 md:ml-40 ml-11">
          <Title className="-top-1.5 -right-4">About</Title>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-x-12 lg:items-start items-center lg:gap-y-0 gap-y-7 text-start">
          <img
            src={AboutSectionImage.src}
            alt="About Section"
            className="about-image mix-blend-luminosity lg:w-auto md:w-3/5 w-4/5 rounded-2xl lg:rounded-none"
          />
          <div className="flex flex-col gap-y-5 lg:max-w-[700px] max-w-4/5 font-normal">
            {scripts.map((script, index) => (
              <p
                key={index}
                className="about-text text-white/90 font-montserrat sm:text-[17px] text-sm"
              >
                {script}
              </p>
            ))}
            <div className="md:self-start  about-btn">
              <OrangeBtn>
                <FaFileLines className="size-5 mr-2.5" /> Licenses
              </OrangeBtn>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-dark-gray max-w-[1500px] mx-auto">
        <NeonLine className={"py-14 justify-start"} direction="left" />
      </div>
    </>
  );
}
