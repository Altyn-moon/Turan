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

  // теперь 0.34–0.38
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.34 && v < 0.38));

  const opacity      = useTransform(scrollYProgress, [0.34, 0.345, 0.375, 0.38], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.34, 0.345, 0.375, 0.38], [0, 1, 1, 0]);
  const moveBirdY    = useTransform(scrollYProgress, [0.34, 0.355, 0.375, 0.38], ["50%", "10%", "10%", "200%"]);
  const moveTextY1   = useTransform(scrollYProgress, [0.34, 0.345, 0.37, 0.375], ["10%", "0%", "0%", "-10%"]);
  const opacityText1 = useTransform(scrollYProgress, [0.34, 0.345, 0.37, 0.375], [0, 1, 1, 0]);

  useAutoScrollDown(scrollYProgress, 0.335, 0.355, 5.6);

  return (
    <section className="relative w-full h-screen">
      <motion.section style={{ opacity }} className="relative top-0 w-full h-full z-30 pointer-events-none snap-none">
        {/* === Градиент-картинка: над фоном, под контентом === */}
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

        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 items-start z-40">
          <div className="leading-none mb-10 [&>svg]:block [&>svg]:static [&>svg]:w-[945px] [&>svg]:h-auto">
            <BirdText />
          </div>

          {showText1 && (
            <motion.div style={{ opacity: opacityText1, y: moveTextY1 }} className="w-full flex flex-col items-start justify-start gap-2 flex-none">
              <div className="relative z-50 text-white p-0 leading-[1.4] w-auto max-w-[620px] self-start text-left flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  Вода TURAN отличается не только чистотой, но и естественным уровнем pH. 7,5 — это именно тот показатель, к которому стремится сам организм. Такой уровень кислотно-щелочного баланса максимально близок к внутренней среде человека, особенно к плазме крови и лимфе. Это делает воду TURAN не просто утоляющей жажду, а физиологически подходящей для ежедневного употребления.
                </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] mt-2">
                  pH — это показатель кислотно-щелочного равновесия. Вода с pH 7,5 мягко поддерживает внутренний баланс, не вызывая ни закисления, ни ощелачивания. Она легко усваивается, не перегружает организм, способствует нормализации обменных процессов и помогает телу сохранять внутреннюю стабильность, особенно при умственных и физических нагрузках, стрессах или нарушениях питания.
                </p>
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4] mt-2">
                  Многие производители стремятся добиться «идеального» pH с помощью химической коррекции — добавляя соли или изменяя структуру воды. TURAN не нуждается в этом. Её сбалансированный уровень pH — естественный результат прохождения через глубинные геологические породы, сформированные миллионы лет назад. Природа сама отрегулировала этот баланс — мы просто бережно сохраняем его.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Птица: сдвигаем слой вправо на ~6vw (можно менять значение) */}
      <motion.div
        style={{ opacity: imageOpacity, y: moveBirdY }}
        className="fixed inset-0 z-10 overflow-hidden"
      >
        <div className="absolute inset-0 transform-gpu translate-x-[6vw] md:translate-x-[25vw]">
          <Image
            fill
            src="/cave-water-bird/bird.webp"
            alt="bird"
            className="object-cover w-screen"
            unoptimized
          />
        </div>
      </motion.div>
    </section>
  );
}