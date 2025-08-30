"use client";

import Header from "../../layout/header";
import LogoText from "../../ui/logo-text";
import NatureText from "@/app/components/ui/text-logo/nature-text";
import CaveText from "@/app/components/ui/text-logo/cave-text";
import BirdText from "@/app/components/ui/text-logo/bird-text";
import KazakhText from "@/app/components/ui/text-logo/kazakh-text";
import UsefulText from "@/app/components/ui/text-logo/useful-text";
import SecureText from "@/app/components/ui/text-logo/secure-text";
import FamilyText from "@/app/components/ui/text-logo/family-text";
import MenuButton from "@/app/components/ui/menu-button";

import { useRouter } from "next/navigation";

import "./home-mobile.css";
import { useState } from "react";
import type React from "react";

type CSSVars = React.CSSProperties & {
  ["--hero-bg"]?: string;
  ["--hero-bg-size"]?: string;
};

const FEATURES = [
  { value: "15 тыс",   label: "лет возраст источника" },
  { value: "104 м",    label: "глубина водозабора" },
  { value: "800 млн",  label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

export default function HomeMobile() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const hero1Style: CSSVars = { "--hero-bg": "url('/hero/bg-hero.webp')", "--hero-bg-size": "contain" };
  const hero2Style: CSSVars = { "--hero-bg": "url('/nature/bg-nature.webp')" };
  const hero3Style: CSSVars = { "--hero-bg": "url('/cave-water-bird/cave.webp')" };
  const hero4Style: CSSVars = { "--hero-bg": "url('/cave-water-bird/bird.png')" };
  const hero5Style: CSSVars = { "--hero-bg": "url('/kazakh/kazakh_back.png')" };
  const hero6Style: CSSVars = { "--hero-bg": "url('/useful/bg-cloud.webp')" };
  const hero7Style: CSSVars = { "--hero-bg": "url('/secure/bez_back.webp')" };
  const hero8Style: CSSVars = { "--hero-bg": "url('/awards/bg-family.webp')" };
  const hero9Style: CSSVars = { "--hero-bg": "url('/awards/bg-family.webp')" };

  const golds = [
    { url: "/awards/gold4.png", className: "h-20 w-20" },
    { url: "/awards/gold5.png", className: "h-20 w-20" },
    { url: "/awards/gold6.png", className: "h-20 w-20" },
    { url: "/awards/gold7.png", className: "h-20 w-20" },
  ];
  const silvers = [
    { url: "/awards/silver5.png", className: "h-20 w-20" },
    { url: "/awards/silver6.png", className: "h-20 w-20" },
    { url: "/awards/silver1.png", className: "h-20 w-20" },
    { url: "/awards/silver2.png", className: "h-20 w-20" },
  ];

  const router = useRouter();

  return (
    <main className="font-rubik layout-stack">
      <Header />

      {/* HERO #1 */}
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
          <div className="home-hero__brand"><LogoText /></div>
        </div>
      </section>

      {/* HERO #2 */}
      <section>
      <section className={`hero ${expanded[1] ? "hero--compact" : "hero--expanded"}`} style={hero2Style}>
        <div className={`text-hero ${expanded[1] ? "text-hero--centered" : ""}`}> <NatureText /> </div>
      </section>

      {/* TEXT-BLOCK #1 */}
      <section className={`text-block ${expanded[1] ? "" : "text-block--overlap"}`}>
        <div id="water-more-1" className={`text-content ${expanded[1] ? "expanded" : "collapsed"}`}>
          <h2>TURAN — природная минеральная вода, рожденная из глубин веков.</h2>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
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
      </section>

      {/* HERO #3 */}
      <section>
      <section className={`hero ${expanded[2] ? "hero--compact" : "hero--expanded"}`} style={hero3Style}>
        <div className={`text-hero ${expanded[2] ? "text-hero--centered" : ""}`}><CaveText /></div>
      </section>

      {/* TEXT-BLOCK #2 */}
      <section className={`text-block ${expanded[2] ? "" : "text-block--overlap"}`}>
        <div id="water-more-2" className={`text-content ${expanded[2] ? "expanded" : "collapsed"}`}>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
          <p>Она берет свое начало в заповедной зоне Кокшетауской возвышенности, 
            где на глубине более 100 метров скрыт реликтовый источник, сформированный 
            более 15 000 лет назад талыми водами Валдайского ледника. Проходя через древние 
            породы, возраст которых исчисляется сотнями миллионов лет, вода насыщается природными 
            минералами и сохраняет свою первозданную чистоту. Без искусственных добавок, 
            без внешнего воздействия — только идеальный баланс, созданный самой природой.</p>
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[2]}
          aria-controls="water-more-2"
          onClick={() => setExpanded({ ...expanded, 2: !expanded[2] })}
        >
          {expanded[2] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>

      {/* HERO #4 */}
      <section>
      <section className={`hero ${expanded[3] ? "hero--compact" : "hero--expanded"}`} style={hero4Style}>
        <div className={`text-hero ${expanded[3] ? "text-hero--centered" : ""}`}><BirdText /></div>
      </section>

      {/* TEXT-BLOCK #3 */}
      <section className={`text-block ${expanded[3] ? "" : "text-block--overlap"}`}>
        <div id="water-more-3" className={`text-content ${expanded[3] ? "expanded" : "collapsed"}`}>
          <p>...</p>
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[3]}
          aria-controls="water-more-3"
          onClick={() => setExpanded({ ...expanded, 3: !expanded[3] })}
        >
          {expanded[3] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>

      {/* HERO #5 */}
      <section>
      <section className={`hero ${expanded[4] ? "hero--compact" : "hero--expanded"}`} style={hero5Style}>
        <div className={`text-hero ${expanded[4] ? "text-hero--centered" : ""}`}><KazakhText /></div>
      </section>

      {/* TEXT-BLOCK #4 */}
      <section className={`text-block ${expanded[4] ? "" : "text-block--overlap"}`}>
        <div id="water-more-4" className={`text-content ${expanded[4] ? "expanded" : "collapsed"}`}>
          <p>...</p>
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[4]}
          aria-controls="water-more-4"
          onClick={() => setExpanded({ ...expanded, 4: !expanded[4] })}
        >
          {expanded[4] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>

      {/* HERO #6 */}
      <section>
      <section className={`hero ${expanded[5] ? "hero--compact" : "hero--expanded"}`} style={hero6Style}>
        <div className={`text-hero ${expanded[5] ? "text-hero--centered" : ""}`}><UsefulText /></div>
      </section>

      {/* TEXT-BLOCK #5 */}
      <section className={`text-block ${expanded[5] ? "" : "text-block--overlap"}`}>
        <div id="water-more-5" className={`text-content ${expanded[5] ? "expanded" : "collapsed"}`}>
          <p>Текстовый блок для секции 6...</p>
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[5]}
          aria-controls="water-more-5"
          onClick={() => setExpanded({ ...expanded, 5: !expanded[5] })}
        >
          {expanded[5] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>

      {/* HERO #7 */}
      <section>
      <section className={`hero ${expanded[6] ? "hero--compact" : "hero--expanded"}`} style={hero7Style}>
        <div className={`text-hero ${expanded[6] ? "text-hero--centered" : ""}`}><SecureText /></div>
      </section>

      {/* TEXT-BLOCK #6 */}
      <section className={`text-block ${expanded[6] ? "" : "text-block--overlap"}`}>
        <div id="water-more-6" className={`text-content ${expanded[6] ? "expanded" : "collapsed"}`}>
          <p>Текстовый блок для секции 7...</p>
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[6]}
          aria-controls="water-more-6"
          onClick={() => setExpanded({ ...expanded, 6: !expanded[6] })}
        >
          {expanded[6] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>

      {/* HERO #8 */}
      <section>
      <section className={`hero ${expanded[7] ? "hero--compact" : "hero--expanded"}`} style={hero8Style}>
        <div className={`text-hero ${expanded[7] ? "text-hero--centered" : ""}`}><FamilyText /></div>
      </section>

      {/* TEXT-BLOCK #7 */}
      <section className={`text-block ${expanded[7] ? "" : "text-block--overlap"}`}>
        <div id="water-more-7" className={`text-content ${expanded[7] ? "expanded" : "collapsed"}`}>
          <p>Текстовый блок для секции 8...</p>

          
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[7]}
          aria-controls="water-more-7"
          onClick={() => setExpanded({ ...expanded, 7: !expanded[7] })}
        >
          {expanded[7] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>



      {/* HERO #9 */}
      <section>
      <section className={`hero ${expanded[8] ? "hero--compact" : "hero--expanded"}`} style={hero9Style}>
        <div className={`text-hero ${expanded[8] ? "text-hero--centered" : ""}`}><FamilyText /></div>
      </section>

      {/* TEXT-BLOCK #8 */}
      <section className={`text-block ${expanded[8] ? "" : "text-block--overlap"}`}>
        <div id="water-more-8" className={`text-content ${expanded[8] ? "expanded" : "collapsed"}`}>
          <p>Текстовый блок для секции 8...</p>

          
        </div>
        <button
          type="button"
          className="button-more mt-4"
          aria-expanded={!!expanded[8]}
          aria-controls="water-more-8"
          onClick={() => setExpanded({ ...expanded, 8: !expanded[8] })}
        >
          {expanded[8] ? "Скрыть" : "Узнать больше"}
        </button>
      </section>
      </section>



      <div className="w-full flex flex-col xl:flex-row items-start gap-4 relative z-50"> 
                  <div className="flex flex-col gap-4 pointer-events-auto">             
                    <div
                      onClick={() => router.push("/turan/social")}
                      className="
                        group inline-block cursor-pointer
                        group-hover:[&>div>button]:text-black
                        group-hover:[&>div>button]:border-black">
                      <div>
                        <MenuButton>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</MenuButton>
                      </div>
                    </div>
      
                    <div
                      onClick={() => router.push("/turan/useful")}
                      className="
                        group inline-block cursor-pointer
                        group-hover:[&>div>button]:text-black
                        group-hover:[&>div>button]:border-black">
                      <div>
                        <MenuButton>ПОЛЕЗНО ЗНАТЬ</MenuButton>
                      </div>
                    </div>
      
                    <div
                      onClick={() => router.push("/turan/assortiment")}
                      className="
                        group inline-block cursor-pointer
                        group-hover:[&>div>button]:text-black
                        group-hover:[&>div>button]:border-black">
                      <div>
                        <MenuButton>АССОРТИМЕНТ</MenuButton>
                      </div>
                    </div>
      
      
                    <div
                      onClick={() => router.push("/turan/delivery")}
                      className="
                        group inline-block cursor-pointer
                        group-hover:[&>div>button]:text-black
                        group-hover:[&>div>button]:border-black">
                      <div>
                        <MenuButton>ДОСТАВКА</MenuButton>
                      </div>
                    </div>
                  </div>
                </div>

      {/* FOOTER */}
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
        </div>
      </footer>
    </main>
  );
}
