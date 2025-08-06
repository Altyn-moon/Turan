import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import Image from "next/image";
import BirdText from "../../ui/text-logo/bird-text";
import { useState } from "react";

interface BirdSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function BirdSection({ scrollYProgress }: BirdSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.32 && v < 0.37);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.37 && v < 0.45);
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.32, 0.33, 0.39, 0.41],
    [0, 1, 1, 0]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.33, 0.39, 0.41],
    [0, 1, 1, 0]
  );

  const moveBirdY = useTransform(
    scrollYProgress,
    [0.32, 0.4, 0.43, 0.45],
    ["50%", "10%", "10%", "200%"]
  );

  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.32, 0.33, 0.35, 0.37],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.32, 0.33, 0.35, 0.37],
    [0, 1, 1, 0]
  );

  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.37, 0.39, 0.41, 0.45],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.37, 0.39, 0.41, 0.45],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.32, 0.35, 5.5);
  useAutoScrollDown(scrollYProgress, 0.35, 0.4, 6.2);

  return (
    <section className="relative w-full h-screen">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-20 pointer-events-none snap-end"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-8 px-20 py-10">
          <div className="w-full">
            <BirdText />
          </div>
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="text-white px-6 py-6 leading-tight w-2/3 self-end text-right flex flex-col gap-0.5 blur-blue">
                <p className="title-clamp w-full">
                  Вода TURAN отличается не только чистотой,но и естественным
                  уровнем pH. 7,5 — это именно тот показатель, к которому
                  стремится сам организм
                </p>
                <p className="text-white text-clamp w-full">
                  Такой уровень кислотно-щелочного баланса максимально близок к
                  внутренней среде человека, особенно к плазме крови и лимфе.Это
                  делает воду TURAN не просто утоляющей жажду, а физиологически
                  подходящей для ежедневного употребления.
                </p>
              </div>
              <p className="text-white text-clamp w-full blur-blue px-6 py-5">
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
              className="w-full h-full flex flex-col justify-between gap-8"
            >
              <div className="text-white px-6 py-6 leading-tight w-2/3 self-end text-right flex flex-col gap-0.5 blur-blue">
                <p className="text-clamp w-full">
                  pH — это показатель кислотно-щелочного равновесия. Вода с pH
                  7,5 мягко поддерживает внутренний баланс, не вызывая ни
                  закисления, ни ощелачивания. Она легко усваивается, не
                  перегружает организм, способствует нормализации обменных
                  процессов и помогает телу сохранять внутреннюю стабильность,
                  особенно при умственных и физических нагрузках, стрессах или
                  нарушениях питания
                </p>
              </div>
              <p className="text-white text-clamp blur-blue px-6 py-5 leading-tight max-w-2/3">
                Многие производители стремятся добиться «идеального» pH с
                помощью химической коррекции — добавляя соли или изменяя
                структуру воды. TURAN не нуждается в этом. Её сбалансированный
                уровень pH — естественный результат прохождения через глубинные
                геологические породы, сформированные миллионы лет назад. Природа
                сама отрегулировала этот баланс — мы просто бережно сохраняем
                его.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      <motion.div
        style={{ opacity: imageOpacity, y: moveBirdY }}
        className="fixed inset-0 bottom-0"
      >
        <Image
          fill
          src="/cave-water-bird/bird.webp"
          alt="bird"
          className="object-cover w-screen"
          unoptimized
        />
      </motion.div>
    </section>
  );
}
