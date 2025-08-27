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
              <p>может быть минерализованной или содержать природные загрязнители.</p>
            </div>
          </div>

          {/* Ледниковая */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Ледниковая:</strong>
              <p>низкая минерализация, возможны тяжёлые металлы.</p>
            </div>
          </div>
        </div>

        <div className="water-cards">
          {/* Родниковая */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Родниковая:</strong>
              <p>может содержать микроорганизмы.</p>
            </div>
          </div>

          {/* Горная */}
          <div className="water-card">
            <span className="dot"></span>
            <div>
              <strong>Горная:</strong>
              <p>может содержать примеси, микроорганизмы.</p>
            </div>
          </div>
        </div>

        <p className="note">Чистота воды определяется не названием источника, а ее анализом и обработкой.</p>
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
              <p><strong>Водопроводной —</strong> обработана, но может содержать примеси.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Мифы блок */}
<section className="myths-block">
  <h2>Мифы и правда о воде</h2>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Вся вода одинаковая?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      На первый взгляд вся вода одинаковая, ведь формула H₂O у неё одна. Но состав и свойства сильно зависят от источника: одни воды богаты минералами, другие — обеднены или даже содержат примеси. Природная артезианская вода TURAN добывается из глубинных слоёв месторождения Кусколь, одного из редких источников «лёгкой воды» на планете. Она не нуждается в обработке, сохраняет природный баланс, оптимальный pH 7,5 и полезна для здоровья.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>PET вреден для здоровья?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />НЕТ
    </p>
    <p className="myth-explained">
      Миф о вреде PET основан на путанице с другими пластиками, содержащими BPA или фталаты. На самом деле полиэтилентерефталат (PET) сертифицирован и одобрен FDA, EFSA и другими международными органами для контакта с продуктами питания. Он не содержит бисфенола А, не выделяет фталаты и при правильном использовании безопасен для здоровья. PET применяется более 40 лет, и ни одно исследование не подтвердило его вреда.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Искусственная минерализация надежней натуральной?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Искусственная минерализация полезна для обогащения очищенной воды, но она не способна заменить природные процессы. Натуральная минерализация формируется веками, когда вода проходит через горные породы и обогащается не только кальцием и магнием, но и микроэлементами, которые сложно воспроизвести искусственно. Такой сбалансированный состав усваивается организмом легче и сохраняет природный вкус. Искусственно добавленные минералы могут усваиваться хуже и при неверных дозировках приводить к избытку солей.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Минеральная вода вымывает кальций, соли из организма?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Миф о том, что минеральная вода вымывает кальций и соли, связан с путаницей: это свойственно дистиллированной или деминерализованной воде, но не минеральной. Напротив, минеральная вода восполняет дефицит кальция и магния в легкоусвояемой форме, укрепляя кости и поддерживая сердце. Она помогает выводить только лишние соли и токсины, сохраняя водно-солевой баланс организма. Потеря кальция чаще связана с напитками с фосфорной кислотой (например, сладкими газировками), а не с минеральной водой.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Оседает камнями во внутренних органах?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Минеральная вода не вызывает образование камней — напротив, регулярное употребление помогает снизить концентрацию солей в моче и предотвращает их кристаллизацию. Камни образуются из-за нарушений обмена веществ, обезвоживания или избытка определённых продуктов в рационе, а не из-за состава воды. Природная вода TURAN с оптимальным балансом минералов и pH 7,5 поддерживает работу почек и снижает риск камнеобразования. Недостаток воды куда опаснее, чем её избыток.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Опасна для ежедневного употребления?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Миф о том, что минеральная вода опасна для ежедневного употребления, связан с путаницей между разными типами воды. Вред может принести лишь лечебная вода с очень высокой минерализацией, которую назначает врач. Природная минеральная вода TURAN имеет низкий уровень минерализации — всего 0,47 г/л, поэтому идеально подходит для ежедневного употребления и поддержания водно-солевого баланса. Она содержит 16 минералов в естественной форме, что делает её полезной для здоровья.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Если после заморозки и оттаивания в воде появляется осадок – она не качественная?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Осадок после заморозки и оттаивания воды не говорит о её низком качестве — это естественный результат изменения растворимости минералов при перепадах температуры. Минеральные соли, ранее находившиеся в растворе, могут выпадать в осадок, и это нормальное свойство природной воды. Наоборот, отсутствие осадка часто свидетельствует о том, что вода прошла искусственную очистку и лишена полезных микроэлементов. Настоящее качество воды определяется химическим анализом, а не визуальными признаками.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Артезианская, родниковая, ледниковая или горная? какая вода самая чистая?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Артезианская, родниковая, ледниковая и горная вода кажутся «самыми чистыми», но на деле каждая может содержать примеси или микроорганизмы. Ледниковая вода почти не имеет минералов, родниковая и горная часто подвержены бактериальному загрязнению, а артезианская может быть перенасыщена солями. Настоящее качество воды определяется её природным составом и правильной системой фильтрации. Природная артезианская вода TURAN проходит только механическую фильтрацию и озонирование, сохраняя идеальный баланс минералов и микробиологическую чистоту.
    </p>
  </div>

  <div className="myth-item">
    <p className="myth-question"><span className="dot"></span><strong>Воду нельзя пить во время еды?</strong></p>
    <p className="myth-false">
      <img className="cross" src="/images/no.png" alt="No" />
      НЕТ
    </p>
    <p className="myth-explained">
      Миф о том, что воду нельзя пить во время еды, основан на заблуждении, будто она разбавляет желудочный сок. На самом деле желудок автоматически регулирует количество кислоты и ферментов, и вода не мешает пищеварению. Напротив, она облегчает глотание, делает пищу мягче и доступнее для ферментов. Умеренное питьё воды во время еды улучшает комфорт и даже помогает избежать переедания.
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
