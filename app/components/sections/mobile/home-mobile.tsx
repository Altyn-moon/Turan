"use client";

import Header from "@/app/components/layout/header";
import Link from "next/link";
import "./home-mobile.css";

export default function HomeMobile() {
  return (
    <main className="font-rubik">
      {/* тот же Header: на мобилке он уже с бургером */}
      <Header /* scrollYProgress не обязателен для mobile */ {...({} as any)} />

      {/* HERO — поведение как на assortment/social */}
      <section className="hero--with-header home-hero">
        <h1 className="home-hero__title">TURAN</h1>
      </section>

      {/* Пример простого блока. Далее можно накидывать секции под мобильный дизайн */}
      <section className="home-block">
        <h2 className="home-block__title">О бренде</h2>
        <p className="home-block__text">
          Чистая природная вода. Экологичные технологии и забота об источнике.
        </p>
        <div className="home-block__cta">
          <Link href="/turan/assortiment" className="home-btn">Ассортимент</Link>
          <Link href="/turan/useful" className="home-btn home-btn--ghost">Полезно знать</Link>
        </div>
      </section>
    </main>
  );
}
