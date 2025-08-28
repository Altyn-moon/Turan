"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 z-50 w-full bg-white shadow font-rubik"
        style={{ y }}
        initial={false}
      >
        <div className="flex items-stretch justify-between w-full">
          {/* Логотип + меню (внутри контейнера, центрировано) */}
          <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-16 md:h-[86px]">
            {/* Логотип слева */}
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>

            {/* Меню по центру (только ≥ md) */}
            <ul className="hidden md:flex gap-12 tracking-wider font-medium text-[#153A51] mx-auto">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-cyan-700 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Бургер (только ≤ md) */}
            <button
              type="button"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 -mr-2"
            >
              {open ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="#153A51" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="#153A51" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </nav>

          {/* Кнопка справа (как было) */}
          <Link
            href="/turan/delivery"
            className="hidden md:flex items-center justify-center gap-2 bg-[#05A8E2] hover:bg-[#039cd2] transition 
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

      {/* Мобильное меню-оверлей (как было) */}
      <motion.div
        aria-hidden={!open}
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        className="fixed inset-0 z-40 md:hidden"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.aside
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: open ? 0 : -16, opacity: open ? 1 : 0 }}
          transition={{ type: "tween", duration: 0.18 }}
          className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-[#153A51] text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-cyan-700"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/turan/delivery"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#05A8E2] hover:bg-[#039cd2] text-white py-3"
            >
              ДОСТАВКА <ArrowIcon />
            </Link>
          </nav>
        </motion.aside>
      </motion.div>
    </>
  );
}
