import { motion, MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import Image from "next/image";
import MenuButton from "../ui/menu-button";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";
import FamilyText from "../ui/text-logo/family-text";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AwardSectionProps { scrollYProgress: MotionValue<number>; }

const golds = [
  { url: "/awards/gold4.png", className: "h-20 w-20" },
  { url: "/awards/gold5.png", className: "h-20 w-20" },
  { url: "/awards/gold6.png", className: "h-20 w-20" },
  { url: "/awards/gold7.png", className: "h-20 w-20" },
];
const silvers = [
  { url: "/awards/silver5.png", className: "h-20 w-20" },
  { url: "/awards/silver6.png", className: "h-20 w-20" },
  { url: "/awards/silver1.png", className: "h-20 w-20" },
  { url: "/awards/silver2.png", className: "h-20 w-20" },
];

export default function AwardSection({ scrollYProgress }: AwardSectionProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  // было: [0.86–0.90], [0.90–0.94], [0.94–0.99]
  // стало: [0.82–0.86], [0.86–0.90], [0.90–0.95]  → финиш до 0.95
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.82 && v < 0.86));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText2(v > 0.86 && v < 0.90));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText3(v > 0.90 && v < 0.95));

  const opacity      = useTransform(scrollYProgress, [0.82, 0.83, 0.95, 0.955], [0, 1, 1, 0]);
  const opacityText1 = useTransform(scrollYProgress, [0.82, 0.83, 0.855, 0.86], [0, 1, 1, 0]);
  const moveTextY1   = useTransform(scrollYProgress, [0.82, 0.83, 0.855, 0.86], ["10%", "0%", "0%", "-10%"]);
  const opacityText2 = useTransform(scrollYProgress, [0.86, 0.87, 0.895, 0.90], [0, 1, 1, 0]);
  const moveTextY2   = useTransform(scrollYProgress, [0.86, 0.87, 0.895, 0.90], ["10%", "0%", "0%", "-10%"]);

  // пинки под новые зоны (финальный заканчивает в 0.95)
  useAutoScrollDown(scrollYProgress, 0.82, 0.86, 13.2);
  useAutoScrollDown(scrollYProgress, 0.86, 0.90, 13.8);
  useAutoScrollDown(scrollYProgress, 0.90, 0.95, 14.6);

  const router = useRouter();

  return (
    <section className="relative h-screen w-full">
      <motion.section
        style={{ opacity }}
        className="relative top-0 w-full h-full z-50 pointer-events-none snap-none">
        
                        <div className="fixed top-0 left-0 h-screen w-1/2 z-30 pointer-events-none">
                          <div className="relative h-full w-full">
                            <Image
                              fill
                              src="/cave-water-bird/gradient3.png"
                              alt="gradient"
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
        
        <div className="fixed inset-0 z-0">
          <Image
            fill
            src="/awards/bg-family.webp"
            alt="background"
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="fixed inset-0 z-20 translate-y-2">
          <Image
            fill
            src="/awards/family.png"
            alt="family"
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-0 px-20 pt-[90px] pb-10 z-40 text-white">
          
          <div className="leading-none mb-10
                          [&>svg]:block [&>svg]:static
                          [&>svg]:w-[1165px] [&>svg]:h-auto">
            <FamilyText />
          </div>

         
          {showText1 && (
            <motion.div
              style={{ opacity: opacityText1, y: moveTextY1 }}
              className="w-full flex flex-col items-start justify-start gap-5 flex-none"
            >

              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[630px] self-start text-left
                              flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  Вода TURAN отмечена более чем 20 республиканскими и международными наградами за безупречное качество, природный состав и производственные стандарты.
                </p>
              </div>
              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[630px] self-start text-left
                              flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  Вот уже несколько лет подряд TURAN получает высшую награду от Monde Selection — одного из самых авторитетных европейских институтов оценки качества. Эта независимая экспертиза проводится в Брюсселе, и включает слепую дегустацию, анализ состава и производственного процесса.
                </p>
              </div>

              <div className="flex gap-4 items-center self-start relative z-50">
                {golds.map((gold, i) => (
                  <Image
                    key={i}
                    width={80}
                    height={80}
                    src={gold.url}
                    className={gold.className}
                    alt="gold"
                    unoptimized
                  />
                ))}
              </div>

              <div className="flex gap-6 mt-4 items-center self-start relative z-50">
                <Image src="/awards/gold1.png" width={52} height={88} alt="gold1" unoptimized />
                <Image src="/awards/gold2.png" width={52} height={88} alt="gold2" unoptimized />
                <Image src="/awards/gold3.png" width={52} height={88} alt="gold3" unoptimized />
              </div>
              
            </motion.div>
          )}
          
          {showText2 && (
            <motion.div
              style={{ opacity: opacityText2, y: moveTextY2 }}
              className="w-full flex flex-col items-start justify-start gap-5 flex-none">

              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[630px] self-start text-left
                              flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  TURAN — одна из немногих вод в регионе, прошедших проверку SGS Institut Fresenius. Это мировой эталон лабораторного контроля, которому доверяют более 160 лет. Институт оценивает не только воду в бутылке, но и весь путь от скважины до розлива: санитарные условия, оборудование, технологии.
                </p>
              </div>
              <div className="relative z-50 text-white p-0 leading-[1.4]
                              w-auto max-w-[630px] self-start text-left
                              flex flex-col gap-0.5">
                <p className="text-[clamp(14px,1.05vw,18px)] leading-[1.4]">
                  С 1991 года TURAN остаётся верна своему стандарту: только природная вода, только проверенное качество — и только та чистота, за которую голосуют профессионалы по всему миру.
                </p>
              </div>

              <div className="flex gap-4 items-center self-start relative z-50">
                {silvers.map((silver, i) => (
                  <Image
                    key={i}
                    width={80}
                    height={80}
                    src={silver.url}
                    className={silver.className}
                    alt="silver"
                    unoptimized
                  />
                ))}
              </div>
            </motion.div>
          )}

        {showText3 && (
          <div className="w-full flex flex-col xl:flex-row items-start gap-4 relative z-50"> 
            <div className="flex flex-col gap-4 pointer-events-auto">             
              <div
                onClick={() => router.push("/turan/social")}
                className="
                  group inline-block cursor-pointer
                  group-hover:[&>div>button]:text-black
                  group-hover:[&>div>button]:border-black">
                <div>
                  <MenuButton>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</MenuButton>
                </div>
              </div>

              <div
                onClick={() => router.push("/turan/useful")}
                className="
                  group inline-block cursor-pointer
                  group-hover:[&>div>button]:text-black
                  group-hover:[&>div>button]:border-black">
                <div>
                  <MenuButton>ПОЛЕЗНО ЗНАТЬ</MenuButton>
                </div>
              </div>

              <div
                onClick={() => router.push("/turan/assortiment")}
                className="
                  group inline-block cursor-pointer
                  group-hover:[&>div>button]:text-black
                  group-hover:[&>div>button]:border-black">
                <div>
                  <MenuButton>АССОРТИМЕНТ</MenuButton>
                </div>
              </div>


              <div
                onClick={() => router.push("/turan/delivery")}
                className="
                  group inline-block cursor-pointer
                  group-hover:[&>div>button]:text-black
                  group-hover:[&>div>button]:border-black">
                <div>
                  <MenuButton>ДОСТАВКА</MenuButton>
                </div>
              </div>
            </div>
          </div>
        )}



        </div>
      </motion.section>
    </section>
  );
}