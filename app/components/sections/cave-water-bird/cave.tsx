import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import CaveText from "../../ui/text-logo/cave-text";
import { useState } from "react";
import Image from "next/image";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.14 && v < 0.18));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText2(v > 0.18 && v < 0.22));

  const opacity      = useTransform(scrollYProgress, [0.14, 0.145, 0.215, 0.22], [0, 1, 1, 0]);
  const opacityText1 = useTransform(scrollYProgress, [0.14, 0.15, 0.17, 0.18], [0, 1, 1, 0]);
  const moveTextY1   = useTransform(scrollYProgress, [0.14, 0.15, 0.17, 0.18], ["10%", "0%", "0%", "-10%"]);
  const opacityText2 = useTransform(scrollYProgress, [0.18, 0.195, 0.21, 0.22], [0, 1, 1, 0]);
  const moveTextY2   = useTransform(scrollYProgress, [0.18, 0.195, 0.21, 0.22], ["10%", "0%", "0%", "-10%"]);

  useAutoScrollDown(scrollYProgress, 0.14, 0.18, 2.7);
  useAutoScrollDown(scrollYProgress, 0.18, 0.22, 3.3);

  return (
    <section className="relative w-full h-screen">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-screen z-40 pointer-events-none snap-none bg-nature"
      >

        <div className="fixed top-0 left-0 h-screen w-full z-30 pointer-events-none">
          <div className="relative h-full w-full">
            <Image
              fill
              src="/cave-water-bird/gradient.png"
              alt="gradient"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Контент */}
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 z-40">
          <div className="leading-none mb-10
                          [&>svg]:block [&>svg]:static
                          [&>svg]:w-[400px] [&>svg]:h-auto">
            <CaveText />
          </div>

          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full flex flex-col items-start justify-start gap-2 flex-none">
              <div
                className="relative z-50 text-white p-0 leading-[1.4]
                           w-auto max-w-[660px] self-start
                           flex flex-col gap-2">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                  Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь — одном из 5 редких источников легкой воды
                  на планете. В этом коротком списке он занимает уверенную вторую позицию.
                </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                  Легче воды TURAN только талые воды ледников Антарктики. Но в отличие
                  от лидера списка TURAN доступен всем желающим.
                </p>
          

              <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                Легкая вода — это научный термин, описывающий воду с низким содержанием
                дейтерия (тяжёлого водорода). Она не создаётся искусственно, а добывается
                в местах с особой геологией и экологической чистотой.
              </p>
              <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                Исследования доказали её уникальный оздоровительный эффект, включая омоложение и продление жизни.
              </p>
              <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                Венгерский ученый Габор Шомлай подтвердил: легкая вода способна замедлить метастазирование, восстанавливая защитные функции организма. И это не просто слова, это научно подтвержденная истина, скрытая в самой структуре воды — легкая вода с уровнем дейтерия ниже 135 ppm, редка и особо ценна, ведь её структура максимально приближена к межклеточной жидкости нашего организма.
              </p>    </div>
            </motion.div>
          )}

          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full flex justify-start items-start gap-8 flex-none"
            >
              <div className="relative z-50 text-white p-0 leading-[1.4]
                           w-auto max-w-[660px] self-start
                           flex flex-col gap-2">
                <p className="title-clamp">Легкая вода:</p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold">
                  <span className="white-dot"></span>Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается &quot;тормозящий эффект&quot; тяжёлых молекул. В результате чего
                  организм быстрее восстанавливается, дольше остаётся бодрым и
                  устойчивым к нагрузкам. </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold">
                  <span className="white-dot"></span>Помогает активизировать
                  естественные защитные силы. Организм лучше справляется со
                  стрессами, вирусами и воспалениями. </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold">
                  <span className="white-dot"></span>Улучшает обмен веществ - ускоряет ключевые биохимические процессы. Это
                  помогает телу эффективнее усваивать питательные вещества,
                  избавляться от токсинов и поддерживать баланс. </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold">
                  <span className="white-dot"></span>Замедляет старение на клеточном уровне. Защищает ДНК и
                  способствует обновлению клеток. Это помогает дольше сохранять
                  внутреннюю молодость и стабильность работы органов и систем.
                </p>
<div></div>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] col-span-2 w-5/6 2xl:w-2/3 text-clamp h-fit text-white text-justify font-bold ">
                  Легкая вода — это не лекарство, а природная поддержка организма. Она работает мягко, но эффективно, помогая телу включать собственные ресурсы. Ее регулярное употребление имеет накопительный эффект — улучшение самочувствия, ясность ума и легкость в теле становятся естественной нормой.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
