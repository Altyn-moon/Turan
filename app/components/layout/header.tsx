import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Logo from "../ui/logo";
import ArrowIcon from "../ui/icons/arrow-top-right";

const NAV_ITEMS = [
  { label: "О воде", href: "/" },
  { label: "Полезно знать", href: "/turan/useful" },
  { label: "Ассортимент", href: "/turan/assortiment" },
  { label: "Социальная ответственность", href: "/turan/social" },
];

interface HeaderProps {
  scrollYProgress: MotionValue<number>;
}

export default function Header({ scrollYProgress }: HeaderProps) {
  const y = useTransform(scrollYProgress, [0, 0.03], [0, -100]);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full bg-white shadow font-rubik"
      style={{ y }}
      initial={false}
    >
      <div className="flex items-stretch justify-between w-full">
        
        {/* Логотип + меню (внутри контейнера, центрировано) */}
        <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          {/* Логотип слева */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Меню по центру */}
          <ul className="hidden md:flex gap-12 tracking-wider font-medium text-[#153A51] mx-auto">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-cyan-700 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка справа */}
        <Link
          href="/turan/delivery"
          className="group flex items-center justify-center gap-2 bg-[#05A8E2] hover:bg-[#039cd2] transition 
                     px-12 text-white font-light rounded-none text-base
                     h-[86px] self-stretch"
        >
          ДОСТАВКА
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </motion.header>
  );
}

