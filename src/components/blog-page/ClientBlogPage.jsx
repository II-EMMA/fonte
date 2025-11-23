"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation"; // ✅ routing
import { blogCards } from "@/mocks/blogCards";

gsap.registerPlugin(ScrollTrigger);

export default function ClientBlogPage({ blogId }) {
  const router = useRouter();
  const blogIdNum = parseInt(blogId, 10);
  const blog = blogCards.find((b) => b.id === blogIdNum);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image
      gsap.from(".blog-image", {
        clipPath: "inset(50% 0 50% 0)",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      gsap.from(".blog-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate author
      gsap.from(".blog-author", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-author",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate content paragraphs staggered
      gsap.from(".blog-content p", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".blog-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate related section
      gsap.from(".related-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".related-item",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // ✅ Arrow hover animation
      gsap.utils.toArray(".arrow-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { x: 8, duration: 0.3, ease: "power2.out" });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { x: 0, duration: 0.3, ease: "power2.inOut" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  if (!blog) {
    return (
      <section className="max-w-[1500px] mx-auto flex flex-col px-[300px] lg:pt-[220px] pt-[170px] pb-[100px]">
        <p className="text-white">Blog not found.</p>
      </section>
    );
  }

  const handleClick = (id) => {
    router.push(`/blog/${id}`); // ✅ navigate to blog detail
  };

  return (
    <section className="max-w-[1500px] mx-auto flex flex-col 2xl:px-[300px] xl:px-[220px] lg:px-[120px] md:px-16 px-5 md:pt-[220px] pt-[170px] pb-[100px]">
      {/* Breadcrumb */}
      <p className="font-montserrat text-base">
        <span className="font-medium text-white/80">Blog</span>
        <span className="font-semibold text-white">/ {blog.title}</span>
      </p>

      {/* Title */}
      <p className="blog-title font-montserrat font-bold text-[32px] max-w-[648px] text-white leading-11 mt-8">
        {blog.title}
      </p>

      {/* Author */}
      <p className="blog-author font-medium text-xl font-gogh text-white mt-4">
        {blog.author}
      </p>

      {/* Image */}
      <img
        src={blog.src}
        alt={blog.alt}
        className="blog-image w-[800px] h-[300px] mt-4 object-cover"
      />

      {/* Content paragraphs */}
      <div className="max-w-[800px] blog-content flex flex-col gap-y-4 font-montserrat font-normal text-lg text-white mt-4">
        {blog.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Related section */}
      <div className="flex flex-col mt-20">
        <h5 className="font-montserrat font-bold text-2xl text-white mb-10">
          Interesting on the topic
        </h5>
        <div className="flex sm:flex-row flex-col justify-baseline items-start gap-8">
          {blog.related.map((rel, i) => (
            <div
              key={i}
              className="related-item flex flex-col max-w-[400px] gap-y-[15px]"
            >
              {/* ✅ Title clickable */}
              <button
                onClick={() => handleClick(rel.id)}
                className="text-left font-montserrat font-bold text-xl text-white hover:text-premium-orange transition-colors"
              >
                {rel.title}
              </button>

              {/* ✅ More details with hover + click */}
              <button
                onClick={() => handleClick(rel.id)}
                className="text-premium-orange font-gogh flex items-center mt-auto text-[12px] cursor-pointer transform hover:translate-x-4 transition-all duration-400 ease-in-out"
              >
                More details{" "}
                <span className="ml-2 arrow-icon">
                  <FaAngleRight />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
