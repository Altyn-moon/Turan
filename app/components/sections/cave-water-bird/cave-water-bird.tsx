import { motion, MotionValue, useTransform } from "framer-motion";
import CaveSection from "./cave";
import WaterSection from "./water";
import BirdSection from "./bird";
import Image from "next/image";

interface CaveWaterBirdSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CaveWaterBird({
  scrollYProgress,
}: CaveWaterBirdSectionProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0.14, 0.16, 0.4, 0.41],
    [0, 1, 1, 0]
  );

  const moveXCloud1 = useTransform(
    scrollYProgress,
    [0.39, 0.41, 0.43, 0.45],
    ["-200%", "0%", "0%", "-200%"]
  );

  const moveXCloud2 = useTransform(
    scrollYProgress,
    [0.39, 0.41, 0.43, 0.45],
    ["200%", "0%", "0%", "200%"]
  );

  return (
    <motion.section
      style={{ opacity }}
      className="w-screen max-h-[300vh] h-full z-10 overflow-hidden"
    >
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

      <div className="absolute inset-0 bg-cave-water-bird max-h-[750vh] 1xl:max-h-[670vh] 2xl:max-h-[600vh] h-full w-full bg-fit 1xl:bg-cover  bg-top z-0 top-[90vh] 1xl:top-[90vh] 2xl:top-[155vh] bg-no-repeat" />

      <div className="relative z-10 h-full">
        <CaveSection scrollYProgress={scrollYProgress} />
        <WaterSection scrollYProgress={scrollYProgress} />
        <BirdSection scrollYProgress={scrollYProgress} />
      </div>
    </motion.section>
  );
}
