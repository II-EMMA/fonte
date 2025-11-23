export default function OrangeBtn({ children }) {
  return (
    <button className="w-full flex items-center justify-center text-sm font-montserrat font-medium border-[1.5px] border-premium-orange py-2 px-9 bg-premium-orange transition-shadow duration-300 shadow-premium-orange-hover cursor-pointer capitalize text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]">
      {children}
    </button>
  );
}
