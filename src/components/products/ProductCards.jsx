"use client";
import { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DefaultImageFilter from "@/assets/images/default-image-filter.png";
import DefaultImageFilterSM from "@/assets/images/default-image-filter-sm.png";
import ActiveImageFilter from "@/assets/images/active-image-filter.png";
import ActiveImageFilterSM from "@/assets/images/active-image-filter-sm.png";
import OrangeBtn from "../btns/OrangeBtn";
import { productCards, orderMap } from "@/mocks/productCards";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProductCards({ active }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // ✅ Animate cards one by one on scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // appear one by one
        scrollTrigger: {
          trigger: ".product-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [active]);

  // ✅ Click animation for active card
  useLayoutEffect(() => {
    if (activeIndex !== null) {
      const textBlock = document.querySelector(`#card-text-${activeIndex}`);
      if (textBlock) {
        const tl = gsap.timeline();
        tl.from(textBlock.querySelector("h4"), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
        tl.from(
          textBlock.querySelector("p"),
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );
        tl.from(
          textBlock.querySelector("button"),
          { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }
    }
  }, [activeIndex]);

  // ✅ Apply order based on active
  const order = orderMap[active] || [0, 1, 2, 3, 4];
  const orderedCards = order.map((i) => productCards[i]);

  return (
    <div className="flex flex-col md:gap-y-10 gap-y-6 mb-40">
      {orderedCards.map((card, i) => {
        const isActive = activeIndex === i;
        const blendClass = isActive ? "" : "mix-blend-luminosity";
        const filterMd = isActive ? ActiveImageFilter : DefaultImageFilter;
        const filterSm = isActive ? ActiveImageFilterSM : DefaultImageFilterSM;

        return (
          <div
            key={card.id}
            onClick={() => setActiveIndex(i)}
            className={`product-card relative flex justify-between ${
              isActive ? "bg-[#434148]" : "bg-[#272628]"
            } md:h-[280px] h-[365px] cursor-pointer`}
          >
            {/* Left content */}
            <div
              id={`card-text-${i}`}
              className="product-card-text z-10 flex flex-col gap-y-5 max-w-[500px] font-montserrat md:my-11 md:mx-12 m-8"
            >
              <h4 className="font-semibold text-2xl text-white">
                {card.title}
              </h4>
              <p className="text-base text-white/70 font-normal max-w-[550px]">
                {card.description}
              </p>
              <div className="self-start md:mt-auto">
                <Link href={`/products/${card.id}`}>
                  <OrangeBtn>More details</OrangeBtn>
                </Link>
              </div>
            </div>

            {/* Image container with filter */}
            <div
              id={`card-image-${i}`}
              className="absolute right-0 top-0 md:w-[600px] w-full md:h-[280px] h-[365px]"
            >
              <img
                src={card.src}
                alt={card.title}
                className={`w-full h-full object-cover ${blendClass}`}
              />
              <img
                src={filterMd.src}
                alt={`${card.title} Filter`}
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none md:block hidden"
              />
              <img
                src={filterSm.src}
                alt={`${card.title} Filter`}
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none md:hidden block"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
