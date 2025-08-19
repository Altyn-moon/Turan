import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";
import WaterText from "../../ui/text-logo/water-text";
import Image from "next/image";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

    // 0.22–0.26, 0.26–0.30, 0.30–0.34
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.22 && v < 0.26));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText2(v > 0.26 && v < 0.30));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText3(v > 0.30 && v < 0.34));

  const opacity      = useTransform(scrollYProgress, [0.22, 0.225, 0.335, 0.34], [0, 1, 1, 0]);

  const opacityText1 = useTransform(scrollYProgress, [0.22, 0.23, 0.255, 0.26], [0, 1, 1, 0]);
  const moveTextY1   = useTransform(scrollYProgress, [0.22, 0.23, 0.255, 0.26], ["10%","0%","0%","-10%"]);

  const opacityText2 = useTransform(scrollYProgress, [0.26, 0.27, 0.295, 0.30], [0, 1, 1, 0]);
  const moveTextY2   = useTransform(scrollYProgress, [0.26, 0.27, 0.295, 0.30], ["10%","0%","0%","-10%"]);

  const opacityText3 = useTransform(scrollYProgress, [0.30, 0.31, 0.335, 0.34], [0, 1, 1, 0]);
  const moveTextY3   = useTransform(scrollYProgress, [0.30, 0.31, 0.335, 0.34], ["10%","0%","0%","-10%"]);

  // автоскроллы тоже смещаем
  useAutoScrollDown(scrollYProgress, 0.22, 0.26, 3.7);
  useAutoScrollDown(scrollYProgress, 0.26, 0.30, 4.3);
  useAutoScrollDown(scrollYProgress, 0.30, 0.34, 4.9);

  return (
    <section className="relative w-full h-screen">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-none bg-nature"
      >
        {/* === Градиент-картинка справа: над фоном, под контентом === */}
      {/* фиксированное позиционирование + z-30, чтобы не перекрывал текст */}
      <div className="fixed top-0 right-0 h-screen w-full z-30 pointer-events-none">
        <div className="relative h-full w-full">
          <Image
            fill
            src="/cave-water-bird/gradient2.png"
            alt="gradient"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

        {/* фиксированная колонка контента справа */}
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 items-end z-40">
          {/* Заголовок */}
          <div className="leading-none mb-10 ml-auto
                          [&>svg]:block [&>svg]:static
                          [&>svg]:w-[400px] [&>svg]:h-auto">
            <WaterText />
          </div>

          {/* Страница 1 — интро */}
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full flex flex-col items-end justify-start gap-2 flex-none"
            >
              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-2">
                <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                  TURAN — это вода, которая сохраняет всё, чем её наделила природа. Её уникальность — в абсолютной чистоте, поэтому она не требует глубоких вмешательств. В отличие от большинства бутилированной воды, TURAN не подвергается химическим манипуляциям, не проходит осмос (так как он вместе с обеззараживанием «убивает» и все полезные свойства воды), не обременена искусственной минерализацией. Её формула создана природой и подтверждена наукой.
                </p>
                <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                  Весь путь от скважины до бутылки устроен так, чтобы сохранить природную формулу воды. TURAN проходит только две стадии обработки — и обе являются механическими, то есть не затрагивают её минеральный состав:
                </p>
              </div>
            </motion.div>
          )}

          {/* Страница 2 — AZUD */}
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full flex justify-end items-start gap-8 flex-none"
            >
              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp leading-[1.2]">Дисковая фильтрация <br></br>  AZUD (10 микрон)</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    Удаляет крупные частицы: песок, ил, органические фрагменты и механические примеси. Это первая и самая щадящая ступень очистки — подобная природной фильтрации, как если бы вода проходила через камни и песок.
                  </p>
                </div>
                <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp leading-[1.2]">Микрофильтрация <br></br> PALL (0,45 микрон) </p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    На этой стадии устраняются мельчайшие загрязнения: бактерии, грибки, микроорганизмы и тонкодисперсные частицы. Вода становится кристально чистой — не теряя при этом своих природных свойств.
                  </p>
                </div>
               
              </div>
            </motion.div>
          )}

          {/* Страница 3 — PALL + озон */}
          {showText3 && (
            <motion.div
              style={{ opacity: opacityText3, y: moveTextY3 }}
              className="w-full flex justify-end items-start gap-8 flex-none"
            >
              <div className="relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
              
               
                  <p className="title-clamp leading-[1.2]">Финальный штрих — озон</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    Чтобы обеспечить идеальную микробиологическую безопасность без потери природных качеств, вода обрабатывается озоном — мощным и абсолютно натуральным окислителем. Озон разрушает органику и нейтрализует микробы, не взаимодействуя с полезными минералами. В течение нескольких минут он распадается на чистый кислород, не оставляя никаких следов — только лёгкий вкус свежести и ощущение бодрящей лёгкости на языке.
                  </p>
                 <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                  TURAN — вода, которую не создают, а бережно сохраняют. Без осмоса. Без химии. Без добавок. Только механическая очистка и природная формула, нетронутая временем.
                </p>
              </div>
              
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
