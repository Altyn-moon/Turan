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
        className="relative top-0 w-full h-screen z-40 pointer-events-none snap-end bg-nature"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 px-20 py-10">
          <div className="w-full mt-10 text-right">
            <CaveText />
          </div>

          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="relative z-50 text-white p-4 leading-[1.45]
                              w-auto max-w-[640px] self-start text-left flex flex-col gap-3">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.5]">
                  Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь — одном из 5 редких источников лёгкой воды
                  на планете. В этом коротком списке он занимает уверенную вторую позицию.
                </p>
                <p className="text-[clamp(14px,1.05vw,18px)]">
                  Легче воды TURAN только талые воды ледников Антарктики. Но в отличие
                  от лидера списка TURAN доступен всем желающим.
                </p>
              </div>

              <p className="relative z-50 text-white text-[clamp(14px,1.05vw,18px)]
                            p-4 leading-[1.5] w-auto max-w-[640px] self-start text-left">
                Лёгкая вода — это научный термин, описывающий воду с низким содержанием
                дейтерия (тяжёлого водорода). Она не создаётся искусственно, а добывается
                в местах с особой геологией и экологической чистотой. 
              </p>
              <p className="relative z-50 text-white text-[clamp(14px,1.05vw,18px)]
                            p-4 leading-[1.5] w-auto max-w-[640px] self-start text-left">
                Исследования доказали
                её уникальный оздоровительный эффект, включая омоложение и продление жизни.
              </p>
              <p className="relative z-50 text-white text-[clamp(14px,1.05vw,18px)]
                            p-4 leading-[1.5] w-auto max-w-[640px] self-start text-left">
                Венгерский ученый Габор Шомлай подтвердил: лёгкая вода способна замедлить метастазирование, восстанавливая защитные функции организма. И это не просто слова, это научно подтвержденная истина, скрытая в самой структуре воды - легкая вода с уровнем дейтерия ниже 135 ppm, редка и особо ценна, ведь её структура максимально приближена к межклеточной жидкости нашего организма.
              </p>
            </motion.div>
          )}

          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full h-full flex justify-between gap-8"
            >
              <div className="text-white p-4 leading-tight w-2/3 flex flex-col gap-0.5 h-fit">
                <p className="title-clamp">Лёгкая вода:</p>
                <p className="text-clamp">
                  - Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается тормозящий эффект тяжёлых молекул. В результате чего
                  организм быстрее восстанавливается, дольше остаётся бодрым и
                  устойчивым к нагрузкам. <br />- Помогает активизировать
                  естественные защитные силы. Организм лучше справляется со
                  стрессами, вирусами и воспалениями. <br />- Улучшает обмен
                  веществ — ускоряет ключевые биохимические процессы. Это
                  помогает телу эффективнее усваивать питательные вещества,
                  избавляться от токсинов и поддерживать баланс. <br />-
                  Замедляет старение на клеточном уровне. Защищает ДНК и
                  способствует обновлению клеток. Это помогает дольше сохранять
                  внутреннюю молодость и стабильность работы органов и систем.
                </p>
                <p className="text-white text-clamp leading-normal w-2/3 ">
                Лёгкая вода — это не лекарство, а природная поддержка организма. Она работает мягко, но эффективно, помогая телу включать собственные ресурсы. Ее регулярное употребление имеет накопительный эффект — улучшение самочувствия, ясность ума и лёгкость в теле становятся естественной нормой.
              </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}





{/*import {
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

  const opacity = useTransform(scrollYProgress, [0.14, 0.15, 0.22, 0.23], [0, 1, 1, 0]);
  const opacityText1 = useTransform(scrollYProgress, [0.14, 0.15, 0.17, 0.19], [0, 1, 1, 0]);
  const moveTextY1 = useTransform(scrollYProgress, [0.14, 0.15, 0.17, 0.19], ["10%", "0%", "0%", "-10%"]);
  const opacityText2 = useTransform(scrollYProgress, [0.19, 0.21, 0.22, 0.24], [0, 1, 1, 0]);
  const moveTextY2 = useTransform(scrollYProgress, [0.19, 0.21, 0.22, 0.24], ["10%", "0%", "0%", "-10%"]);

  useAutoScrollDown(scrollYProgress, 0.14, 0.18, 2.7);
  useAutoScrollDown(scrollYProgress, 0.18, 0.22, 3.4);

  return (
    <section className="relative w-full h-screen">
      
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-screen z-40 pointer-events-none snap-end bg-nature"
      >
        
        <div
          className="
            h-full w-full fixed top-0 left-0
            flex flex-col justify-between items-start text-left gap-8 px-20 py-10
            relative isolate
            before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:z-10
            before:bg-[linear-gradient(to_right,rgba(0,40,86,1)_0%,rgba(0,64,137,0.5)_30%,rgba(0,87,188,0)_55%)]
          "
        >
          
          <div className="w-full relative z-50">
            <CaveText />
          </div>

          
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between"
            >
              
              <div className="relative z-50 text-white p-4 leading-[1.45]
                              w-auto max-w-[640px] self-start text-left flex flex-col gap-3">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.5]">
                  Природная минеральная вода TURAN добывается из источника Бұқпа
                  на месторождении Кусколь — одном из 5 редких источников лёгкой воды
                  на планете. В этом коротком списке он занимает уверенную вторую позицию.
                </p>
                <p className="text-[clamp(14px,1.05vw,18px)]">
                  Легче воды TURAN только талые воды ледников Антарктики. Но в отличие
                  от лидера списка TURAN доступен всем желающим.
                </p>
              </div>

              {
              <p className="relative z-50 text-white text-[clamp(14px,1.05vw,18px)]
                            p-4 leading-[1.5] w-auto max-w-[640px] self-start text-left">
                Лёгкая вода — это научный термин, описывающий воду с низким содержанием
                дейтерия (тяжёлого водорода). Она не создаётся искусственно, а добывается
                в местах с особой геологией и экологической чистотой. Исследования доказали
                её уникальный оздоровительный эффект, включая омоложение и продление жизни.
              </p>
            </motion.div>
          )}

          
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full h-full flex justify-start gap-8"
            >
              <div className="relative z-50 text-white p-4 leading-[1.45]
                              w-auto max-w-[640px] text-left flex flex-col gap-3 h-fit">
                <p className="title-clamp">Лёгкая вода:</p>
                <p className="text-[clamp(14px,1.05vw,18px)]">
                  - Помогает клеткам вырабатывать больше энергии. В митохондриях
                  снижается тормозящий эффект тяжёлых молекул. В результате чего организм
                  быстрее восстанавливается, дольше остаётся бодрым и устойчивым к нагрузкам. <br />
                  - Помогает активизировать естественные защитные силы. Организм лучше
                  справляется со стрессами, вирусами и воспалениями. <br />
                  - Улучшает обмен веществ — ускоряет ключевые биохимические процессы.
                  Это помогает телу эффективнее усваивать питательные вещества, избавляться
                  от токсинов и поддерживать баланс. <br />
                  - Замедляет старение на клеточном уровне. Защищает ДНК и способствует
                  обновлению клеток. Это помогает дольше сохранять внутреннюю молодость
                  и стабильность работы органов и систем.
                </p>
              </div>

              <p className="relative z-50 text-white text-[clamp(14px,1.05vw,18px)]
                            p-4 leading-[1.5] w-auto max-w-[640px] self-start text-left">
                Венгерский ученый Габор Шомлай подтвердил: лёгкая вода способна замедлить
                метастазирование, восстанавливая защитные функции организма. И это не просто
                слова, это научно подтвержденная истина, скрытая в самой структуре воды —
                лёгкая вода с уровнем дейтерия ниже 135 ppm редка и особо ценна, ведь её структура
                максимально приближена к межклеточной жидкости нашего организма. Лёгкая вода — это
                не лекарство, а природная поддержка организма. Она работает мягко, но эффективно,
                помогая телу включать собственные ресурсы. Её регулярное употребление имеет
                накопительный эффект — улучшение самочувствия, ясность ума и лёгкость в теле
                становятся естественной нормой.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}*/}

