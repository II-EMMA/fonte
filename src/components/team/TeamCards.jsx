"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmployeeOne from "@/assets/images/employee-1.svg";
import EmployeeTwo from "@/assets/images/employee-2.svg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    src: EmployeeOne.src,
    alt: "Employee One",
    name: "Yerzhan Musin",
    jobTitle: "CEO",
  },
  {
    src: EmployeeTwo.src,
    alt: "Employee Two",
    name: "Olzhas Ukenov",
    jobTitle: "CFO",
  },
  {
    src: EmployeeOne.src,
    alt: "Employee One",
    name: "Yerzhan Musin",
    jobTitle: "CEO",
  },
  {
    src: EmployeeTwo.src,
    alt: "Employee Two",
    name: "Olzhas Ukenov",
    jobTitle: "CFO",
  },
  {
    src: EmployeeOne.src,
    alt: "Employee One",
    name: "Yerzhan Musin",
    jobTitle: "CEO",
  },
  {
    src: EmployeeTwo.src,
    alt: "Employee Two",
    name: "Olzhas Ukenov",
    jobTitle: "CFO",
  },
];

export default function TeamCards() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".team-card").forEach((card) => {
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
          duration: 0.8,
          ease: "power3.out",
        });

        // Animate the image
        tl.from(
          card.querySelector("img"),
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

        // Animate the name
        tl.from(
          card.querySelector("h4"),
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );

        // Animate the job title
        tl.from(
          card.querySelector("p"),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount/route change
  }, []);

  return (
    <div className="mt-20 flex justify-between gap-2 flex-wrap lg:mx-0 mx-auto">
      {team.map((member, index) => (
        <div
          key={index}
          className="team-card flex flex-col items-center text-center gap-y-3 font-montserrat text-base lg:mx-0 mx-auto"
        >
          <div>
            <img src={member.src} alt={member.alt} className="grayscale-100" />
          </div>
          <div className="flex items-center text-center flex-col">
            <h4 className="font-bold text-white">{member.name}</h4>
            <p className="font-medium text-white/80">{member.jobTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
