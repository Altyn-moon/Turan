import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import CaveText from "../../ui/text-logo/cave-text";
import { useState } from "react";

interface CaveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveSection({ scrollYProgress }: CaveSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.14 && v < 0.19);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.19 && v < 0.24);
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.14, 0.15, 0.22, 0.23],
    [0, 1, 1, 0]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.14, 0.15, 0.17, 0.19],
    [0, 1, 1, 0]
  );
  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.14, 0.15, 0.17, 0.19],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.19, 0.21, 0.22, 0.24],
    [0, 1, 1, 0]
  );
  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.19, 0.21, 0.22, 0.24],
    ["10%", "0%", "0%", "-10%"]
  );

  useAutoScrollDown(scrollYProgress, 0.14, 0.18, 2.7);
  useAutoScrollDown(scrollYProgress, 0.18, 0.22, 3.4);

  return (
    <section className="relative w-full h-screen">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-end bg-nature"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 px-20 py-10">
          <div className="w-full">
            <CaveText />
          </div>
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="text-white blur-blue p-4 leading-tight w-2/3 self-end text-right flex flex-col gap-0.5">
                <p className="title-clamp leading-8">
                  Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь — одном из 5 редких источников легкой
                  воды на планете
                </p>
                <p className="text-clamp leading-normal">
                  И в этом коротком списке он занимает уверенную вторую позицию.
                  Легче воды TURAN только талые воды ледников Антарктики. Но в
                  отличие от лидера списка TURAN доступен всем желающим.
                </p>
              </div>
              <p className="text-white text-clamp blur-blue p-4 leading-normal w-2/5">
                Легкая вода — это научный термин, описывающий воду с низким
                содержанием дейтерия (тяжелого водорода). Она не создаётся
                искусственно, а добывается в местах с особой геологией и
                экологической чистотой. Исследования доказали её уникальный
                оздоровительный эффект, включая омоложение и продление жизни.
              </p>
            </motion.div>
          )}
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full h-full flex justify-between gap-8"
            >
              <div className="text-white blur-blue p-4 leading-tight w-2/3 flex flex-col gap-0.5 h-fit">
                <p className="title-clamp">Лёгкая вода:</p>
                <p className="text-clamp">
                  - Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается тормозящий эффект тяжёлых молекул. В результате чего
                  организм быстрее восстанавливается, дольше остаётся бодрым и
                  устойчивым к нагрузкам. <br /> - Помогает активизировать
                  естественные защитные силы. Организм лучше справляется со
                  стрессами, вирусами и воспалениями. <br /> - Улучшает обмен
                  веществ - ускоряет ключевые биохимические процессы. Это
                  помогает телу эффективнее усваивать питательные вещества,
                  избавляться от токсинов и поддерживать баланс. <br /> -
                  Замедляет старение на клеточном уровне. Защищает ДНК и
                  способствует обновлению клеток. Это помогает дольше сохранять
                  внутреннюю молодость и стабильность работы органов и систем.
                </p>
              </div>
              <p className="text-white text-clamp blur-blue p-4 leading-normal w-2/3 self-end text-right">
                Венгерский ученый Габор Шомлай подтвердил: лёгкая вода способна
                замедлить метастазирование, восстанавливая защитные функции
                организма. И это не просто слова, это научно подтвержденная
                истина, скрытая в самой структуре воды - легкая вода с уровнем
                дейтерия ниже 135 ppm, редка и особо ценна, ведь её структура
                максимально приближена к межклеточной жидкости нашего
                организма.Лёгкая вода — это не лекарство, а природная поддержка
                организма. Она работает мягко, но эффективно, помогая телу
                включать собственные ресурсы. Ее регулярное употребление имеет
                накопительный эффект — улучшение самочувствия, ясность ума и
                лёгкость в теле становятся естественной нормой.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
