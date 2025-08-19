import Image from "next/image";
import { motion, MotionValue, useMotionValueEvent, useTransform, useSpring } from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import KazakhText from "../ui/text-logo/kazakh-text";
import { useState } from "react";

interface KazakhSectionProps { scrollYProgress: MotionValue<number>; }

export default function KazakhSection({ scrollYProgress }: KazakhSectionProps) {
  // 3 экрана по 0.04: 0.38–0.42, 0.42–0.46, 0.46–0.50
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [showP3, setShowP3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setShowP1(v > 0.38 && v < 0.42));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowP2(v > 0.42 && v < 0.46));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowP3(v > 0.46 && v < 0.50));

  // секция — появление/исчезновение
  const opacity       = useTransform(scrollYProgress, [0.38, 0.385, 0.495, 0.50], [0, 1, 1, 0]);
  const textBuildingY = useTransform(scrollYProgress, [0.38, 0.39, 0.495, 0.50], ["200%", "-10%", "-10%", "-200%"]);

  // ===== Облака (внутри секции) =====
  const [showClouds, setShowClouds] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowClouds(v > 0.385 && v < 0.495));

  const cloudOpacityRaw = useTransform(scrollYProgress, [0.385, 0.395, 0.475, 0.485], [0, 1, 1, 0]);
  const moveXCloud1Raw  = useTransform(scrollYProgress, [0.385, 0.405, 0.455, 0.475], ["-110%", "0%", "0%", "110%"]);
  const moveXCloud2Raw  = useTransform(scrollYProgress, [0.385, 0.405, 0.455, 0.475], ["110%", "0%", "0%", "-110%"]);
  const moveYCloud1Raw  = useTransform(scrollYProgress, [0.385, 0.475], ["-3%", "3%"]);
  const moveYCloud2Raw  = useTransform(scrollYProgress, [0.385, 0.475], ["3%", "-3%"]);
  const scaleCloudsRaw  = useTransform(scrollYProgress, [0.385, 0.43, 0.475], [1.04, 1.0, 1.04]);

  // сглаживаем пружинами — ИМЕНА, КОТОРЫЕ ИСПОЛЬЗУЕМ В JSX:
  const cloudOpacity = useSpring(cloudOpacityRaw, { stiffness: 140, damping: 22, mass: 0.6 });
  const moveXCloud1  = useSpring(moveXCloud1Raw,   { stiffness: 140, damping: 22, mass: 0.6 });
  const moveXCloud2  = useSpring(moveXCloud2Raw,   { stiffness: 140, damping: 22, mass: 0.6 });
  const moveYCloud1  = useSpring(moveYCloud1Raw,   { stiffness: 140, damping: 22, mass: 0.6 });
  const moveYCloud2  = useSpring(moveYCloud2Raw,   { stiffness: 140, damping: 22, mass: 0.6 });
  const scaleClouds  = useSpring(scaleCloudsRaw,   { stiffness: 140, damping: 22, mass: 0.6 });

  // рампы карточек
  const opP1 = useTransform(scrollYProgress, [0.38, 0.395, 0.415, 0.42], [0, 1, 1, 0]);
  const opP2 = useTransform(scrollYProgress, [0.42, 0.435, 0.455, 0.46], [0, 1, 1, 0]);
  const yP2  = useTransform(scrollYProgress, [0.42, 0.435, 0.455, 0.46], ["10%", "0%", "0%", "-10%"]);
  const opP3 = useTransform(scrollYProgress, [0.46, 0.475, 0.495, 0.50], [0, 1, 1, 0]);
  const yP3  = useTransform(scrollYProgress, [0.46, 0.475, 0.495, 0.50], ["10%", "0%", "0%", "-10%"]);

  // автоскролл
  useAutoScrollDown(scrollYProgress, 0.38, 0.42, 6.8);
  useAutoScrollDown(scrollYProgress, 0.42, 0.46, 7.2);
  useAutoScrollDown(scrollYProgress, 0.46, 0.50, 7.6);

  return (
    <section className="h-screen relative w-full">
      <motion.section style={{ opacity }} className="relative top-0 w-full h-full z-40 pointer-events-none snap-none">
        {/* Градиент справа: над фоном, под контентом */}
        <div className="fixed top-0 right-0 h-screen w-full z-30 pointer-events-none">
          <div className="relative h-full w-full">
            <Image fill src="/cave-water-bird/gradient2.png" alt="gradient" className="object-cover" unoptimized />
          </div>
        </div>

        {/* Фон */}
        <div className="absolute z-0">
          <Image src={"/kazakh/kazakh_building.png"} width={100} height={100} alt="building"
                 className="w-full h-screen object-cover fixed top-0 z-40" unoptimized />
          <Image src={"/kazakh/kazakh_back.png"} width={100} height={100} alt="back"
                 className="w-full h-screen object-cover fixed top-0 z-0" unoptimized />
        </div>

        {/* Контент */}
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 z-40 items-end">
          <motion.div style={{ y: textBuildingY }} className="leading-none mb-10 self-end inline-block origin-top-right
                       [&>svg]:block [&>svg]:static [&>svg]:w-[880px] [&>svg]:h-auto">
            <KazakhText />
          </motion.div>

          {/* Экран 1 */}
          {showP1 && (
            <motion.div style={{ opacity: opP1 }} className="relative z-50 text-white p-0 leading-[1.4]
                         w-auto max-w-[660px] self-end text-right flex flex-col gap-0.5">
              <p className="title-clamp font-bold mb-2 leading-[1.2]">Локальность как принцип. <br></br> Независимость как выбор.</p>
              <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                TURAN — это не просто вода с казахстанским адресом на этикетке. Это продукт, в котором всё, без исключений, — казахстанского происхождения. Не на бумаге, а на деле: от источника и производственной цепочки до упаковки.
              </p>
            </motion.div>
          )}

          {/* Экран 2 */}
          {showP2 && (
            <motion.div style={{ opacity: opP2, y: yP2 }} className="w-full flex flex-col items-end justify-end gap-6 flex-none">
              <div className="p-0 w-full max-w-[660px] self-end text-right text-white relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                <p className="title-clamp font-bold mb-2 leading-[1.2]">Источник</p>
                <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">Природный, глубинный, расположен в заповедной зоне Кокшетауской возвышенности.</p>
              </div>
              <div className="p-0 w-full max-w-[660px] self-end text-right text-white relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                <p className="title-clamp font-bold mb-2 leading-[1.2]">Розлив</p>
                <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">На собственном заводе, оснащенном самыми современными автоматизированными линиями розлива от ведущих мировых производителей: Krones, Sidel, FBT, KHS, общей производственной мощностью более 70 000 бутылок в час.</p>
              </div>
              <div className="p-0 w-full max-w-[660px] self-end text-right text-white relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                <p className="title-clamp font-bold mb-2 leading-[1.2]">Упаковка</p>
                <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">Даже РЕТ преформы (заготовки для бутылок), которые все закупают у поставщиков, мы производим сами, здесь же на заводе.</p>
              </div>
              
            </motion.div>
          )}

          {/* Экран 3 */}
          {showP3 && (
            <motion.div style={{ opacity: opP3, y: yP3 }} className="w-full flex flex-col items-end justify-end gap-6 flex-none max-w-[660px]">
              <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                Мы не зависим от импорта, не ждём поставок из-за границы и не ищем подрядчиков за рубежом. Это не жест маркетинга, а стратегия: полный контроль над каждым звеном позволяет сохранять стабильность, гарантировать качество и действительно отвечать за продукт перед потребителем. Мы гордимся тем, что TURAN — не импортированный бренд и не франшиза. Это полностью казахстанская история: честная, прозрачная и сильная.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Облака — только в пределах секции */}
      {showClouds && (
        <div className="fixed z-30 inset-0 h-full w-full pointer-events-none">
          <div className="fixed top-0 z-30">
            <motion.div
              style={{ x: moveXCloud1, y: moveYCloud1, opacity: cloudOpacity, scale: scaleClouds }}
              className="fixed top-0 z-[35] will-change-transform">
              <Image src={"/clouds/cloud1.webp"} width={100} height={100} alt="cloud1" className="w-screen h-screen scale-150" unoptimized />
            </motion.div>
            <motion.div
              style={{ x: moveXCloud2, y: moveYCloud2, opacity: cloudOpacity, scale: scaleClouds }}
              className="fixed top-0 z-[35] will-change-transform">
              <Image src={"/clouds/cloud2.webp"} width={100} height={100} alt="cloud2" className="w-screen h-screen scale-150" unoptimized />
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}