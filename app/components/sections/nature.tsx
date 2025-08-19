import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Curtains from "./curtains";
import NatureText from "../ui/text-logo/nature-text";
import { useState } from "react";

const features = [
  { value: "15 тыс", label: "лет возраст источника" },
  { value: "104 м", label: "глубина водозабора" },
  { value: "800 млн", label: "лет возраст пород" },
  { value: "1991 год", label: "основания производства" },
];

interface NatureSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function NatureSection({ scrollYProgress }: NatureSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.02 && v < 0.08);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.08 && v < 0.14);
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.02, 0.04, 0.14, 0.15],
    [0, 1, 1, 0]
  );
  const opacityText1 = useTransform(
    scrollYProgress,
    [0.02, 0.04, 0.06, 0.8],
    [0, 1, 1, 0]
  );
  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.02, 0.04, 0.06, 0.8],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.08, 0.1, 0.12, 0.14],
    [0, 1, 1, 0]
  );
  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.08, 0.1, 0.12, 0.14],
    ["10%", "0%", "0%", "-10%"]
  );

  //useAutoScrollDown(scrollYProgress, 0, 0.07, 0.81);
  //useAutoScrollDown(scrollYProgress, 0.07, 0.1, 1.7);

  // НОВОЕ — только для первой секции «Природная»
  useAutoScrollDown(scrollYProgress, 0.02, 0.08, 2800);
  useAutoScrollDown(scrollYProgress, 0.08, 0.14, 2800);

  return (
    <section className="relative h-full">
      <Curtains progress={scrollYProgress} />

      <motion.section
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-end bg-nature"
        style={{ opacity }}
      >
        <div className="h-full w-full bg-contain bg-center 1xl:bg-center bg-nature fixed z-0 top-0" />
        {/*<div className="fixed top-1/2 left-1/2 -translate-1/2">
          <Image
            src="/nature/turan-text.png"
            alt="Turan Water"
            width={100}
            height={100}
            className="mb-4 h-44 w-44 xl:w-72 xl:h-72 1xl:h-44 1xl:w-44 2xl:h-64 2xl:w-64 object-cover"
            priority
            unoptimized
          />
        </div>*/}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/nature/turan-text.png"
          alt="Turan Water"
          width={288}
          height={288}
          sizes="(max-width: 640px) 28vw, (max-width: 1024px) 18vw, (max-width: 1440px) 14vw, 12vw"
          className="
            aspect-square object-contain 

            /* базово */
            w-[clamp(100px,22vw,160px)]

            /* ≥640px */
            sm:w-[clamp(100px,20vw,180px)]

            /* ≥768px */
            md:w-[clamp(100px,16vw,200px)]

            /* ≥1024px */
            lg:w-[clamp(100px,13vw,220px)]

            /* ≥1280px */
            xl:w-[clamp(100px,11vw,230px)]

            /* ≥1536px */
            2xl:w-[clamp(100px,10vw,260px)]
          "
          priority
          unoptimized
        />
      </div>

        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 px-20 py-10">
          <div className="w-full h-full flex flex-col justify-between gap-5">
            <div className="max-w-full mt-20 1xl:mt-10 2xl:mt-14">
              <NatureText />
            </div>
            {showText1 && (
              <motion.div
                style={{ y: moveTextY1, opacity: opacityText1 }}
                className="flex flex-col justify-between h-full gap-5"
              >
                <div className="grid grid-cols-4 gap-5 h-full">
                  <p className="col-span-2 w-2/3 title-clamp h-fit text-white font-bold  leading-none">
                    TURAN — природная минеральная вода, рожденная из глубин
                    веков.
                  </p>
                  <p className="col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold  leading-normal text-right place-self-end">
                    Она берет свое начало в заповедной зоне Кокшетауской
                    возвышенности, где на глубине более 100 метров скрыт
                    реликтовый источник, сформированный более 15 000 лет назад
                    талыми водами Валдайского ледника. Проходя через древние
                    породы, возраст которых исчисляется сотнями миллионов лет,
                    вода насыщается природными минералами и сохраняет свою
                    первозданную чистоту. Без искусственных добавок, без
                    внешнего воздействия — только идеальный баланс, созданный
                    самой природой.
                  </p>
                </div>
                <div className="relative w-full grid grid-cols-4 z-30 gap-5">
                  {features.map((f) => (
                    <div
                      key={f.value}
                      className="py-5 flex flex-col justify-between items-center gap-4 text-white  text-center"
                    >
                      <span className="title-clamp-list font-bold leading-5">
                        {f.value}
                      </span>
                      <span className="text-clamp opacity-80 !leading-none">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {showText2 && (
              <motion.div
                style={{ y: moveTextY2, opacity: opacityText2 }}
                className="flex flex-col justify-between h-full gap-5"
              >
                <div className="grid grid-cols-4 gap-5 h-full w-full">
                  <p className="col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-normal">
                    TURAN — не просто вода, это символ вечности, заключенной в
                    каждой капле. Ее источник — естественный природный
                    резервуар, сформированный ледниковыми водами, которые
                    тысячелетиями проникали вглубь земли, проходя естественную
                    фильтрацию через породы протерозойского периода, возрастом
                    более 800 миллионов лет. Там, на глубине 104 метров,
                    скрывается уникальная экосистема, полностью защищенная от
                    внешних воздействий.
                  </p>
                    <p className="col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-normal text-right  place-self-end">
                    Эта вода не подвергается дополнительной обработке, потому
                    что в ней нет ничего лишнего. Природная минерализация,
                    идеально сбалансированный состав, мягкий, освежающий вкус —
                    TURAN сохраняет все, что задумано самой природой.Ее добыча
                    ведется в заповедной зоне под строгим государственным
                    контролем, а автоматизированные системы мониторинга следят
                    за каждым этапом, чтобы сохранить ее первозданную свежесть и
                    исключительные уникальные
                  </p>
                </div>
                <div className="relative w-full grid grid-cols-4 z-30 gap-5">
                  {features.map((f) => (
                    <div
                      key={f.value}
                      className="px-10 py-5 flex flex-col justify-between items-center gap-4 text-white text-center"
                    >
                      <span className="title-clamp font-bold leading-5">
                        {f.value}
                      </span>
                      <span className="text-clamp opacity-80 !leading-none">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </section>
  );
}

