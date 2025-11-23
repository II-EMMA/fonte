import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import CTAPage from "@/components/cta/CTA";
import Hero from "@/components/hero/home/Hero";
import Team from "@/components/team/Team";
import Values from "@/components/values/Values";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Values />
      <Team />
      <Blog />
      <CTAPage />
    </main>
  );
}
