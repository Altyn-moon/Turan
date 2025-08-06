import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import KazakhText from "../ui/text-logo/kazakh-text";
import { useState } from "react";

interface KazakhSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function KazakhSection({ scrollYProgress }: KazakhSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText1(v > 0.44 && v < 0.5);
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowText2(v > 0.5 && v < 0.56);
  });
  const textBuildingY = useTransform(
    scrollYProgress,
    [0.44, 0.45, 0.56, 0.57],
    ["200%", "-10%", "-10%", "-200%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.44, 0.45, 0.56, 0.57],
    [0, 1, 1, 0]
  );

  useAutoScrollDown(scrollYProgress, 0.4, 0.46, 7.5);
  useAutoScrollDown(scrollYProgress, 0.47, 0.5, 8.4);
  const moveXCloud1 = useTransform(
    scrollYProgress,
    [0.43, 0.44, 0.45, 0.47],
    ["-200%", "0%", "0%", "-200%"]
  );

  const moveXCloud2 = useTransform(
    scrollYProgress,
    [0.43, 0.44, 0.45, 0.47],
    ["200%", "0%", "0%", "200%"]
  );

  const moveTextY1 = useTransform(
    scrollYProgress,
    [0.44, 0.46, 0.48, 0.5],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.44, 0.46, 0.48, 0.5],
    [0, 1, 1, 0]
  );

  const opacityTitle = useTransform(
    scrollYProgress,
    [0.44, 0.46, 0.54, 0.56],
    [0, 1, 1, 0]
  );

  const moveTextY2 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.54, 0.56],
    ["10%", "0%", "0%", "-10%"]
  );

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.54, 0.56],
    [0, 1, 1, 0]
  );

  return (
    <section className="h-screen relative w-full">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-20 pointer-events-none snap-end"
      >
        <div className="absolute z-0">
          <Image
            src={"/kazakh/kazakh_building.webp"}
            width={100}
            height={100}
            alt="building"
            className="w-full h-screen object-cover fixed top-0 z-10"
            unoptimized
          />
          <Image
            src={"/kazakh/kazakh_back.webp"}
            width={100}
            height={100}
            alt="building"
            className="w-full h-screen object-cover fixed top-0 z-0"
            unoptimized
          />
        </div>
        <div className="h-full w-full flex flex-col justify-between fixed top-0 left-0 gap-4 px-20 py-10 z-20">
          <motion.div
            style={{ y: textBuildingY }}
            className="w-full mt-10 self-start"
          >
            <KazakhText />
          </motion.div>
          <motion.div
            style={{ opacity: opacityTitle }}
            className="text-white blur-gray px-10 py-5 leading-tight w-full 1xl:w-1/2"
          >
            <p className="title-clamp font-bold mb-2">
              Локальность как принцип. Независимость как выбор.
            </p>
            <p className="text-clamp">
              TURAN — это не просто вода с казахстанским адресом на этикетке.
              Это продукт, в котором всё, без исключений, — казахстанского
              происхождения. Не на бумаге, а на деле: от источникаи
              производственной цепочки до упаковки.
            </p>
          </motion.div>
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full h-full flex flex-col justify-end"
            >
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4  text-white leading-tight">
                <div className="blur-gray text-center px-10 py-5">
                  <p className="title-clamp font-bold mb-2">Источник</p>
                  <p className="text-clamp">
                    Природный, глубинный, расположен в заповедной зоне
                    Кокшетауской возвышенности.
                  </p>
                </div>
                <div className="blur-gray text-center px-10 py-5">
                  <p className="title-clamp font-bold mb-2">Розлив</p>
                  <p className="text-clamp">
                    На собственном заводе, оснащенном самыми современными
                    автоматизированными линиями розлива от ведущих мировых
                    производителей: Krones, Sidel, FBT, KHS, общей
                    производственной мощностью более 70 000 бутылок в час.
                  </p>
                </div>
                <div className="blur-gray text-center px-10 py-5">
                  <p className="title-clamp font-bold mb-2">Упаковка</p>
                  <p className="text-clamp">
                    Даже РЕТ преформы (заготовки для бутылок), которые все
                    закупают у поставщиков, мы производим сами, здесь же на
                    заводе.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full h-full flex flex-col justify-end items-center gap-8"
            >
              <p className="text-white text-center text-clamp blur-gray p-4 leading-tight w-5/6">
                Мы не зависим от импорта, не ждём поставок из-за границы и не
                ищем подрядчиков за рубежом. Это не жест маркетинга, а
                стратегия: полный контроль над каждым звеном позволяет сохранять
                стабильность, гарантировать качество и действительно отвечать за
                продукт перед потребителем. Мы гордимся тем, что TURAN — не
                импортированный бренд и не франшиза. Это полностью казахстанская
                история: честная, прозрачная и сильная.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      <div className="fixed z-20 inset-0 p-20 h-full w-full">
        <div className="fixed top-0 z-30">
          <motion.div style={{ x: moveXCloud1 }} className="fixed top-0 z-20">
            <Image
              src={"/clouds/cloud1.webp"}
              width={100}
              height={100}
              alt="cloud1"
              className="w-screen h-screen scale-200"
            />
          </motion.div>

          <motion.div style={{ x: moveXCloud2 }} className="fixed top-0 z-20">
            <Image
              src={"/clouds/cloud2.webp"}
              width={100}
              height={100}
              alt="cloud1"
              className="w-screen h-screen scale-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
