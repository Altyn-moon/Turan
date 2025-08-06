import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";
import WaterText from "../../ui/text-logo/water-text";

interface WaterSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function WaterSection({ scrollYProgress }: WaterSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.24 && v < 0.29);
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.29 && v < 0.34);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.24, 0.25, 0.32, 0.34],
    [0, 1, 1, 0]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.24, 0.25, 0.27, 0.29],
    [0, 1, 1, 0]
  );
  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.24, 0.25, 0.27, 0.29],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.32, 0.34],
    [0, 1, 1, 0]
  );
  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.32, 0.34],
    ["10%", "0%", "0%", "-10%"]
  );

  useAutoScrollDown(scrollYProgress, 0.22, 0.26, 4);
  useAutoScrollDown(scrollYProgress, 0.26, 0.31, 5);

  return (
    <section className="relative w-full h-screen">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-screen z-20 pointer-events-none snap-end bg-nature"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 px-20 py-10">
          <div className="w-full">
            <WaterText />
          </div>
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="text-white blur-blue p-4 leading-tight w-2/3 self-end text-right flex flex-col gap-0.5">
                <p className="title-clamp">
                  TURAN — это вода, которая сохраняет всё, чем её наделила
                  природа
                </p>
                <p className="text-clamp">
                  Её уникальность — в абсолютной чистоте, поэтому она не требует
                  глубоких вмешательств. В отличие от большинства бутилированной
                  воды, TURAN не подвергается химическим манипуляциям, не
                  проходит осмос (так как он вместе с обеззараживанием «убивает»
                  и все полезные свойства воды), не обременена искусственной
                  минерализацией. Её формула создана природой и подтверждена
                  наукой
                </p>
              </div>
              <p className="text-white text-clamp blur-blue p-4 leading-normal w-2/5">
                TURAN — вода, которую не создают, а бережно сохраняют. Без
                осмоса. Без химии. Без добавок. Только механическая очистка и
                природная формула, нетронутая временем. TURAN — вода, которую не
                создают, а бережно сохраняют. Без осмоса. Без химии. Без
                добавок. Только механическая очистка и природная формула,
                нетронутая временем.
              </p>
            </motion.div>
          )}
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full h-full flex flex-col justify-between gap-4"
            >
              <div className="text-white blur-blue p-4 leading-7 w-full flex flex-col gap-0.5 h-fit py-5 px-6">
                <p className="title-clamp">
                  Весь путь от скважины до бутылки устроен так, чтобы сохранить
                  природную формулу воды. TURAN проходит только две стадии
                  обработки — и обе являются механическими, то есть не
                  затрагивают её минеральный состав
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 2xl:gap-8 text-white leading-tight">
                <div className="blur-blue py-5 px-6 text-center">
                  <p className="title-clamp font-bold mb-2">
                    Дисковая фильтрация AZUD
                  </p>
                  <p className="text-clamp">
                    Удаляет крупные частицы: песок, ил, органические фрагменты и
                    механические примеси. Это первая и самая щадящая ступень
                    очистки — подобная природной фильтрации, как если бы вода
                    проходила через камни и песок.
                  </p>
                </div>
                <div className="blur-blue py-5 px-6 text-center">
                  <p className="title-clamp font-bold mb-2">
                    Микрофильтрация PALL (0,45 микрон)
                  </p>
                  <p className="text-clamp">
                    На этой стадии устраняются мельчайшие загрязнения: бактерии,
                    грибки, микроорганизмы и тонкодисперсные частицы. Вода
                    становится кристально чистой — не теряя при этом своих
                    природных свойств.
                  </p>
                </div>
                <div className="blur-blue py-5 px-6 text-center">
                  <p className="title-clamp font-bold mb-2">
                    Финальный штрих — озон
                  </p>
                  <p className="text-clamp">
                    Для микробиологической безопасности воду обрабатывают озоном
                    — натуральным окислителем, который уничтожает микробы, не
                    затрагивая минералы. Он распадается на кислород, оставляя
                    только вкус свежести и лёгкость.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
