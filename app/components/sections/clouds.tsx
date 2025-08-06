import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";

interface CloudsSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function CloudsSection({ scrollYProgress }: CloudsSectionProps) {
  const cloudScale1 = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.7, 75],
    [2, 0.7, 0.7, 0.3]
  );
  const cloudeMoveX1 = useTransform(
    scrollYProgress,
    [0.6, 0.62],
    ["0%", "-30%"]
  );
  const cloudeMoveY1 = useTransform(
    scrollYProgress,
    [0.6, 0.65],
    ["0%", "-100%"]
  );

  const cloudeMoveX2 = useTransform(
    scrollYProgress,
    [0.56, 0.62],
    ["0%", "30%"]
  );
  const cloudeMoveY2 = useTransform(
    scrollYProgress,
    [0.56, 0.59],
    ["0%", "-100%"]
  );

  const cloudeMoveX3 = useTransform(scrollYProgress, [0.6, 0.65], ["0%", "0%"]);
  const cloudeMoveY3 = useTransform(
    scrollYProgress,
    [0.6, 0.65],
    ["0%", "-100%"]
  );

  const opacityClouds = useTransform(
    scrollYProgress,
    [0.55, 0.58, 0.65],
    [0, 1, 0]
  );

  return (
    <div className="w-full fixed top-0 z-20">
      <motion.div
        style={{
          scale: cloudScale1,
          x: cloudeMoveX1,
          y: cloudeMoveY1,
          opacity: opacityClouds,
        }}
      >
        <Image
          src={"/clouds/cloud1.webp"}
          width={100}
          height={100}
          alt="cloud1"
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        style={{
          scale: cloudScale1,
          x: cloudeMoveX2,
          y: cloudeMoveY2,

          opacity: opacityClouds,
        }}
        className="w-full fixed top-0 z-20"
      >
        <Image
          src={"/clouds/cloud2.webp"}
          width={100}
          height={100}
          alt="cloud2"
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        style={{
          scale: cloudScale1,
          x: cloudeMoveX3,
          y: cloudeMoveY3,

          opacity: opacityClouds,
        }}
        className="w-full fixed top-0 z-20"
      >
        <Image
          src={"/clouds/cloud3.webp"}
          width={100}
          height={100}
          alt="cloud3"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
