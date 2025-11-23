import Triangle from "@/assets/icons/triangle.svg";
export default function Title({ children, className }) {
  return (
    <h2 className="text-white font-montserrat header-title relative font-gogh font-bold tracking-wide text-2xl">
      {children}
      <img
        src={Triangle.src}
        className={`absolute ${className} h-3 w-[30px]`}
        alt="Triangle"
      />
    </h2>
  );
}
