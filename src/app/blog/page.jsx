"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import BlogCards from "@/components/blog-page/BlogCards";
import Title from "@/components/texts/Title";

export default function Page() {
  const [active, setActive] = useState(4); // index 4 = number 5
  const underlineRef = useRef(null);

  useEffect(() => {
    const activeEl = document.getElementById(`nav-${active}`);
    if (activeEl && underlineRef.current) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect = activeEl.parentNode.getBoundingClientRect();
      gsap.to(underlineRef.current, {
        x: rect.left - parentRect.left,
        width: rect.width,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    // ✅ Smooth scroll to top whenever active changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <section className="overflow-x-hidden max-w-[1500px] mx-auto flex flex-col gap-y-12 items-center 2xl:px-[300px] xl:px-[175px] lg:px-[105px] lg:pt-[220px] pt-[170px] pb-[100px]">
      <div className="self-start lg:mx-0 mx-10">
        <Title className="-top-1.5 -right-4">blog</Title>
      </div>
      <BlogCards active={active} />
      <div className="relative">
        <ul className="flex items-center gap-x-[18px] font-montserrat text-base font-bold relative">
          {[...Array(9)].map((_, i) => (
            <li
              key={i}
              id={`nav-${i}`}
              onClick={() => setActive(i)}
              className={`cursor-pointer ${
                active === i ? "text-white" : "text-white/50"
              }`}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-0.5 bg-white"
          style={{ width: 0, transform: "translateX(0px)" }}
        />
      </div>
    </section>
  );
}
