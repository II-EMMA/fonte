"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ children, className = "" }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 40, // slide up from bottom
        opacity: 0, // fade in
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount/route change
  }, []);

  return (
    <p ref={textRef} className={className}>
      {children}
    </p>
  );
}
