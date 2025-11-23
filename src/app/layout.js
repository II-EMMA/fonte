import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/hero/header/Header";
import Footer from "@/components/footer/Footer";
import Info from "@/components/info/Info";

const montserratSans = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gogh = localFont({
  src: [
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-black-1.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-blackitalic-1.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-bold-1.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-bolditalic-1.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-book-1.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-bookitalic-1.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-extrabold-1.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-extrabolditalic-1.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-hairline-1.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-hairlineitalic-1.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-heavy-1.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-heavyitalic-1.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-light-1.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-lightitalic-1.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-mediumitalic-1.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-regular-1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-regularitalic-1.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-thin-1.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-gogh-thinitalic-1.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-goghvariableitalicvf-1.ttf",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "../fonts/gogh/fonts/fonnts.com-goghvariablevf-1.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-gogh",
  display: "swap",
});

export const metadata = {
  title: "Fonte",
  description: "Next.js + TailwindCSS + GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserratSans.variable} ${gogh.variable} bg-dark-gray`}
      >
        <Header />
        {children}
        <Info />
        <Footer />
      </body>
    </html>
  );
}
