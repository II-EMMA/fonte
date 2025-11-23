import Triangle from "@/assets/icons/triangle.svg";
import GrayTriangle from "@/assets/icons/gray-triangle.svg";
import Link from "next/link";
export default function Logo({ TextColor }) {
  return (
    <Link href="/" className="self-start">
      <h1
        className={`${TextColor} header-title relative font-gogh font-bold tracking-wide text-[26px]`}
      >
        Fonte
        <img
          src={TextColor === "text-white" ? Triangle.src : GrayTriangle.src}
          className="absolute -top-px -right-3.5 h-3 w-[30px]"
          alt="Triangle"
        />
      </h1>
    </Link>
  );
}
