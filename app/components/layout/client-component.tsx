// "use client";
// import dynamic from "next/dynamic";

// const AnimatedSections = dynamic(() => import("../sections/animated"), {
//   ssr: false,
// });

// export default function ClientApp() {
//   return <AnimatedSections />;
// }



// "use client";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // ДЕСКТОП (из app/sections)
// const DesktopHome = dynamic(
//   () => import("../../sections/animated"),   // <-- два уровня вверх: layout -> components -> app
//   { ssr: false }
// );

// // МОБИЛКА (из app/components/sections/mobile)
// const MobileHome = dynamic(
//   () => import("../sections/mobile/home-mobile"), // <-- один уровень вверх до components, затем sections/mobile
//   { ssr: false }
// );

// export default function ClientApp() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 1024px)");
//     const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
//     setIsMobile(mq.matches);
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   return isMobile ? <MobileHome /> : <DesktopHome />;
// }





"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ДЕСКТОП
// const DesktopHome = dynamic(() => import("@/sections/animated"), { ssr:false });
const DesktopHome = dynamic(() => import("../sections/animated"), {
   ssr: false,
});

// МОБИЛКА
const MobileHome  = dynamic(() => import("../sections/mobile/home-mobile"), { ssr:false });

export default function ClientApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}