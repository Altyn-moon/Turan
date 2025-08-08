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

      {/* Hero Секция */}
      <section className="useful-hero">
            <h1 className="useful-text">ПОЛЕЗНО ЗНАТЬ</h1>
      </section>

      {/* Water */}
      <section className="water-block">
        <h2>Почему вода не бывает одинаковой</h2>
        <p>На первый взгляд вода кажется одинаковой: это H₂O, прозрачная жидкость без вкуса и запаха. Но вода из разных источников сильно отличается по составу, минерализации и пользе для организма.</p>
      </section>

      {/* Water 2 */}
      <section className="water-block">
        <h2>Какая вода самая чистая</h2>
        <p>Артезианская, родниковая, ледниковая или горная — каждая вода имеет особенности:</p>

        <div className="water-cards">
          {/* Артезианская */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Артезианская:</strong>
              <p>может быть минерализованной или содержать природные загрязнители</p>
            </div>
          </div>

          {/* Ледниковая */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Ледниковая:</strong>
              <p>низкая минерализация, возможны тяжёлые металлы</p>
            </div>
          </div>
        </div>

        <div className="water-cards">
          {/* Родниковая */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Родниковая:</strong>
              <p>может содержать микроорганизмы</p>
            </div>
          </div>

          {/* Горная */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Горная:</strong>
              <p>может содержать примеси, микроорганизмы</p>
            </div>
          </div>
        </div>

        <p className="note">Чистота воды определяется не названием источника, а ее анализом и обработкой</p>
      </section>

      {/* Water 3 */}
      <section className="water-block">
        <h2>Вода может быть:</h2>

        <div className="water-cards">
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Высокоминерализованной —</strong> полезной при дефиците минералов, но требующей контроля;</p>
            </div>
          </div>

          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Мягкой —</strong> приятной на вкус, но не восполняющей потребности в минералах;</p>
            </div>
          </div>
        </div>

        <div className="water-cards">
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Деминерализованной —</strong> может вымывать минералы при длительном употреблении;</p>
            </div>
          </div>

          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Родниковой —</strong> содержит природные минералы, фильтруется породами;</p>
            </div>
          </div>
        </div>

        <div className="water-cards">
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Артезианской —</strong> чистая, богатая минералами, свойства зависят от глубины;</p>
            </div>
          </div>

          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Грунтовой —</strong> может содержать нитраты, пестициды;</p>
            </div>
          </div>
        </div>

        <div className="water-cards">
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Дистиллированной —</strong> безопасна, но бесполезна как источник минералов;</p>
            </div>
          </div>

          <div className="water-card">
            <span className="dot"></span>
            <div>
              <p><strong>Водопроводной —</strong> обработана, но может содержать примеси</p>
            </div>
          </div>
        </div>

      </section>

      {/* Мифы блок */}
<section className="myths-block">
  <h2>Мифы и правда о воде</h2>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>PET-бутылки вредны?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      PET безопасен при правильном использовании, одобрен FDA, EFSA и СНГ. Вред может возникнуть только при неправильной эксплуатации (нагревание, многократное использование)
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Опасна ли минеральная вода для ежедневного питья?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Нет, если это столовая или лечебно-столовая вода. TURAN (0,47 г/л) и BURABAY (2,5 г/л) подходят для регулярного употребления.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Искусственная минерализация лучше?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Натуральная минерализация создаётся природой и лучше усваивается. Искусственная не заменяет природный баланс.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Осадок после заморозки — признак плохой воды?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Нет. Это выпадение природных минералов, а не загрязнение.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Минеральная вода вымывает кальций?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Минеральная вода восполняет кальций и магний, а не вымывает их.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Воду нельзя пить во время еды?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Можно. Вода не мешает пищеварению, а помогает ему.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Минеральная вода вызывает камни?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Нет. Напротив, она снижает риск образования камней при правильном выборе.
    </p>
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
