"use client";

import Image from "next/image";
import "./style.css";

export default function SocialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero"
        
      >
        <div className="useful-hero">
          <div className="hero-text">
            <h1 className="useful-text">СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</h1>
          </div>
        </div>
      </section>

      {/* Water Section */}
      <section className="water-block">
        <p>
          Turan Water придерживается принципов устойчивого развития, заботясь об
          окружающей среде и благополучии общества. Компания внедряет экологически
          чистые технологии, минимизирует влияние производства на природу и активно
          поддерживает благотворительные инициативы.
        </p>
        <p>
          Особое внимание уделяется доступу к чистой воде, а также проектам,
          направленным на поддержку образования, спорта и здравоохранения. Мы
          стремимся не только производить качественную воду, но и вносить вклад в
          развитие общества, создавая лучшее будущее для следующих поколений.
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
