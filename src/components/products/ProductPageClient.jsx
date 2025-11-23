"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/components/texts/Title";
import Certificate from "@/assets/images/certificate.svg";
import CV from "@/assets/images/cv.svg";
import { FaFileLines } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { productCards } from "@/mocks/productCards";
import CTAPage from "../cta/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPageClient({ productId }) {
  const product = productCards.find((p) => p.id === parseInt(productId, 10));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image
      gsap.from(".product-image", {
        clipPath: "inset(50% 0 50% 0)",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      gsap.from(".product-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate breadcrumb
      gsap.from(".product-breadcrumb", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-breadcrumb",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate content paragraphs staggered
      gsap.from(".product-content p", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".product-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate documents section
      gsap.from(".document-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".document-item",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate licenses section
      gsap.from(".license-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".license-item",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (!product) {
    return (
      <section className="overflow-x-hidden max-w-[1500px] mx-auto flex flex-col 2xl:px-[250px] xl:px-[150px] lg:pt-[220px] pt-[170px] pb-[100px]">
        <p className="text-white text-xl">Product not found.</p>
      </section>
    );
  }

  return (
    <>
      <section className="overflow-x-hidden max-w-[1500px] mx-auto flex flex-col 2xl:px-[250px] xl:px-[150px] lg:px-[78px] px-4 lg:pt-[220px] pt-[170px] pb-[100px]">
        <p className="product-breadcrumb font-montserrat text-white text-base capitalize mb-[30px]">
          <span className="font-medium">Products</span>
          <span className="font-semibold"> / {product.title}</span>
        </p>

        <div className="self-start text-white mb-[50px]">
          <Title className="product-title -top-2.5 -right-3.5">
            {product.title}
          </Title>
        </div>

        <div className="flex flex-col gap-y-[30px]">
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 lg:items-start items-center xl:gap-x-[50px] lg:gap-x-10">
            <img
              src={product.src}
              alt={product.title}
              className="product-image lg:w-[400px] w-full lg:h-[300px] md:h-[500px] h-[300px] object-cover mix-blend-luminosity"
            />
            <p className="lg:max-w-[500px] font-montserrat font-normal sm:text-xl text-lg text-white">
              {product.content[0]}
            </p>
          </div>

          <div className="product-content flex flex-col gap-y-5 font-montserrat font-normal sm:text-xl text-lg text-white">
            <p>{product.content[1]}</p>
            <p>{product.content[2]}</p>
          </div>
        </div>

        <h4 className="font-montserrat font-semibold text-2xl text-white mt-[50px]">
          Documents
        </h4>
        <div className="flex gap-5 sm:flex-row flex-col sm:items-center items-start mt-5">
          <div className="document-item bg-[#272628] w-[280px] h-[70px] p-5 flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <FaFileLines className="size-5 mr-2.5 text-white" />
              <div className="flex flex-col gap-y-0.5 font-montserrat">
                <h6 className="font-bold text-[12px] text-white ">
                  Document 1
                </h6>
                <p className="font-normal text-[8px] text-white">Size 5mb</p>
              </div>
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#5C5A63] rounded-full">
              <FaArrowDown className="size-[9px] text-white" />
            </div>
          </div>
          <div className="document-item bg-[#272628] w-[280px] h-[70px] p-5 flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <FaFileLines className="size-5 mr-2.5 text-white" />
              <div className="flex flex-col gap-y-0.5 font-montserrat">
                <h6 className="font-bold text-[12px] text-white ">
                  Document 2
                </h6>
                <p className="font-normal text-[8px] text-white">Size 3.5mb</p>
              </div>
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#5C5A63] rounded-full">
              <FaArrowDown className="size-[9px] text-white" />
            </div>
          </div>
        </div>

        <h4 className="font-montserrat font-semibold text-2xl text-white mt-[50px]">
          Licenses
        </h4>
        <div className="flex sm:flex-row flex-col items-start gap-5 sm:mt-5 mt-10">
          <div className="license-item flex flex-col gap-y-2.5">
            <img
              src={Certificate.src}
              alt="Certificate"
              className="w-[200px] h-[284px]"
            />
            <p className="font-montserrat font-semibold text-lg text-white">
              Certificate
            </p>
          </div>
          <div className="license-item flex flex-col gap-y-2.5 sm:-mt-7 sm:ml-0 -ml-7">
            <img src={CV.src} alt="Certificate" />
            <p className="font-montserrat font-semibold text-lg text-white ml-7 -mt-8">
              CV
            </p>
          </div>
        </div>
      </section>
      <div className="md:mt-32 sm:mt-24 mt-20">
        <CTAPage />
      </div>
    </>
  );
}
