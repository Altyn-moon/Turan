"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "@/app/components/layout/header";
import "./style.css";

import "./style.css";

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
      <section className="hero-delivery">
            <h1 className="text-delivery">ДОСТАВКА</h1>
      </section>

      {/* Section */}
      <section className="delivery-block delivery-card">
  <p className="delivery-lead">
    Теперь приобрести чистую и натуральную воду Turan стало еще проще! Вы можете заказать нашу продукцию на популярных маркетплейсах, не выходя из дома. Это удобный способ получить любимую воду с быстрой доставкой и выгодными предложениями.
  </p>

  <div className="market-grid">
    <a className="market-card" href="#" aria-label="Wolt">
      <img src="/images/wolt.png" alt="Wolt" />
    </a>

    <a className="market-card" href="#" aria-label="Aiqrbafresh">
      <img src="/images/AIRBA-FRESH.png" alt="airba fresh" />
    </a>

    <a className="market-card" href="#" aria-label="Magnum GO">
      <img src="/images/AIRBA-FRESH-Photoroom copy.png" alt="magnum GO" />
    </a>

    <a className="market-card" href="#" aria-label="Arbuz">
      <img src="/images/arbuz.png" alt="arbuz" />
    </a>

    <a className="market-card" href="#" aria-label="Choco">
      <img src="/images/choco.png" alt="Choco" />
    </a>
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
