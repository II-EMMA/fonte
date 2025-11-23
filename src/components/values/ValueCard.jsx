"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jewel from "@/assets/icons/jewel.svg";
import Sustainability from "@/assets/icons/sustainability.svg";
import Team from "@/assets/icons/team.svg";
import Reputation from "@/assets/icons/reputation.svg";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    src: Jewel.src,
    alt: "Jewel",
    title: "Stability",
    description:
      "Preserving clients' capital is a priority over profitability - every decision is weighed, considered, and evaluated.",
    width: 326,
  },
  {
    src: Sustainability.src,
    alt: "Sustainability",
    title: "Sustainability",
    description:
      "Sustainability is at the core of our business model. This begins with identifying and evaluating emerging business opportunities, continuing with the consistent development of our projects and the deployment of capital into new opportunities.",
    width: 450,
  },
  {
    src: Team.src,
    alt: "Team",
    title: "Team",
    description:
      "The Fonte Capital LTD team is the foundation of our success. Every employee is a valuable asset to the fund's operations. Our goal is to create a working environment and conditions that maximize the potential of each employee to achieve maximum results.",
    width: 450,
  },
  {
    src: Reputation.src,
    alt: "Reputation",
    title: "Reputation",
    description:
      "Responsibility and ethics are at the core of our business. Adherence to best practices (Corporate Code of Ethics and Standards of Professional Conduct) allows us to offer clients higher-quality investment products that meet the high demands and expectations of even the most discerning clients.",
    width: 450,
  },
];

export default function ValueCard() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".value-card").forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate the whole card container
        tl.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        // Animate the text elements one by one from bottom
        tl.from(
          card.querySelector("h3"),
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

        tl.from(
          card.querySelector("p"),
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount/route change
  }, []);

  return (
    <>
      {values.map((value, index) => (
        <div
          key={index}
          className="value-card flex sm:gap-x-8 gap-x-4 items-start"
        >
          <img
            src={value.src}
            alt={value.alt}
            className="sm:w-auto sm:h-auto w-32 h-32"
          />
          <div className="flex flex-col sm:gap-y-5 gap-y-3 font-montserrat">
            <h3 className="font-medium sm:text-2xl text-xl text-white capitalize">
              {value.title}
            </h3>
            <p
              className="font-normal sm:text-sm text-[12px] text-white/50"
              style={{ maxWidth: `${value.width}px` }}
            >
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
