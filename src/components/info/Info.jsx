import Link from "next/link";
import Logo from "../texts/Logo";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Info() {
  return (
    <section className="max-w-[1500px] mx-auto flex md:flex-row flex-col md:items-start md:justify-between lg:px-28 md:px-10 py-20 sm:px-14 px-9 gap-10">
      <Logo TextColor="text-white/30" />
      <div className="flex gap-x-20 font-montserrat font-medium text-sm text-white/30">
        <ul className="flex flex-col gap-y-5">
          <li>
            <Link href="#about-us">About Us</Link>
          </li>
          <li>
            <Link href="#team">Team</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="flex gap-x-[15px] items-center">
        <div className="cursor-pointer bg-sub-secondary-dark-gray w-10 h-10 rounded-full flex items-center justify-center">
          <FaFacebookF className="text-white/50 size-4" />
        </div>
        <div className="cursor-pointer bg-sub-secondary-dark-gray w-10 h-10 rounded-full flex items-center justify-center">
          <FaInstagram className="text-white/50 size-4" />
        </div>
        <div className="cursor-pointer bg-sub-secondary-dark-gray w-10 h-10 rounded-full flex items-center justify-center">
          <FaTwitter className="text-white/50 size-4" />
        </div>
      </div>
    </section>
  );
}
