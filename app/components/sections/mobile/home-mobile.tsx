// "use client";

// import Header from "../../layout/header"; 
// import Image from "next/image";
// import LogoText from "../../../ui/logo-text";  
// import Link from "next/link";
// import "./home-mobile.css";

// export default function HomeMobile() {
//   return (
//     <main className="font-rubik">
//       {/* универсальная шапка (бургер на мобилке) */}
//       <Header />

//       {/* HERO */}
//       <section className="hero--with-header home-hero" role="banner" aria-label="TURAN — природная лёгкая живая вода">
//         {/* фон */}
//         <div className="home-hero__bg">
//           <Image
//             src="/hero/bg-hero.webp"        // можно заменить, если у тебя другой фон
//             alt=""
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//         </div>

//         {/* карточка с текстом как на скрине */}
//         <div className="home-hero__card">
//           <span className="home-hero__eyebrow">ЕДИНСТВЕННАЯ В КАЗАХСТАНЕ</span>

//           <h1 className="home-hero__title">
//             <span>ПРИРОДНАЯ</span>
//             <span>ЛЕГКАЯ</span>
//             <span>ЖИВАЯ ВОДА</span>
//           </h1>

//           <div className="home-hero__brand">
//             <LogoText />
//           </div>
//         </div>
//       </section>

//       {/* Пример простого блока ниже (по желанию дополним позже) */}
//       <section className="home-block">
//         <h2 className="home-block__title">О бренде</h2>
//         <p className="home-block__text">
//           Чистая природная вода. Экологичные технологии и забота об источнике.
//         </p>
//         <div className="home-block__cta">
//           <Link href="/turan/assortiment" className="home-btn">Ассортимент</Link>
//           <Link href="/turan/useful" className="home-btn home-btn--ghost">Полезно знать</Link>
//         </div>
//       </section>
//     </main>
//   );
// }
