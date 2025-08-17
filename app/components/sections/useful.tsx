import { MotionValue, useTransform, motion, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import UsefulText from "../ui/text-logo/useful-text";
import { useState } from "react";

interface UsefulSectionProps { scrollYProgress: MotionValue<number>; }

export default function UsefulSection({ scrollYProgress }: UsefulSectionProps) {
  // три экрана: 0.48–0.52–0.56–0.60
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.48 && v < 0.52));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText2(v > 0.52 && v < 0.56));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText3(v > 0.56 && v < 0.60));

  const opacity      = useTransform(scrollYProgress, [0.48, 0.49, 0.595, 0.60], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.48, 0.49, 0.595, 0.60], [0, 1, 1, 0]);
  const imageX       = useTransform(scrollYProgress, [0.48, 0.49, 0.595, 0.60], ["100%", "27%", "27%", "100%"]);

  const opacityText1 = useTransform(scrollYProgress, [0.48, 0.495, 0.51, 0.52], [0, 1, 1, 0]);
  const moveTextY1   = useTransform(scrollYProgress, [0.48, 0.495, 0.51, 0.52], ["10%", "0%", "0%", "-10%"]);

  const opacityText2 = useTransform(scrollYProgress, [0.52, 0.535, 0.55, 0.56], [0, 1, 1, 0]);
  const moveTextY2   = useTransform(scrollYProgress, [0.52, 0.535, 0.55, 0.56], ["10%", "0%", "0%", "-10%"]);

  const opacityText3 = useTransform(scrollYProgress, [0.56, 0.575, 0.595, 0.60], [0, 1, 1, 0]);
  const moveTextY3   = useTransform(scrollYProgress, [0.56, 0.575, 0.595, 0.60], ["10%", "0%", "0%", "-10%"]);

  const opacityTitle2 = useTransform(scrollYProgress, [0.52, 0.535, 0.595, 0.60], [0, 1, 1, 0]);
  const moveTitle2    = useTransform(scrollYProgress, [0.52, 0.535, 0.595, 0.60], ["10%", "0%", "0%", "-10%"]);

  useAutoScrollDown(scrollYProgress, 0.48, 0.52, 8.9);
  useAutoScrollDown(scrollYProgress, 0.52, 0.56, 9.6);
  useAutoScrollDown(scrollYProgress, 0.56, 0.60, 10.3);

  return (
    <section className="h-screen relative w-full">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-40 pointer-events-none snap-none"
      >

        {/* === Градиент-картинка: над фоном, под контентом === */}
                {/* важно: используем fixed и z-30, чтобы не перекрывал текст */}
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

        {/* колонка контента слева (как в cave.tsx) */}
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 z-40">
          <div className="leading-none mb-10 [&>svg]:block [&>svg]:static [&>svg]:w-[400px] [&>svg]:h-auto">
            <UsefulText />
          </div>

          {/* Экран 1 */}
          {showText1 && (
            <motion.div style={{ opacity: opacityText1, y: moveTextY1 }} className="w-full flex flex-col items-start justify-start gap-2 flex-none">
              <div className="relative z-50 text-white p-0 leading-[1.4] w-auto max-w-[630px] self-start text-left flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  TURAN — это тонкая, незаметная, но ежедневная поддержка организма. Она содержит комплекс жизненно важных минералов, без которых наше тело не может функционировать полноценно. Они не добавлены извне и не подогнаны под норму. Это натуральный природный состав: ровно столько, сколько нужно, чтобы поддерживать здоровье, не перегружая организм. Именно поэтому воду TURAN можно и нужно пить каждый день.
                </p>
              </div>
            </motion.div>
          )}

          {/* Заголовок «Что делает…» */}
          {(showText2 || showText3) && (
            <motion.div style={{ opacity: opacityTitle2, y: moveTitle2 }} className="relative z-50 flex justify-start h-fit text-white leading-tight text-left w-full">
              <p className="title-clamp w-fit">Что делает воду TURAN полезной?</p>
            </motion.div>
          )}

          {/* Экран 2 */}
          {showText2 && (
            <motion.div style={{ opacity: opacityText2, y: moveTextY2 }} className="relative z-50 w-full flex flex-col justify-start items-start gap-4 flex-none">
              <div className="text-white text-left flex flex-col gap-2 w-auto max-w-[630px] p-0">
                <div>
                  <p className="title-clamp">Кальций</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Поддерживает здоровье сердца, укрепляет кости и зубы, регулирует работу сосудов и свертываемость крови. Его регулярное поступление помогает в профилактике остеопороза и играет важную роль в иммунной защите организма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Магний</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Влияет на сотни процессов в организме — от усвоения белков до нормальной работы нервной системы. Снижает уровень холестерина, уменьшает нервное напряжение, помогает избежать судорог и нарушений сердечного ритма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Калий и натрий</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Эти элементы работают в паре: регулируют водно-солевой баланс, поддерживают сердечный ритм, участвуют в передаче нервных сигналов и обеспечивают здоровую работу мышц. Их дефицит может вызывать слабость, обезвоживание и сбои в работе сердца.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Экран 3 */}
          {showText3 && (
            <motion.div style={{ opacity: opacityText3, y: moveTextY3 }} className="relative z-50 w-full flex flex-col justify-start items-start gap-4 flex-none">
              <div className="text-white text-left flex flex-col gap-2 w-auto max-w-[630px] p-0">
                <div>
                  <p className="title-clamp">Гидрокарбонаты</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Отвечают за кислотно-щелочное равновесие организма. Они улучшают пищеварение, снижают избыточную кислотность желудочного сока и способствуют мягкому выводу продуктов обмена веществ.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Фтор</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Укрепляет эмаль зубов, кости, участвует в обмене кальция и фосфора. Обладает антибактериальными свойствами, поддерживает здоровье полости рта и способствует выведению тяжёлых металлов из организма.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Йод</p>
                  <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                    Важнейший микроэлемент для щитовидной железы. Участвует в выработке гормонов, влияющих на метаболизм, уровень энергии, концентрацию и развитие мозга.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Девушка */}
        <motion.div style={{ opacity: imageOpacity, x: imageX }} className="fixed inset-0 left-0 w-full z-10">
          <Image fill src="/useful/poleznaya_girl.png" alt="girl" className="object-contain object-center" unoptimized />
        </motion.div>

        {/* Облака */}
        <motion.div style={{ opacity: imageOpacity }} className="fixed inset-0 -z-10">
          <Image fill src="/useful/bg-cloud.webp" alt="useful background" className="object-cover" unoptimized />
        </motion.div>
      </motion.section>
    </section>
  );
}



/*import {
  MotionValue,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import UsefulText from "../ui/text-logo/useful-text";
import { useState } from "react";

interface UsefulSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function UsefulSection({ scrollYProgress }: UsefulSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.55 && v < 0.6);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.6 && v < 0.64);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText3(v > 0.64 && v < 0.69);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const imageX = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.67, 0.69],
    ["-100%", "-30%", "-30%", "-100%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.58, 0.6],
    [0, 1, 1, 0]
  );
  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.55, 0.57, 0.58, 0.6],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.62, 0.64],
    [0, 1, 1, 0]
  );
  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.62, 0.64],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText3 = useTransform(
    scrollYProgress,
    [0.63, 0.65, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const moveTextY3 = useTransform(
    scrollYProgress,
    [0.63, 0.65, 0.67, 0.69],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityTitle2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.67, 0.69],
    [0, 1, 1, 0]
  );
  const moveTitle2 = useTransform(
    scrollYProgress,
    [0.59, 0.61, 0.67, 0.69],
    ["10%", "0%", "0%", "-10%"]
  );

  useAutoScrollDown(scrollYProgress, 0.54, 0.57, 9.2);
  useAutoScrollDown(scrollYProgress, 0.58, 0.61, 9.9);
  useAutoScrollDown(scrollYProgress, 0.62, 0.65, 10.7);

  return (
    <section className="h-screen relative w-full">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-20 pointer-events-none snap-end"
      >
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-4 px-20 py-10 z-20">
          <div className="w-full mt-10 self-start relative z-20">
            <UsefulText />
          </div>
          <motion.div
            style={{ opacity: imageOpacity, x: imageX }}
            className="fixed inset-0 left-0 w-full z-30"
          >
            <Image
              fill
              src="/useful/poleznaya_girl.webp"
              alt="girl"
              className="object-contain object-center"
              unoptimized
            />
          </motion.div>
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-between items-end relative z-30"
            >
              <div className="flex flex-col gap-2 h-fit text-white leading-tight px-6 py-5 text-right w-2/3">
                <p className="title-clamp">
                  TURAN — это тонкая, незаметная,но ежедневная поддержка
                  организма
                </p>
                <p className="text-clamp">
                  Она содержит комплекс жизненно важных минералов, без которых
                  наше тело не может функционировать полноценно. Они не
                  добавлены извне и не подогнаны под норму. Это натуральный
                  природный состав: ровно столько, сколько нужно, чтобы
                  поддерживать здоровье, не перегружая организм. Именно поэтому
                  воду TURAN можно и нужно пить каждый день
                </p>
              </div>
              <p className="text-white text-right text-clamp px-6 py-5 leading-tight w-2/3">
                Минерализация 0,2 - 0,47 г/дм³ — это физиологическая норма, при
                которой вода не только утоляет жажду, но и работает на вас:
                помогает клеткам, сосудам, нервной системе, костям, обмену
                веществ
              </p>
            </motion.div>
          )}
          {showText2 || showText3 ? (
            <motion.div
              style={{ opacity: opacityTitle2, y: moveTitle2 }}
              className="relative z-30 flex justify-end h-fit text-white leading-tight text-right w-full"
            >
              <p className="title-clamp px-6 py-5 w-fit">
                Что делает воду TURAN полезной?
              </p>
            </motion.div>
          ) : null}
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="relative z-30 w-full h-full flex flex-col justify-end items-end gap-8"
            >
              <div className="text-white text-right flex flex-col gap-2 w-2/3 px-6 py-4">
                <div>
                  <p className="title-clamp">Кальций</p>
                  <p className="text-clamp">
                    Поддерживает здоровье сердца, укрепляет кости и зубы,
                    регулирует работу сосудов и свертываемость крови. Его
                    регулярное поступление помогает в профилактике остеопороза и
                    играет важную роль в иммунной защите организма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Магний</p>
                  <p className="text-clamp">
                    Магний Влияет на сотни процессов в организме — от усвоения
                    белков до нормальной работы нервной системы. Снижает уровень
                    холестерина, уменьшает нервное напряжение, помогает избежать
                    судорог и нарушений сердечного ритма
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Гидрокарбонаты</p>
                  <p className="text-clamp">
                    Отвечают за кислотно-щелочное равновесие организма. Они
                    улучшают пищеварение, снижают избыточную кислотность
                    желудочного сока и способствуют мягкому выводу продуктов
                    обмена веществ
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          {showText3 && (
            <motion.div
              style={{ opacity: opacityText3, y: moveTextY3 }}
              className="relative z-30 w-full h-full flex flex-col justify-end items-end gap-8"
            >
              <div className="text-white text-right flex flex-col gap-2 w-2/3 px-6 py-4">
                <div>
                  <p className="title-clamp">Калий и натрий</p>
                  <p className="text-clamp">
                    Эти элементы работают в паре: регулируют водно-солевой
                    баланс, поддерживают сердечный ритм, участвуют в передаче
                    нервных сигналов и обеспечивают здоровую работу мышц. Их
                    дефицит может вызывать слабость, обезвоживание и сбои в
                    работе сердца.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Фтор</p>
                  <p className="text-clamp">
                    Укрепляет эмаль зубов, кости, участвует в обмене кальция и
                    фосфора. Обладает антибактериальными свойствами,
                    поддерживает здоровье полости рта и способствует выведению
                    тяжёлых металлов из организма.
                  </p>
                </div>
                <div>
                  <p className="title-clamp">Йод</p>
                  <p className="text-clamp">
                    Важнейший микроэлемент для щитовидной железы. Участвует в
                    выработке гормонов, влияющих на метаболизм, уровень энергии,
                    концентрацию и развитие мозга.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          style={{ opacity: imageOpacity }}
          className="fixed inset-0 -z-10"
        >
          <Image
            fill
            src="/useful/bg-cloud.webp"
            alt="useful background"
            className="object-cover"
            unoptimized
          />
        </motion.div>
      </motion.section>
    </section>
  );
}*/
