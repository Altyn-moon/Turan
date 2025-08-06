"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

import "./style.css";

function BottleCard({
  src,
  label,
  subLabel,
}: {
  src: string;
  label: string;
  subLabel?: string;
}) {
  return (
    <div className="bottle-card">
      <div className="bottle-image-wrapper">
        <Image src={src} alt={label} width={150} height={300} />
        <div className="bottle-label">{subLabel || label}</div>
        {subLabel && <div className="bottle-top-label">{label}</div>}
      </div>
    </div>
  );
}


export default function SocialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="useful-hero">
            <h1 className="useful-text">АССОРТИМЕНТ</h1>
        </div>
      </section>
      
    {/* Assortment Section */}
<section className="assortment-section">
  {/* Негазированная */}
  <div className="assortment-group">
    <h2 className="assortment-title">Негазированная</h2>
    <div className="bottle-grid">
      <BottleCard src="/images/still-0.5.png" label="0.5 л" />
      <BottleCard src="/images/still-1.png" label="1 л" />
      <BottleCard src="/images/still-1.5.png" label="1.5 л" />
      <BottleCard src="/images/still-5.png" label="5 л" />
    </div>
  </div>

  {/* Газированная */}
  <div className="assortment-group">
    <h2 className="assortment-title">Газированная</h2>
    <div className="bottle-grid">
      <BottleCard src="/images/sparkling-0.5.png" label="0.5 л" />
      <BottleCard src="/images/sparkling-1.png" label="1 л" />
      <BottleCard src="/images/sparkling-1.5.png" label="1.5 л" />
    </div>
  </div>

  {/* Стеклянная */}
  <div className="assortment-group">
    <h2 className="assortment-title">Стеклянная</h2>
    <div className="bottle-grid">
      <BottleCard src="/images/glass-still-0.25.png" label="Негазированная" subLabel="0.25 л" />
      <BottleCard src="/images/glass-still-0.5.png" label="Негазированная" subLabel="0.5 л" />
      <BottleCard src="/images/glass-sparkling-0.25.png" label="Газированная" subLabel="0.25 л" />
      <BottleCard src="/images/glass-sparkling-0.5.png" label="Газированная" subLabel="0.5 л" />
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
        <li><a href="/turan/assortment">Ассортимент</a></li>
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
