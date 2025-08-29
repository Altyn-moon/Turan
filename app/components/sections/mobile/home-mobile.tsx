"use client";

import Header from "../../layout/header";
import LogoText from "../../ui/logo-text";
import "./home-mobile.css";
import { useState } from "react";
import type React from "react";

/** тип для CSS custom properties */
type CSSVars = React.CSSProperties & {
  ["--hero-bg"]?: string;
  ["--hero-bg-size"]?: string;
};

/** константы вне компонента */
const FEATURES = [
  { value: "15 тыс",   label: "лет возраст источника" },
  { value: "104 м",    label: "глубина водозабора" },
  { value: "800 млн",  label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

export default function HomeMobile() {
  // словарь «раскрыт/свернут»
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const hero1Style: CSSVars = {
    "--hero-bg": "url('/hero/bg-hero.webp')",
    "--hero-bg-size": "contain",
  };

  const hero2Style: CSSVars = {
    "--hero-bg": "url('/nature/bg-nature.webp')",
  };

  return (
    <main className="font-rubik">
      <Header />

      {/* HERO #1 — фон из HTML, сначала раскрыт (без кропа), карточка висит у низа */}
      <section
        className={`hero hero--with-header ${expanded[1] ? "hero--compact" : "hero--expanded"}`}
        style={hero1Style}
        role="banner"
        aria-label="TURAN — природная лёгкая живая вода"
      >
        <div className="home-hero__card">
          <span className="home-hero__eyebrow">ЕДИНСТВЕННАЯ В КАЗАХСТАНЕ</span>
          <h1 className="home-hero__title">
            <span>ПРИРОДНАЯ</span>
            <span>ЛЕГКАЯ</span>
            <span>ЖИВАЯ ВОДА</span>
          </h1>
          <div className="home-hero__brand">
            <LogoText />
          </div>
        </div>
      </section>

      {/* HERO #2 «Природная» — как было (разметка не трогаем), но с теми же состояниями высоты */}
      <section
        className={`hero ${expanded[1] ? "hero--compact" : "hero--expanded"}`}
        style={hero2Style}
      >
        <h1 className="hero-h1">ПРИРОДНАЯ</h1>
      </section>

      {/* TEXT-BLOCK — в «закрытом» состоянии наезжает на фон; после клика опускается */}
      <section className={`text-block ${expanded[1] ? "" : "text-block--overlap"}`}>
        <div
          id="water-more-1"
          className={`text-content ${expanded[1] ? "expanded" : "collapsed"}`}
        >
          <h2>TURAN — природная минеральная вода, рожденная из глубин веков.</h2>

          <p>
            Она берет свое начало в заповедной зоне Кокшетауской возвышенности,
            где на глубине более 100 метров скрыт реликтовый источник,
            сформированный более 15 000 лет назад талыми водами Валдайского
            ледника. Проходя через древние породы, возраст которых исчисляется
            сотнями миллионов лет, вода насыщается природными минералами и
            сохраняет свою первозданную чистоту. Без искусственных добавок, без
            внешнего воздействия — только идеальный баланс, созданный самой
            природой.
          </p>

          <p>
            Эта вода не подвергается дополнительной обработке, потому что в ней
            нет ничего лишнего. Природная минерализация, идеально
            сбалансированный состав, мягкий, освежающий вкус — TURAN сохраняет
            всё, что задумано самой природой. Её добыча ведётся в заповедной
            зоне под строгим государственным контролем, а автоматизированные
            системы мониторинга следят за каждым этапом, чтобы сохранить её
            первозданную свежесть и исключительные уникальные свойства.
          </p>

          <p>
            TURAN — не просто вода, это символ вечности, заключённой в каждой
            капле. Её источник — естественный природный резервуар, сформированный
            ледниковыми водами, которые тысячелетиями проникали вглубь земли,
            проходя естественную фильтрацию через породы протерозойского периода,
            возрастом более 800 миллионов лет. Там, на глубине 104 метров,
            скрывается уникальная экосистема, полностью защищённая от внешних
            воздействий.
          </p>

          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.value} className="feature">
                <span className="feature__value">{f.value}</span>
                <span className="feature__label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[1]}
          aria-controls="water-more-1"
          onClick={() => setExpanded({ ...expanded, 1: !expanded[1] })}
        >
          {expanded[1] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>

      {/* footer — как был */}
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
