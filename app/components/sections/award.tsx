import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import MenuButton from "../ui/menu-button";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";
import FamilyText from "../ui/text-logo/family-text";

interface AwardSectionProps {
  scrollYProgress: MotionValue<number>;
}

const golds = [
  {
    url: "/awards/gold4.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/gold5.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/gold6.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/gold7.png",
    className: "h-20 w-20",
  },
];

const silvers = [
  {
    url: "/awards/silver5.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/silver6.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/silver1.png",
    className: "h-20 w-20",
  },
  {
    url: "/awards/silver2.png",
    className: "h-20 w-20",
  },
];

export default function AwardSection({ scrollYProgress }: AwardSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.83 && v < 0.86);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.86 && v < 0.89);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText3(v > 0.89 && v < 1);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.82, 0.84, 0.95, 0.97],
    [0, 1, 1, 0]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.83, 0.84, 0.85, 0.86],
    [0, 1, 1, 0]
  );
  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.83, 0.84, 0.85, 0.86],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.86, 0.87, 0.88, 0.89],
    [0, 1, 1, 0]
  );
  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.86, 0.87, 0.88, 0.89],
    ["10%", "0%", "0%", "-10%"]
  );

  useAutoScrollDown(scrollYProgress, 0.78, 0.84, 13.5);
  useAutoScrollDown(scrollYProgress, 0.85, 0.87, 14);
  useAutoScrollDown(scrollYProgress, 0.88, 0.97, 15);

  return (
    <section className="relative h-screen w-full">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-0 pointer-events-none snap-end"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-4 px-20 py-10 z-20 text-white">
          <div className="w-full flex flex-col">
            <div className="w-full relative z-20">
              <FamilyText />
            </div>
            <p className="text-white title-clamp blur-gray px-6 py-5 w-1/2 1xl:w-1/2 self-end text-right leading-8 relative z-10">
              Вода TURAN отмечена более чем 20 республиканскими и международными
              наградами за безупречное качество,природный состав и высокие
              производственные стандарты
            </p>
            <Image
              src="/awards/bg-family.webp"
              alt="background"
              fill
              priority
              className="object-cover w-full h-full fixed z-0 top-0"
              unoptimized
            />
            <Image
              src="/awards/family.webp"
              alt="background"
              fill
              priority
              className="object-cover w-full h-full fixed translate-y-8 z-20 bottom-0"
              unoptimized
            />
          </div>
          {showText1 && (
            <div className="h-full w-full flex flex-col gap-4 justify-end items-end">
              <motion.div
                style={{ opacity: opacityText1, y: moveTextY1 }}
                className="flex gap-4 items-center self-end relative z-20"
              >
                {golds.map((gold, i) => (
                  <Image
                    key={i}
                    width={28}
                    height={28}
                    src={gold.url}
                    className={gold.className}
                    alt="gold"
                    unoptimized
                  />
                ))}
              </motion.div>
              <motion.p
                style={{ opacity: opacityText1, y: moveTextY1 }}
                className="text-clamp blur-gray px-6 py-5 self-end text-right w-1/2 relative z-20 leading-tight"
              >
                Вот уже несколько лет подряд TURAN получает высшую награду от
                Monde Selection — одного из самых авторитетных европейских
                институтов оценки качества. Эта независимая экспертиза
                проводится в Брюсселе, и включает слепую дегустацию, анализ
                состава и производственного процесса
              </motion.p>
            </div>
          )}
          {showText2 && (
            <div className="h-full w-full flex flex-col gap-4 justify-end items-end relative z-20">
              <motion.div
                style={{ opacity: opacityText2, y: moveTextY2 }}
                className="flex gap-4 items-center self-end"
              >
                {silvers.map((silver, i) => (
                  <Image
                    key={i}
                    width={28}
                    height={28}
                    src={silver.url}
                    className={silver.className}
                    alt="gold"
                    unoptimized
                  />
                ))}
              </motion.div>
              <motion.p
                style={{ opacity: opacityText2, y: moveTextY2 }}
                className="text-clamp blur-gray px-6 py-5 self-end text-right w-1/2 leading-tight"
              >
                TURAN — одна из немногих вод в регионе, прошедших проверку SGS
                Institut Fresenius. Это мировой эталон лабораторного контроля,
                которому доверяют более 160 лет. Институт оценивает не только
                воду в бутылке, но и весь путь от скважины до розлива:санитарные
                условия, оборудование, технологии
              </motion.p>
            </div>
          )}
          {showText3 && (
            <div className="w-full flex justify-between gap-5 relative z-20">
              <div className="flex flex-col gap-4">
                <MenuButton>АССОРТИМЕНТ</MenuButton>
                <MenuButton>ПОЛЕЗНО ЗНАТЬ</MenuButton>
              </div>

              <div className="flex flex-col items-end gap-4">
                <MenuButton>ДОСТАВКА</MenuButton>
                <MenuButton>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</MenuButton>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
