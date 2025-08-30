"use client";

import Header from "../../layout/header";
import LogoText from "../../ui/logo-text";
import NatureText from "@/app/components/ui/text-logo/nature-text";
import CaveText from "@/app/components/ui/text-logo/cave-text";
import WaterText from "@/app/components/ui/text-logo/water-text";
import BirdText from "@/app/components/ui/text-logo/bird-text";
import KazakhText from "@/app/components/ui/text-logo/kazakh-text";
import UsefulText from "@/app/components/ui/text-logo/useful-text";
import SecureText from "@/app/components/ui/text-logo/secure-text";
import FamilyText from "@/app/components/ui/text-logo/family-text";
import MenuButton from "@/app/components/ui/menu-button-mobile";
import Image from "next/image";

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
  const hero4Style: CSSVars = { "--hero-bg": "url('/cave-water-bird/water.webp')" };
  const hero5Style: CSSVars = { "--hero-bg": "url('/cave-water-bird/bird-mobile.png')" };
  const hero6Style: CSSVars = { "--hero-bg": "url('/kazakh/kazakh_back.png')" };
  const hero7Style: CSSVars = { "--hero-bg": "url('/useful/useful-mobile.png')" };
  const hero8Style: CSSVars = { "--hero-bg": "url('/secure/secure-mobile.png')" };
  const hero9Style: CSSVars = { "--hero-bg": "url('/awards/award-mobile.png')" };

  const golds = [
    { url: "/awards/gold4.png", className: "h-15 w-15" },
    { url: "/awards/gold5.png", className: "h-15 w-15" },
    { url: "/awards/gold6.png", className: "h-15 w-15" },
    { url: "/awards/gold7.png", className: "h-15 w-15" },
  ];
  const silvers = [
    { url: "/awards/silver5.png", className: "h-15 w-15" },
    { url: "/awards/silver6.png", className: "h-15 w-15" },
    { url: "/awards/silver1.png", className: "h-15 w-15" },
    { url: "/awards/silver2.png", className: "h-15 w-15" },
  ];

  const router = useRouter();

  return (
    <main className="font-rubik layout-stack">
      <Header />

      {/* HERO #1 */}
      <section
        className={`hero--main hero--with-header ${expanded[1] ? "hero--compact" : "hero--expanded"}`}
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

      {/* HERO #2 Природа */}
      <section>
      <section className={`hero ${expanded[1] ? "hero--compact" : "hero--expanded"}`} style={hero2Style}>
        <div className={`text-hero ${expanded[1] ? "text-hero--centered" : ""}`}> <NatureText /> </div>
      </section>

      {/* TEXT-BLOCK #1 */}
      <section className={`text-block ${expanded[1] ? "" : "text-block--overlap"}`}>
        <div id="water-more-1" className={`text-content ${expanded[1] ? "expanded" : "collapsed"}`}>
          <h2>TURAN — природная минеральная вода, рожденная из глубин
                    веков.</h2>
          <p>Она берет свое начало в заповедной зоне Кокшетауской
                    возвышенности, где на глубине более 100 метров скрыт
                    реликтовый источник, сформированный более 15 000 лет назад
                    талыми водами Валдайского ледника. Проходя через древние
                    породы, возраст которых исчисляется сотнями миллионов лет,
                    вода насыщается природными минералами и сохраняет свою
                    первозданную чистоту. Без искусственных добавок, без
                    внешнего воздействия — только идеальный баланс, созданный
                    самой природой.</p>
           
          <p>TURAN — не просто вода, это символ вечности, заключенной в
                    каждой капле. Ее источник — естественный природный
                    резервуар, сформированный ледниковыми водами, которые
                    тысячелетиями проникали вглубь земли, проходя естественную
                    фильтрацию через породы протерозойского периода, возрастом
                    более 800 миллионов лет. Там, на глубине 104 метров,
                    скрывается уникальная экосистема, полностью защищенная от
                    внешних воздействий.</p>
             
          <p>Эта вода не подвергается дополнительной обработке, потому
                    что в ней нет ничего лишнего. Природная минерализация,
                    идеально сбалансированный состав, мягкий, освежающий вкус —
                    TURAN сохраняет все, что задумано самой природой. Ее добыча
                    ведется в заповедной зоне под строгим государственным
                    контролем, а автоматизированные системы мониторинга следят
                    за каждым этапом, чтобы сохранить ее первозданную свежесть и
                    исключительные уникальные свойства.</p>
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

      {/* HERO #3 Легкая */}
      <section>
      <section className={`hero ${expanded[2] ? "hero--compact" : "hero--expanded"}`} style={hero3Style}>
        <div className={`text-hero ${expanded[2] ? "text-hero--centered" : ""}`}><CaveText /></div>
      </section>

      {/* TEXT-BLOCK #2 */}
      <section className={`text-block ${expanded[2] ? "" : "text-block--overlap"}`}>
        <div id="water-more-2" className={`text-content ${expanded[2] ? "expanded" : "collapsed"}`}>
          <p>Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь — одном из 5 редких источников легкой воды
                  на планете. В этом коротком списке он занимает уверенную вторую позицию.</p>
          <p>Легче воды TURAN только талые воды ледников Антарктики. Но в отличие
                  от лидера списка TURAN доступен всем желающим.</p>
          <p>Легкая вода — это научный термин, описывающий воду с низким содержанием
                дейтерия (тяжёлого водорода). Она не создаётся искусственно, а добывается
                в местах с особой геологией и экологической чистотой.</p>
          <p>Исследования доказали её уникальный оздоровительный эффект, включая омоложение и продление
                 жизни.</p>
           <p>Венгерский ученый Габор Шомлай подтвердил: легкая вода способна замедлить 
                метастазирование, восстанавливая защитные функции организма. И это не просто слова, 
                это научно подтвержденная истина, скрытая в самой структуре воды — легкая вода с 
                уровнем дейтерия ниже 135 ppm, редка и особо ценна, ведь её структура максимально 
                приближена к межклеточной жидкости нашего организма.</p>

          <h2>Легкая вода:</h2>
                <p><span className="blue-dot"></span>Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается &quot;тормозящий эффект&quot; тяжёлых молекул. В результате чего
                  организм быстрее восстанавливается, дольше остаётся бодрым и
                  устойчивым к нагрузкам. </p>
                <p><span className="blue-dot"></span>Помогает активизировать
                  естественные защитные силы. Организм лучше справляется со
                  стрессами, вирусами и воспалениями. </p>
                <p><span className="blue-dot"></span>Улучшает обмен веществ - ускоряет ключевые биохимические процессы. Это
                  помогает телу эффективнее усваивать питательные вещества,
                  избавляться от токсинов и поддерживать баланс. </p>
                <p><span className="blue-dot"></span>Замедляет старение на клеточном уровне. Защищает ДНК и
                  способствует обновлению клеток. Это помогает дольше сохранять
                  внутреннюю молодость и стабильность работы органов и систем.
                </p>

          <p>Легкая вода — это не лекарство, а природная поддержка организма. Она работает мягко, 
                  но эффективно, помогая телу включать собственные ресурсы. Ее регулярное употребление 
                  имеет накопительный эффект — улучшение самочувствия, ясность ума и легкость в теле 
                  становятся естественной нормой.</p>
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

      {/* HERO #4 Живая*/}
      <section>
      <section className={`hero ${expanded[3] ? "hero--compact" : "hero--expanded"}`} style={hero4Style}>
        <div className={`text-hero ${expanded[3] ? "text-hero--centered" : ""}`}><WaterText /></div>
      </section>

      {/* TEXT-BLOCK #3 */}
      <section className={`text-block ${expanded[3] ? "" : "text-block--overlap"}`}>
        <div id="water-more-3" className={`text-content ${expanded[3] ? "expanded" : "collapsed"}`}>
          <p>TURAN — это вода, которая сохраняет всё, чем её наделила природа. 
            Её уникальность — в абсолютной чистоте, поэтому она не требует глубоких 
            вмешательств. В отличие от большинства бутилированной воды, TURAN не 
            подвергается химическим манипуляциям, не проходит осмос (так как он вместе 
            с обеззараживанием лишает воду и всех её полезных свойств), не обременена 
            искусственной минерализацией. Её формула создана природой и подтверждена наукой.
</p>
          <p>Весь путь от скважины до бутылки устроен так, чтобы сохранить природную 
            формулу воды. TURAN проходит только две стадии обработки — и обе являются 
            механическими, то есть не затрагивают её минеральный состав:
</p>

          <h2>Дисковая фильтрация <br></br>  AZUD (10 микрон)</h2>
                  <p>
                    Удаляет крупные частицы: песок, ил, органические фрагменты и механические 
                    примеси. Это первая и самая щадящая ступень очистки — подобная природной 
                    фильтрации, как если бы вода проходила через камни и песок.
                  </p>

          <h2>Микрофильтрация <br></br> PALL (0,45 микрон) </h2>
                  <p>
                    На этой стадии устраняются мельчайшие загрязнения: бактерии, грибки, 
                    микроорганизмы и тонкодисперсные частицы. Вода становится кристально 
                    чистой — не теряя при этом своих природных свойств.
                  </p>

          <h2>Финальный штрих — озон</h2>
                  <p>
                    Чтобы обеспечить идеальную микробиологическую безопасность без потери 
                    природных качеств, вода обрабатывается озоном — мощным и абсолютно 
                    натуральным окислителем. Озон разрушает органику и нейтрализует микробы, 
                    не взаимодействуя с полезными минералами. В течение нескольких минут 
                    он распадается на чистый кислород, не оставляя никаких следов — только 
                    лёгкий вкус свежести и ощущение бодрящей лёгкости на языке.
                  </p>
          <p>TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса. Без химии.
             Без добавок. Только механическая очистка и природная формула, нетронутая временем.
                </p>
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

      {/* HERO #5 Сбалансированная */}
      <section>
      <section className={`hero ${expanded[4] ? "hero--compact" : "hero--expanded"}`} style={hero5Style}>
        <div className={`text-hero ${expanded[4] ? "text-hero--centered" : ""}`}><BirdText /></div>
      </section>

      {/* TEXT-BLOCK #4 */}
      <section className={`text-block ${expanded[4] ? "" : "text-block--overlap"}`}>
        <div id="water-more-4" className={`text-content ${expanded[4] ? "expanded" : "collapsed"}`}>
          <p>Вода TURAN отличается не только чистотой, но и естественным уровнем pH. 7,5 — 
            это именно тот показатель, к которому стремится сам организм. Такой уровень 
            кислотно-щелочного баланса максимально близок к внутренней среде человека, 
            особенно к плазме крови и лимфе. Это делает воду TURAN не просто утоляющей жажду, 
            а физиологически подходящей для ежедневного употребления.
                </p>
          <p>pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко поддерживает 
            внутренний баланс, не вызывая ни закисления, ни ощелачивания. Она легко усваивается, 
            не перегружает организм, способствует нормализации обменных процессов и помогает 
            телу сохранять внутреннюю стабильность, особенно при умственных и физических 
            нагрузках, стрессах или нарушениях питания.
                </p>
          <p>Многие производители стремятся добиться «идеального» pH с помощью химической 
            коррекции — добавляя соли или изменяя структуру воды. TURAN не нуждается в этом. 
            Её сбалансированный уровень pH — естественный результат прохождения через 
            глубинные геологические породы, сформированные миллионы лет назад. Природа 
            сама отрегулировала этот баланс — мы просто бережно сохраняем его.
                </p>
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

      {/* HERO #6 Казакстанская*/}
      <section>
      <section className={`hero ${expanded[5] ? "hero--compact" : "hero--expanded"}`} style={hero6Style}>
        <div className={`text-hero ${expanded[5] ? "text-hero--centered" : ""}`}><KazakhText /></div>
      </section>

      {/* TEXT-BLOCK #5 */}
      <section className={`text-block ${expanded[5] ? "" : "text-block--overlap"}`}>
        <div id="water-more-5" className={`text-content ${expanded[5] ? "expanded" : "collapsed"}`}>
          <h2>Локальность как принцип. <br></br> Независимость как выбор.</h2>
          <p>TURAN — это не просто вода с казахстанским адресом на этикетке. Это продукт, 
            в котором всё, без исключений, — казахстанского происхождения. Не на бумаге, 
            а на деле: от источника и производственной цепочки до упаковки.
              </p>

          <h2>Источник</h2>
          <p>Природный, глубинный, расположен в заповедной зоне Кокшетауской возвышенности.</p>
              
          <h2>Розлив</h2>
          <p>На собственном заводе, оснащенном самыми современными автоматизированными линиями 
            розлива от ведущих мировых производителей: Krones, Sidel, FBT, KHS, общей 
            производственной мощностью более 70 000 бутылок в час.</p>
             
          <h2>Упаковка</h2>
          <p>Даже РЕТ преформы (заготовки для бутылок), которые все закупают у поставщиков, 
            мы производим сами, здесь же на заводе.</p>

          <p>Мы не зависим от импорта, не ждём поставок из-за границы и не ищем подрядчиков 
            за рубежом. Это не жест маркетинга, а стратегия: полный контроль над каждым звеном 
            позволяет сохранять стабильность, гарантировать качество и действительно отвечать 
            за продукт перед потребителем. Мы гордимся тем, что TURAN — не импортированный бренд 
            и не франшиза. Это полностью казахстанская история: честная, прозрачная и сильная.
              </p>  
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

      {/* HERO #7 Полезная*/}
      <section>
      <section className={`hero ${expanded[6] ? "hero--compact" : "hero--expanded"}`} style={hero7Style}>
        <div className={`text-hero ${expanded[6] ? "text-hero--centered" : ""}`}><UsefulText /></div>
        {/* <div class="poleznaya-img">
          <img src="/useful/poleznaya_girl.png" alt="poleznaya_girl" /> 
        </div> */}
      </section>

      {/* TEXT-BLOCK #6 */}
      <section className={`text-block ${expanded[6] ? "" : "text-block--overlap"}`}>
        <div id="water-more-6" className={`text-content ${expanded[6] ? "expanded" : "collapsed"}`}>
          <p>TURAN — это тонкая, незаметная, но ежедневная поддержка организма. Она содержит комплекс жизненно важных минералов, без которых наше тело не может функционировать полноценно. Они не добавлены извне и не подогнаны под норму. Это натуральный природный состав: ровно столько, сколько нужно, чтобы поддерживать здоровье, не перегружая организм. Именно поэтому воду TURAN можно и нужно пить каждый день.
                </p>
          <p>Минерализация 0,2 - 0,47 г/дм³ — это физиологическая норма, при которой вода не только утоляет жажду, но и работает на вас: помогает клеткам, сосудам, нервной системе, костям, обмену веществ.
                </p>
          <h2>Что делает воду TURAN полезной?</h2>

          <p className="title-clamp">Кальций</p>
          <p>Поддерживает здоровье сердца, укрепляет кости и зубы, регулирует работу сосудов и свертываемость крови. Его регулярное поступление помогает в профилактике остеопороза и играет важную роль в иммунной защите организма
                  </p>

          <h2>Магний</h2>
          <p>Влияет на сотни процессов в организме — от усвоения белков до нормальной работы нервной системы. Снижает уровень холестерина, уменьшает нервное напряжение, помогает избежать судорог и нарушений сердечного ритма
                  </p>

          <h2>Калий и натрий</h2>
          <p>Эти элементы работают в паре: регулируют водно-солевой баланс, поддерживают сердечный ритм, участвуют в передаче нервных сигналов и обеспечивают здоровую работу мышц. Их дефицит может вызывать слабость, обезвоживание и сбои в работе сердца.
                  </p>

          <h2>Гидрокарбонаты</h2>
          <p>Отвечают за кислотно-щелочное равновесие организма. Они улучшают пищеварение, снижают избыточную кислотность желудочного сока и способствуют мягкому выводу продуктов обмена веществ.
                  </p>

          <h2>Фтор</h2>
          <p>Укрепляет эмаль зубов, кости, участвует в обмене кальция и фосфора. Обладает антибактериальными свойствами, поддерживает здоровье полости рта и способствует выведению тяжёлых металлов из организма.
                  </p>

          <h2>Йод</h2>
          <p>Важнейший микроэлемент для щитовидной железы. Участвует в выработке гормонов, влияющих на метаболизм, уровень энергии, концентрацию и развитие мозга.
                  </p>
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

      {/* HERO #8 Безопасная*/}
      <section>
      <section className={`hero ${expanded[7] ? "hero--compact" : "hero--expanded"}`} style={hero8Style}>
        <div className={`text-hero ${expanded[7] ? "text-hero--centered" : ""}`}><SecureText /></div>
      </section>

      {/* TEXT-BLOCK #7 */}
      <section className={`text-block ${expanded[7] ? "" : "text-block--overlap"}`}>
        <div id="water-more-7" className={`text-content ${expanded[7] ? "expanded" : "collapsed"}`}>
          <p>Вода TURAN не просто «соответствует нормам». Она подтверждает свою чистоту и стабильность каждый день, каждый месяц, каждый год.
              </p>

          <h2>Автоматизированный<br></br> контроль</h2>
          <p>Все этапы производства — от водозабора до упаковки — находятся под непрерывным контролем операторов. Современные цифровые системы отслеживают параметры в реальном времени, исключая человеческий фактор в критичных зонах.
                  </p>

          <h2>Ежегодная верификация <br></br> независимыми НИИ</h2>
          <p>Один раз в год TURAN проходит расширенный химический анализ в независимых научно-исследовательских институтах — как казахстанских, так и зарубежных. Это обеспечивает международную валидность данных и полное соответствие мировым стандартам.
                  </p>

          <h2>Ежедневная проверка <br></br> качества</h2>
          <p>На заводе KMW работает собственная лаборатория, где вода ежедневно проходит полный анализ по санитарно-гигиеническим, органолептическим и физико-химическим показателям. Это не формальность, а часть ежедневного производственного процесса.
                  </p>

          <h2>Ежемесячный <br></br>государственный  контроль</h2>
          <p>Месторождение воды TURAN официально зарегистрировано и находится под надзором Комитета контроля качества МЗ РК. Специалисты ежемесячно выезжают на месторождение, где производят отбор проб прямо из эксплуатационной скважины — до какой-либо обработки или фильтрации. Пробы доставляются в аккредитованные лаборатории для проведения полного анализа: от химического состава до микробиологической чистоты. Это позволяет объективно оценивать стабильность природного источника и гарантировать безопасность воды на самом базовом уровне.
                  </p>

          
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



      {/* HERO #9 Сертифицированная*/}
      <section>
      <section className={`hero ${expanded[8] ? "hero--compact" : "hero--expanded"}`} style={hero9Style}>
        <div className={`text-hero ${expanded[8] ? "text-hero--centered" : ""}`}><FamilyText /></div>
      </section>

      {/* TEXT-BLOCK #8 */}
      <section className={`text-block ${expanded[8] ? "" : "text-block--overlap"}`}>
        <div id="water-more-8" className={`text-content ${expanded[8] ? "expanded" : "collapsed"}`}>
          <p>Вода TURAN отмечена более чем 20 республиканскими и международными наградами за безупречное качество, природный состав и производственные стандарты.
                </p>

          <p>Вот уже несколько лет подряд TURAN получает высшую награду от Monde Selection — одного из самых авторитетных европейских институтов оценки качества. Эта независимая экспертиза проводится в Брюсселе, и включает слепую дегустацию, анализ состава и производственного процесса.
                </p>

          <div className="flex gap-4 items-center justify-center  relative z-50">
                          {golds.map((gold, i) => (
                            <Image
                              key={i}
                              width={80}
                              height={80}
                              src={gold.url}
                              className={gold.className}
                              alt="gold"
                              unoptimized
                            />
                          ))}
                        </div>
          
                        <div className="flex gap-6 mt-4 items-center justify-center  relative z-50">
                          <Image src="/awards/gold1.png" width={52} height={88} alt="gold1" unoptimized />
                          <Image src="/awards/gold2.png" width={52} height={88} alt="gold2" unoptimized />
                          <Image src="/awards/gold3.png" width={52} height={88} alt="gold3" unoptimized />
                        </div>

                        <div></div>

            <p>TURAN — одна из немногих вод в регионе, прошедших проверку SGS Institut Fresenius. Это мировой эталон лабораторного контроля, которому доверяют более 160 лет. Институт оценивает не только воду в бутылке, но и весь путь от скважины до розлива: санитарные условия, оборудование, технологии.
                </p>

            <p>С 1991 года TURAN остаётся верна своему стандарту: только природная вода, только проверенное качество — и только та чистота, за которую голосуют профессионалы по всему миру.
                </p>

            <div className="flex gap-4 items-center justify-center  relative z-50">
                            {silvers.map((silver, i) => (
                              <Image
                                key={i}
                                width={80}
                                height={80}
                                src={silver.url}
                                className={silver.className}
                                alt="silver"
                                unoptimized
                              />
                            ))}
                          </div>

          
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



      <div className=" px-4 py-2 w-full flex items-center justify-center relative"> 
                  <div className="flex flex-col gap-4 pointer-events-auto">             
                    <div
                      onClick={() => router.push("/turan/social")}
                      className="
                        group inline-block cursor-pointer">
                      <div>
                        <MenuButton>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</MenuButton>
                      </div>
                    </div>
      
                    <div
                      onClick={() => router.push("/turan/useful")}
                      className="
                        group inline-block cursor-pointer">
                      <div>
                        <MenuButton>ПОЛЕЗНО ЗНАТЬ</MenuButton>
                      </div>
                    </div>
      
                    <div
                      onClick={() => router.push("/turan/assortiment")}
                      className="
                        group inline-block cursor-pointer">
                      <div>
                        <MenuButton>АССОРТИМЕНТ</MenuButton>
                      </div>
                    </div>
      
      
                    <div
                      onClick={() => router.push("/turan/delivery")}
                      className="
                        group inline-block cursor-pointer">
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
