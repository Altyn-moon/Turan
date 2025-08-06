import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import LogoText from "../ui/logo-text";

interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroSection({ scrollYProgress }: HeroSectionProps) {
  const scale = useTransform(scrollYProgress, [0, 0.02], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <motion.section
      className="relative w-full h-screen z-0 pointer-events-none"
      style={{ scale, opacity }}
    >
      <div className="relative h-full w-full">
        <Image
          src="/hero/bg-hero.webp"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-end text-center pr-[8vw] z-40 gap-2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-[#05A8E2] text-lg tracking-widest uppercase">
              ЕДИНСТВЕННАЯ В КАЗАХСТАНЕ
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium text-[#153A51] leading-none">
              ПРИРОДНАЯ ЛЕГКАЯ
              <br />
              ЖИВАЯ ВОДА
            </h1>
            <LogoText />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
