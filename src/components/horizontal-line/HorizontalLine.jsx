"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NeonLine({ direction = "left", className }) {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        transformOrigin: direction === "left" ? "left center" : "right center",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          toggleActions: "restart none none none", // 🔑 restart every time
        },
      });

      gsap.from(circleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          toggleActions: "restart none none none", // 🔑 restart every time
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount/route change
  }, [direction]);

  const gradient =
    direction === "left"
      ? "linear-gradient(to right, rgba(0,0,0,0.08) 0%, #FF6600 70%, #FF6600 100%)"
      : "linear-gradient(to left, rgba(0,0,0,0.08) 0%, #FF6600 70%, #FF6600 100%)";

  return (
    <div
      ref={wrapperRef}
      className={`${className} neon-line-wrapper flex w-full`}
    >
      <div
        ref={lineRef}
        className="relative w-2/3 h-[3px] mix-blend-screen neon-line z-30"
        style={{
          backgroundImage: gradient,
          boxShadow: "0 10px 100px 30px rgba(255, 102, 0, 0.15)",
        }}
      >
        <div
          ref={circleRef}
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full neon-circle ${
            direction === "left" ? "right-0" : "left-0"
          }`}
          style={{
            backgroundColor: "#FF6600",
            boxShadow: "0 0 20px rgba(255, 102, 0, 0.9)",
          }}
        />
      </div>
    </div>
  );
}
