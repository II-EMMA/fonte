"use client";
import { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Title from "../texts/Title";
import BlogCards from "./BlogCards";
import gsap from "gsap";

export default function Blog() {
  const [active, setActive] = useState(0); // track active card index
  const cardsRef = useRef(null);

  // Helper: get card width dynamically
  const getCardWidth = () => {
    if (!cardsRef.current) return 0;
    const firstCard = cardsRef.current.querySelector("div");
    return firstCard ? firstCard.offsetWidth + 32 : 0; // card width + gap
  };

  // Scroll by arrows
  const scrollLeft = () => {
    const cardWidth = getCardWidth();
    cardsRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setActive((prev) => Math.max(prev - 1, 0));
  };
  const scrollRight = () => {
    const cardWidth = getCardWidth();
    cardsRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
    setActive((prev) => Math.min(prev + 1, 8)); // 9 cards total
  };

  // Scroll by number click
  const scrollToIndex = (index) => {
    const cardWidth = getCardWidth();
    cardsRef.current?.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActive(index);
  };

  // Mouse drag logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - cardsRef.current.offsetLeft;
    scrollLeftPos.current = cardsRef.current.scrollLeft;
  };
  const onMouseLeave = () => (isDown.current = false);
  const onMouseUp = () => (isDown.current = false);
  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - cardsRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    cardsRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  // GSAP glow animation for active number
  useEffect(() => {
    // kill any previous tweens
    gsap.killTweensOf("span");

    // reset all numbers to no shadow
    gsap.set("span", { textShadow: "none" });

    // animate only the active one
    const el = document.getElementById(`page-${active}`);
    if (el) {
      gsap.fromTo(
        el,
        { textShadow: "0 0 0px var(--color-premium-orange)" },
        {
          textShadow: "0 0 20px var(--color-premium-orange)",
          duration: 0,
          ease: "power2.out",
        }
      );
    }
  }, [active]);

  return (
    <section className="bg-dark-gray max-w-[1500px] mx-auto lg:px-[150px] md:px-20 px-5 flex flex-col mb-16">
      <div className="self-start">
        <Title className="-top-1.5 -right-4">Company blog</Title>
      </div>
      <div className="flex items-center mt-16 justify-between">
        {/* Left arrow */}
        <div
          onClick={scrollLeft}
          className={`mb-24 w-8 h-8 flex justify-center items-center border-2 rounded-full cursor-pointer ${
            active === 0 ? "border-white/50" : "border-premium-orange"
          }`}
        >
          <FaAngleLeft
            className={`size-5 ${
              active === 0 ? "text-white/50" : "text-premium-orange"
            }`}
          />
        </div>

        {/* BlogCards with drag handlers */}
        <BlogCards
          ref={cardsRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        />

        {/* Right arrow */}
        <div
          onClick={scrollRight}
          className={`mb-24 w-8 h-8 flex justify-center items-center border-2 rounded-full cursor-pointer ${
            active === 8 ? "border-white/50" : "border-premium-orange"
          }`}
        >
          <FaAngleRight
            className={`size-5 ${
              active === 8 ? "text-white/50" : "text-premium-orange"
            }`}
          />
        </div>
      </div>

      {/* Numbers */}
      <div className="flex gap-x-4.5 items-center self-center mt-10">
        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            id={`page-${i}`}
            onClick={() => scrollToIndex(i)}
            className={`font-montserrat font-bold cursor-pointer ${
              active === i
                ? "text-premium-orange text-shadow-premium-orange text-2xl"
                : "text-white/25 text-base"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </section>
  );
}
