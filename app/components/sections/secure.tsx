import { MotionValue, useTransform, motion, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useAutoScrollDown } from "@/app/utils/useAutoScrollDown";
import { useState } from "react";
import SecureText from "../ui/text-logo/secure-text";

interface SecureSectionProps { scrollYProgress: MotionValue<number>; }

export default function SecureSection({ scrollYProgress }: SecureSectionProps) {
  // 2 экрана: 0.60–0.70, 0.70–0.82
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText1(v > 0.60 && v < 0.70));
  useMotionValueEvent(scrollYProgress, "change", (v) => setShowText2(v > 0.70 && v < 0.82));

  const opacity  = useTransform(scrollYProgress, [0.60, 0.605, 0.815, 0.82], [0, 1, 1, 0]);
  const moveGuyX = useTransform(scrollYProgress, [0.60, 0.605, 0.815, 0.82], ["-100%", "0%", "0%", "-100%"]);

  const opacityText1 = useTransform(scrollYProgress, [0.60, 0.62, 0.68, 0.70], [0, 1, 1, 0]);
  const moveTextY1   = useTransform(scrollYProgress, [0.60, 0.62, 0.68, 0.70], ["10%", "0%", "0%", "-10%"]);

  const opacityText2 = useTransform(scrollYProgress, [0.70, 0.73, 0.81, 0.82], [0, 1, 1, 0]);
  const moveTextY2   = useTransform(scrollYProgress, [0.70, 0.73, 0.81, 0.82], ["10%", "0%", "0%", "-10%"]);

  useAutoScrollDown(scrollYProgress, 0.60, 0.70, 11.0);
  useAutoScrollDown(scrollYProgress, 0.70, 0.82, 12.0);

  return (
    <section className="relative w-full h-screen">
      <motion.section style={{ opacity }} className="relative top-0 w-full h-screen z-40 pointer-events-none snap-none">

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
                      
        {/* Фоновые слои */}
        <Image src={"/secure/bez_back.webp"} width={100} height={100} alt="bg"
               className="w-full h-screen object-cover object-center fixed top-0 z-0" unoptimized />

        <motion.div style={{ opacity, x: moveGuyX }} className="fixed top-0 left-0 w-full h-screen z-10">
          <Image src={"/secure/bez_guy.webp"} width={100} height={100} alt="guy"
                 className="w-full h-screen object-cover object-center" unoptimized />
        </motion.div>

        <motion.div style={{ opacity }} className="fixed top-0 left-0 w-full h-screen z-20 scale-125">
          <Image src={"/secure/bez_table.webp"} width={100} height={100} alt="table"
                 className="w-full h-screen object-cover object-center" unoptimized />
        </motion.div>

        {/* Контент справа */}
        <div className="h-full w-full flex flex-col fixed top-0 left-0 gap-2.5 px-20 pt-[90px] pb-10 z-40 items-end">
          <div className="leading-none mb-10 self-end
                          [&>svg]:block [&>svg]:static
                          [&>svg]:w-[590px] [&>svg]:h-auto">
            <SecureText />
          </div>

          {(showText1 || showText2) && (
            <motion.div style={{ opacity }} className="relative z-50 text-white p-0 leading-[1.4]
                                                         w-auto max-w-[660px] self-end text-right flex flex-col gap-0.5">
              <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                Вода TURAN не просто «соответствует нормам». Она подтверждает свою чистоту и стабильность каждый день, каждый месяц, каждый год.
              </p>
            </motion.div>
          )}

          {/* Экран 1 */}
          {showText1 && (
            <motion.div style={{ opacity: opacityText1, y: moveTextY1 }} className="w-full flex flex-col items-end justify-start gap-4 flex-none">
              <div className="grid gap-6 text-white w-full max-w-[1260px] self-end justify-items-end text-right">
                <div className="p-0 w-full max-w-[660px] relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp font-bold mb-2 leading-none">Автоматизированный контроль</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    Все этапы производства — от водозабора до упаковки — находятся под непрерывным контролем операторов. Современные цифровые системы отслеживают параметры в реальном времени, исключая человеческий фактор в критичных зонах
                  </p>
                </div>
                <div className="p-0 w-full max-w-[660px] relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp font-bold mb-2 leading-none">Ежегодная верификация <br></br> независимыми НИИ</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    Один раз в год TURAN проходит расширенный химический анализ в независимых научно-исследовательских институтах — как казахстанских, так и зарубежных. Это обеспечивает международную валидность данных и полное соответствие мировым стандартам
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Экран 2 */}
          {showText2 && (
            <motion.div style={{ opacity: opacityText2, y: moveTextY2 }} className="w-full flex flex-col items-end justify-start gap-4 flex-none">
              <div className="grid gap-6 text-white w-full max-w-[1260px] self-end justify-items-end text-right">
                <div className="p-0 w-full max-w-[660px] relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp font-bold mb-2 leading-none">Ежедневная проверка качества</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    На заводе KMW работает собственная лаборатория, где вода ежедневно проходит полный анализ по санитарно-гигиеническим, органолептическим и физико-химическим показателям. Это не формальность, а часть ежедневного производственного процесса
                  </p>
                </div>
                <div className="p-0 w-full max-w-[660px] relative z-50 text-white p-0 leading-[1.2]
                              w-auto max-w-[660px] self-end text-right
                              flex flex-col gap-3">
                  <p className="title-clamp font-bold mb-2 leading-[1.0]">Ежемесячный государственный <br></br> контроль</p>
                  <p className="col-span-2 col-end-5 w-5/6 2xl:w-2/3 text-clamp h-fit text-white font-bold leading-[1.4] text-justify  place-self-end">
                    Месторождение воды TURAN официально зарегистрировано и находится под надзором Комитета контроля качества МЗ РК. Специалисты ежемесячно выезжают на месторождение, где производят отбор проб прямо из эксплуатационной скважины — до какой-либо обработки или фильтрации. Пробы доставляются в аккредитованные лаборатории для проведения полного анализа: от химического состава до микробиологической чистоты. Это позволяет объективно оценивать стабильность природного источника и гарантировать безопасность воды на самом базовом уровне
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