import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Logo from "../ui/logo";
import ArrowIcon from "../ui/icons/arrow-top-right";

const NAV_ITEMS = [
  { label: "ПОЛЕЗНО ЗНАТЬ", href: "/turan/useful" },
  { label: "АССОРТИМЕНТ", href: "/turan/assortiment" },
  { label: "СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ", href: "/turan/social" },
];

interface HeaderProps {
  scrollYProgress: MotionValue<number>;
}

export default function Header({ scrollYProgress }: HeaderProps) {
  const y = useTransform(scrollYProgress, [0, 0.03], [0, -100]);

  return (
    <motion.header
      className="w-full bg-white shadow z-50 fixed top-0 left-0"
      style={{ y }}
      initial={false}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <ul className="hidden md:flex gap-12 tracking-wider font-medium text-[#153A51]">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-cyan-700 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="group flex items-center justify-center gap-2 bg-[#05A8E2] hover:bg-[#039cd2] transition px-12 py-7 text-white font-light rounded-none text-base"
        >
          ДОСТАВКА
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
      </nav>
    </motion.header>
  );
}
