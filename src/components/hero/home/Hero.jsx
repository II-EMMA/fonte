"use client";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import OrangeBtn from "@/components/btns/OrangeBtn";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { productCards } from "@/mocks/productCards"; // ✅ import dynamic array
import Link from "next/link";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null); // ✅ ref for image

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // ✅ Animate text/content sliding in
    tl.fromTo(
      contentRef.current,
      { x: 600, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // ✅ Animate image fade + subtle scale for smoothness
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 0.25, scale: 1, duration: 0.5, ease: "power3.out" },
      "<" // run at the same time as content animation
    );
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? productCards.length - 1 : prev - 1));
    setActiveArrow("left");
  };
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === productCards.length - 1 ? 0 : prev + 1));
    setActiveArrow("right");
  };

  return (
    <section className="max-w-[1500px] mx-auto relative h-[750px] bg-dark-gray overflow-hidden shadow-premium-orange-bottom ">
      {/* ✅ dynamic background image with ref */}
      <img
        ref={imageRef}
        src={productCards[activeIndex].src}
        alt={productCards[activeIndex].title}
        className="absolute inset-0 w-full top-[120px] h-[700px] object-cover mix-blend-luminosity"
      />

      <div className="relative z-10 flex flex-col gap-y-10 justify-center w-full items-start md:ml-[150px] mx-9 md:mx-0 h-full text-white font-montserrat">
        {/* Arrows */}
        <div className="flex gap-x-[15px] items-center">
          <div
            onClick={prevSlide}
            className={`w-8 h-8 flex justify-center items-center border-2 rounded-full cursor-pointer ${
              activeArrow === "left"
                ? "border-premium-orange"
                : "border-white/50"
            }`}
          >
            <FaAngleLeft
              className={`size-5 ${
                activeArrow === "left" ? "text-premium-orange" : "text-white/50"
              }`}
            />
          </div>
          <div
            onClick={nextSlide}
            className={`w-8 h-8 flex justify-center items-center border-2 rounded-full cursor-pointer ${
              activeArrow === "right"
                ? "border-premium-orange"
                : "border-white/50"
            }`}
          >
            <FaAngleRight
              className={`size-5 ${
                activeArrow === "right"
                  ? "text-premium-orange"
                  : "text-white/50"
              }`}
            />
          </div>
        </div>

        {/* ✅ Dynamic Slide Content */}
        <div ref={contentRef} className="flex gap-y-10 flex-col">
          <h1 className="font-bold text-[40px]">
            {productCards[activeIndex].title}
          </h1>
          <p className="sm:max-w-[500px] max-w-[300px] font-medium text-xl">
            {productCards[activeIndex].description}
          </p>
        </div>
        <div className="self-start">
          <Link href={`/products/${productCards[activeIndex].id}`}>
            <OrangeBtn>More details</OrangeBtn>
          </Link>
        </div>

        {/* Dots */}
        <div className="flex gap-x-5 items-center">
          {productCards.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                i === activeIndex
                  ? "bg-premium-orange-carousel shadow-premium-orange-carousel"
                  : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
