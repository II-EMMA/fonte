"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ProductCards from "@/components/products/ProductCards";
import Title from "@/components/texts/Title";

export default function Page() {
  const [active, setActive] = useState(2); // default index 2 = number 3
  const underlineRef = useRef(null);

  useEffect(() => {
    const activeEl = document.getElementById(`product-nav-${active}`);
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
    <section className="max-w-[1500px] mx-auto flex flex-col 2xl:px-[210px] xl:px-[180px] lg:px-[100px] md:px-5 px-2.5 lg:pt-[220px] pt-[170px] pb-[100px]">
      <div className="self-start text-white mb-24">
        <Title className="-top-1 -right-4.5">Products</Title>
      </div>

      <ProductCards active={active} />

      <h4 className="font-normal text-[20px] text-white/50 -mt-28">
        <span className="text-premium-orange">*</span>
        during registration proces
      </h4>

      {/* Pagination with underline animation */}
      <div className="relative mt-[50px] self-center">
        <ul className="flex items-center gap-x-[18px] font-montserrat text-base font-bold relative">
          {[...Array(5)].map((_, i) => (
            <li
              key={i}
              id={`product-nav-${i}`}
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
