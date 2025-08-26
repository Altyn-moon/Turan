"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "@/app/components/layout/header";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

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
      <section className="social-hero">
          <h1 className="social-text">СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</h1>
      </section>

      {/* Water Section */}
      <section className="social-block">
        <p>TURAN бережно относится к своему источнику — реликтовой воде, сформированной талыми водами Валдайского ледника. Здесь нет агрессивной химической обработки, дистилляции и искусственной минерализации. Только механическая очистка, позволяющая сохранить естественный баланс минералов и уникальный состав. Это принципиальный выбор бренда: не нарушать природное совершенство.
        Забота об экологии не заканчивается на воде. TURAN стремится минимизировать углеродный след:<br></br>
        <span className="blue-dot"></span> производство построено по принципам энергоэффективности; <br></br>
        <span className="blue-dot"></span> упаковка создается с учетом возможностей переработки;<br></br>
        <span className="blue-dot"></span> доставка и логистика оптимизируются, чтобы снизить нагрузку на окружающую среду.</p>
      </section>

      {/* Water Section */}
      <section className="social-block">
        <p>Каждая стадия цикла — от источника до полки — подчинена идее сохранения экологического равновесия.<br></br>
        TURAN видит свою задачу шире, чем просто производство воды. Это просветительская миссия: формировать культуру потребления, где выбор в пользу экологичного продукта становится нормой. <br></br>
        TURAN — за здоровое будущее, где чистая вода доступна каждому, а природа не платит цену за человеческие удобства. <br></br>
        Социальная ответственность для TURAN — это не лозунг, а образ жизни. Это бренд, который не только говорит, но и действует: инвестирует в экологические инициативы, поддерживает проекты по сохранению природных территорий и воспитывает бережное отношение к ресурсам у нового поколения. <br></br>
        TURAN — вода, которая хранит свою природную силу, чтобы дарить её людям. Вода, которая напоминает: у нас есть только одна планета и одна ответственность — сохранить её.
        </p>
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
        Отдел Экспорта<br />
        <a href="tel:+77273318947">+7 (727) 331-89-47</a><br />
        <a href="mailto:info@globalbeverages.kz">info@globalbeverages.kz</a>
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
      {/* <span className="font">00</span>
      <span className="font">/</span> */}
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
