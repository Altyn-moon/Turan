"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "@/app/components/layout/header";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

// Обычные бутылки
function BottleCard({
  src,
  label,
  subLabel,
  width = 120,
  height = 300,
}: {
  src: string;
  label: string;
  subLabel?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="bottle-card">
        <div className="bottle-inner">
            <Image className="bottle-img" src={src} alt={label} width={width} height={height} />
        <div className="bottle-label">{subLabel || label}</div>
    </div>
    {subLabel && <div className="bottle-top-label">{label}</div>}
    </div>
  );
}

// Фруктовые бутылки
function FlavoredBottleCard({
  src,
  label,
  subLabel,
  flavor,
  width = 120,
  height = 300,
}: {
  src: string;
  label: string;
  subLabel: string;
  flavor: "strawberry" | "raspberry" | "mango" | "lemon";
  width?: number;
  height?: number;
}) {
  return (
    <div className={`flavored-card ${flavor}`}>
      <div className="flavored-bg">
        <Image className="bottle-img" src={src} alt={label} width={width} height={height} />
        <div className="flavored-sub">{subLabel}</div>
      </div>
      <div className={`flavored-top ${flavor}`}>{label}</div>
    </div>
  );
}

// Главная страница
export default function SocialPage() {
    // создаём ref и scrollYProgress для Header
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <main ref={ref} className="font-rubik">
      {/* Шапка с анимацией скролла */}
      <Header scrollYProgress={scrollYProgress} />
      
      {/* Hero Section */}
      <section className="assortiment-hero hero--with-header">
          <h1 className="assortiment-text">АССОРТИМЕНТ</h1>
      </section>
      
    {/* Assortment Section */}
    <section className="assortment-section">

    {/* Негазированная */}
    <div className="assortment-group">
      <h2 className="assortment-title">Негазированная</h2>
      <div className="bottle-grid">
        <BottleCard src="/images/still-0.5.png" label="0.5 л" width={90} height={300}/>
        <BottleCard src="/images/still-1.png" label="1 л" width={92} height={314}/>
        <BottleCard src="/images/still-1.5.png" label="1.5 л" width={106} height={356}/>
        <BottleCard src="/images/still-5.png" label="5 л" width={126} height={327}/>
      </div>
    </div>

    {/* Газированная */}
    <div className="assortment-group">
      <h2 className="assortment-title">Газированная</h2>
      <div className="bottle-grid">
        <BottleCard src="/images/sparkling-0.5.png" label="0.5 л" width={136} height={358}/>
        <BottleCard src="/images/sparkling-1.png" label="1 л" width={131} height={344}/>
        <BottleCard src="/images/sparkling-1.5.png" label="1.5 л" width={137} height={378}/>
      </div>
    </div>

    {/* Стеклянная */}
    <div className="assortment-group">
      <h2 className="assortment-title">Стеклянная</h2>
      <div className="bottle-grid">
        <BottleCard src="/images/glass-still-0.25.png" label="Негазированная" subLabel="0.25 л" width={75} height={258}/>
        <BottleCard src="/images/glass-still-0.5.png" label="Негазированная" subLabel="0.5 л" width={91} height={323}/>
        <BottleCard src="/images/glass-sparkling-0.25.png" label="Газированная" subLabel="0.25 л" width={102} height={379}/>
        <BottleCard src="/images/glass-sparkling-0.5.png" label="Газированная" subLabel="0.5 л" width={121} height={379}/>
      </div>
    </div>

  {/* Вкусовая линейка */}
          <div className="assortment-group">
            <h2 className="assortment-title">Вкусовая линейка</h2>
            <div className="bottle-grid">
              <FlavoredBottleCard src="/images/strawberry-0.5.png" label="Клубника" subLabel="0.5 л" flavor="strawberry" width={126} height={318}/>
              <FlavoredBottleCard src="/images/raspberry-0.5.png" label="Малина" subLabel="0.5 л" flavor="raspberry" width={126} height={318}/>
              <FlavoredBottleCard src="/images/mango-0.5.png" label="Манго-ананас" subLabel="0.5 л" flavor="mango" width={126} height={318}/>
              <FlavoredBottleCard src="/images/lemon-0.5.png" label="Лимон и мята" subLabel="0.5 л" flavor="lemon" width={126} height={318}/>
            </div>
            <div className="bottle-grid">
              <FlavoredBottleCard src="/images/strawberry-1.png" label="Клубника" subLabel="1 л" flavor="strawberry" width={125} height={350}/>
              <FlavoredBottleCard src="/images/raspberry-1.png" label="Малина" subLabel="1 л" flavor="raspberry" width={125} height={350}/>
              <FlavoredBottleCard src="/images/mango-1.png" label="Манго-ананас" subLabel="1 л" flavor="mango" width={125} height={350}/>
              <FlavoredBottleCard src="/images/lemon-1.png" label="Лимон и мята" subLabel="1 л" flavor="lemon" width={125} height={350}/>
            </div>
          </div>
  </section>


<footer className="footer">
  <div className="footer-top">
    <div className="footer-logo">
      <img src="/images/logo_color.svg fill.svg" alt="TURAN Logo" />
    </div>

    <div className="footer-menu">
      <h4>МЕНЮ</h4>
      <ul>
        <li><a href="/turan/useful">Полезно знать</a></li>
        <li><a href="/turan/assortiment">Ассортимент</a></li>
        <li><a href="/turan/social">Социальная ответственность</a></li>
        <li><a href="/turan/delivery">Доставка</a></li>
      </ul>
    </div>

    <div className="footer-contacts">
      <h4>КОНТАКТЫ</h4>
      <div>
        Офис в России (г. Москва)<br />
        <a href="tel:+79777882787">+7 977 788 27 87</a><br />
        <a href="tel:+79262713508">+7 926 271 35 08</a><br />
        <a href="mailto:constantine.kravtsov@globalbeverages.kz">constantine.kravtsov@globalbeverages.kz</a>
      </div>
    </div>

    <div className="footer-contacts">
      <div className="footer-branch">
        Дистрибутор в Приволжском Федеральном округе (г. Самара)<br />
        <a href="tel:+78462218170"><strong>+7 846 221 81 70</strong></a><br />
        <a href="mailto:turan@turanvolga.ru">turan@turanvolga.ru</a>
      </div>
    </div>

    <div className="footer-button">
      <a href="/turan/delivery" className="footer-delivery-btn">Доставка</a>
      <div className="footer-del-num footer-contacts">
        <a href="tel:+78462218170">+7 846 221 81 70</a><br />
        <a href="mailto:turan@turanvolga.ru">turan@turanvolga.ru</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="footer-social">
      <a href="#"><img src="/images/item.png" alt="Telegram" /></a>
      <a href="#"><img src="/images/socials.png" alt="Instagram" /></a>
      <a href="#"><img src="/images/socials (1).png" alt="Facebook" /></a>
      <a href="#"><img src="/images/socials (3).png" alt="WhatsApp" /></a>
    </div>

    <p>© Все права защищены 2025</p>
    <a href="#">Согласие на обработку персональных данных</a>
    <a href="#">Политика конфиденциальности</a>

    <div className="footer-rights">
      <span className="font">00</span>
      <span className="font">/</span>
      <span>Сайт создан <a href="#">OG Group</a></span>
    </div>
  </div>

  <div className="footer-brand">
    <img src="/images/logo_color.svg.png" alt="TURAN" />
  </div>
</footer>
    </main>
  );
}
