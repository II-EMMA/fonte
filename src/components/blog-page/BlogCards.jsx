"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation"; // ✅ added for routing
import { blogCards, orderMap } from "@/mocks/blogCards";

gsap.registerPlugin(ScrollTrigger);

export default function BlogCards({ active }) {
  const router = useRouter(); // ✅ router instance
  const order = orderMap[active] || [0, 1, 2];
  const orderedCards = order.map((i) => blogCards[i]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".blog-card").forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Image reveal (center out)
        tl.fromTo(
          card.querySelector("img"),
          { clipPath: "inset(50% 0 50% 0)", opacity: 0 },
          {
            clipPath: "inset(0% 0 0% 0)",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        // Animate texts one by one
        tl.from(
          card.querySelector("h5"),
          { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        );
        tl.from(
          card.querySelector("h4"),
          { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
        tl.from(
          card.querySelector("p:nth-of-type(1)"),
          { y: 30, opacity: 0, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
        tl.from(
          card.querySelector("p:nth-of-type(2)"),
          { y: 30, opacity: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        );
        tl.from(
          card.querySelector("p:nth-of-type(3)"),
          { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" },
          "-=0.1"
        );
      });

      // ✅ Arrow hover animation
      gsap.utils.toArray(".arrow-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            x: 8,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: Infinity,
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { x: 0, duration: 0.3, ease: "power2.inOut" });
        });
      });
    });

    return () => ctx.revert();
  }, [active]);

  const handleClick = (id) => {
    router.push(`/blog/${id}`); // ✅ navigate to blog detail
  };

  return (
    <div className="flex flex-col lg:gap-y-10 gap-y-20 md:mx-0 mx-2.5">
      {orderedCards.map((card, index) => (
        <div
          key={index}
          className="blog-card flex lg:flex-row flex-col xl:gap-x-8 gap-5 items-start overflow-hidden"
        >
          <img
            src={card.src}
            className="w-[400px] h-[250px] object-cover"
            alt={card.alt}
          />
          <div className="flex flex-col gap-y-6.5 max-w-[390px] h-full">
            <h5 className="font-montserrat font-medium text-[12px] text-white">
              {card.category}
            </h5>
            <h4 className="font-bold text-[20px] text-white leading-6">
              {card.title}
            </h4>
            <p className="font-montserrat font-normal text-[12px] text-white/80">
              {card.author}
            </p>
            <p className="font-montserrat font-normal text-[12px] text-white/80">
              {card.description}
            </p>

            {/* ✅ More details with hover + click */}
            <button
              onClick={() => handleClick(card.id)}
              className="text-premium-orange font-gogh flex items-center mt-auto cursor-pointer transform hover:translate-x-4 transition-all duration-400 ease-in-out"
            >
              More details{" "}
              <span className="ml-2">
                <FaAngleRight />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Image reveal: height 0 → full height
// Image reveal: from height 0 (bottom) to full height, width preserved
// From bottom to top
//   tl.from(card.querySelector("img"), {
//     clipPath: "inset(100% 0 0 0)", // hidden from bottom
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   }).to(card.querySelector("img"), {
//     clipPath: "inset(0% 0 0 0)", // fully revealed
//     opacity: 1,
//     duration: 0, // finalize state (no extra time)
//   });
// From top to bottom
//   tl.from(card.querySelector("img"), {
//     clipPath: "inset(0 0 100% 0)", // hidden from top
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   }).to(card.querySelector("img"), {
//     clipPath: "inset(0% 0 0 0)", // fully revealed
//     opacity: 1,
//     duration: 0, // finalize state
//   });
// From center to edges
