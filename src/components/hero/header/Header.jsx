"use client";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import OrangeBtn from "@/components/btns/OrangeBtn";
import Logo from "@/components/texts/Logo";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle((prev) => !prev);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".header-nav li", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
      });

      gsap.from(".header-buttons button", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className="fixed full-bleed top-0 left-0 right-0 z-50 bg-dark-gray max-w-[1500px] mx-auto py-10 md:px-20 px-10 flex justify-between items-center text-white">
        <Logo TextColor="text-white" />

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="header-nav flex items-center gap-x-[47px] font-montserrat text-sm font-medium">
            <li>
              <Link href="/#about-us">About Us</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-x-5">
          <OrangeBtn>Login</OrangeBtn>
          <button className="text-sm font-montserrat font-medium underline underline-offset-2 cursor-pointer">
            EN
          </button>
        </div>

        {/* ✅ Mobile toggle button only rendered below lg */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`menu ${toggle ? "opened" : ""}`}
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1 fill-white"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2 fill-white" d="M 20,50 H 80" />
              <path
                className="line line3 fill-white"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark-gray flex flex-col items-center pt-38 lg:hidden
          transition-all ease-in-out duration-300
          ${!toggle ? "translate-x-full" : "translate-x-0"}
        `}
      >
        <nav>
          <ul className="flex flex-col gap-y-6 text-white text-xl font-montserrat text-center">
            <li>
              <Link href="/#about-us" onClick={() => setToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#team" onClick={() => setToggle(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setToggle(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={() => setToggle(false)}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-10 flex items-center gap-x-4">
          <OrangeBtn>Login</OrangeBtn>
          <button className="text-white underline">EN</button>
        </div>
      </div>
    </>
  );
}
