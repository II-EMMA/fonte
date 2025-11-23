"use client";
import { forwardRef, useLayoutEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { blogCards } from "@/mocks/blogCards";

const minimalCards = blogCards.map((card) => ({
  id: card.id,
  src: card.src,
  alt: card.alt,
  description: card.title || card.description,
}));

const repeatedCards = Array.from({ length: 3 }, () => minimalCards).flat();

const BlogCards = forwardRef(function BlogCards(props, ref) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      ref={ref}
      {...props}
      className="
        flex w-full mx-5 overflow-hidden
        gap-8 items-stretch scroll-smooth
        cursor-grab active:cursor-grabbing
        snap-x snap-mandatory
      "
    >
      {repeatedCards.map((card, index) => (
        <div
          key={index}
          className="
            flex flex-col gap-y-5 font-monteserrat shrink-0
            w-full max-w-full
            lg:min-w-[351px] lg:max-w-[351px]
            snap-center
          "
        >
          <img
            src={card.src}
            alt={card.alt}
            className="lg:w-[320px] h-[230px] object-cover w-4/5 mx-auto"
          />
          <h5 className="text-white font-medium text-xl lg:max-w-[351px] lg:mx-0 mx-auto lg:text-start text-center">
            {card.description}
          </h5>

          {/* More details link */}
          <button
            onClick={() => handleClick(card.id)}
            className="text-premium-orange font-gogh flex items-center mt-auto transform hover:translate-x-4 transition-all duration-400 ease-in-out cursor-pointer"
          >
            More details{" "}
            <span className="ml-2">
              <FaAngleRight />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
});

export default BlogCards;
